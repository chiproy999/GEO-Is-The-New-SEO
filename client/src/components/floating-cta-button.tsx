import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmailCaptureForm from './email-capture-form';
import { FileText, X } from 'lucide-react';

export default function FloatingCTAButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  
  useEffect(() => {
    // Check if user already subscribed
    const subscribedEmail = localStorage.getItem('geo_subscribed_email');
    if (subscribedEmail) return; // Don't show if already subscribed

    // Check if user dismissed the button
    const dismissedTime = localStorage.getItem('geo_floating_cta_dismissed');
    if (dismissedTime) {
      const dismissed = new Date(dismissedTime);
      const hoursSinceDismissed = (Date.now() - dismissed.getTime()) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 48) return; // Don't show for 48 hours after dismissal
    }

    // Show button after user scrolls 20% of the page
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 20) {
        setIsVisible(true);
      } else if (scrollPercentage < 10) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsMinimized(true);
    localStorage.setItem('geo_floating_cta_dismissed', new Date().toISOString());
    
    // Hide completely after animation
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleSuccess = () => {
    setIsModalOpen(false);
    setIsVisible(false); // Hide button after subscription
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          isMinimized ? 'opacity-0 scale-75' : 'opacity-100 scale-100'
        }`}
        data-testid="floating-cta-container"
      >
        {/* Desktop version */}
        <div className="hidden sm:block">
          <div className="relative">
            {/* Pulsing animation */}
            <div className="absolute inset-0 bg-brand-blue rounded-lg animate-pulse opacity-75"></div>
            
            {/* Main button */}
            <div className="relative bg-gradient-to-r from-brand-blue to-emerald-600 rounded-lg shadow-xl p-1">
              <div className="bg-white rounded-md p-4">
                <button
                  onClick={handleDismiss}
                  className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900 transition-colors"
                  aria-label="Close"
                  data-testid="button-dismiss-floating"
                >
                  <X className="h-3 w-3" />
                </button>
                
                <div className="flex items-center gap-4">
                  <FileText className="h-10 w-10 text-brand-blue flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">Free Download</p>
                    <p className="text-sm font-bold text-gray-900">GEO Quick Start Checklist</p>
                    <p className="text-xs text-gray-600">Essential optimization tips</p>
                  </div>
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-brand-blue hover:bg-brand-blue/90"
                    size="sm"
                    data-testid="button-get-checklist"
                  >
                    Get Free
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile version - simpler */}
        <div className="sm:hidden">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-brand-blue to-emerald-600 hover:from-brand-blue/90 hover:to-emerald-600/90 shadow-lg"
            size="lg"
            data-testid="button-get-checklist-mobile"
          >
            <FileText className="mr-2 h-5 w-5" />
            Free Checklist
          </Button>
          
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 bg-gray-800 text-white rounded-full p-1"
            aria-label="Close"
            data-testid="button-dismiss-floating-mobile"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[525px]" data-testid="modal-floating-cta">
          <DialogHeader className="text-center">
            <div className="mx-auto mb-4">
              <FileText className="h-12 w-12 text-brand-blue" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              Your Free GEO Quick Start Checklist
            </DialogTitle>
            <DialogDescription className="text-gray-600 mt-2">
              Get instant access to our optimization checklist with practical tips 
              to improve your visibility in AI search results.
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <EmailCaptureForm
              source="floating"
              showName={true}
              onSuccess={handleSuccess}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}