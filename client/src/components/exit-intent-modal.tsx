import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmailCaptureForm from './email-capture-form';
import { X, Gift } from 'lucide-react';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user already subscribed or dismissed recently
    const subscribedEmail = localStorage.getItem('geo_subscribed_email');
    const dismissedTime = localStorage.getItem('geo_exit_modal_dismissed');
    
    if (subscribedEmail) return; // Already subscribed
    
    if (dismissedTime) {
      const dismissed = new Date(dismissedTime);
      const hoursSinceDismissed = (Date.now() - dismissed.getTime()) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) return; // Don't show again for 24 hours
    }

    let exitTimer: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse is leaving viewport at the top
      if (e.clientY <= 0 && !hasShown) {
        // Delay slightly to avoid accidental triggers
        exitTimer = setTimeout(() => {
          setIsOpen(true);
          setHasShown(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (exitTimer) {
        clearTimeout(exitTimer);
      }
    };

    // Also show on mobile after scrolling 50% of page
    const handleScroll = () => {
      if (hasShown) return;
      
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage > 50) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Desktop exit intent
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    } else {
      // Mobile scroll trigger
      window.addEventListener('scroll', handleScroll);
    }

    // Also show after 30 seconds on page
    const timeoutId = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 30000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    // Store dismissal time
    localStorage.setItem('geo_exit_modal_dismissed', new Date().toISOString());
  };

  const handleSuccess = () => {
    setIsOpen(false);
    // User subscribed, no need to show again
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[525px]" data-testid="modal-exit-intent">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500"
          data-testid="button-close-modal"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
        
        <DialogHeader className="text-center pb-4">
          <div className="mx-auto mb-4">
            <Gift className="h-12 w-12 text-brand-blue" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Wait! Don't Leave Empty-Handed
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-base mt-2">
            Get our free 5-Step GEO Starter Guide to begin improving 
            your AI search visibility today.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Your Free 5-Step Guide Includes:</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                5 essential steps to get started with GEO
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                Quick tips for immediate improvements
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">→</span>
                Simple action items you can implement today
              </li>
            </ul>
          </div>
          
          <EmailCaptureForm
            source="exit"
            variant="minimal"
            buttonText="Get Free Guide"
            onSuccess={handleSuccess}
          />
          
          <p className="text-xs text-gray-500 text-center">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}