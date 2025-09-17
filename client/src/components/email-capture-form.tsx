import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Download, CheckCircle2 } from 'lucide-react';

interface EmailCaptureFormProps {
  source: string;
  variant?: 'default' | 'inline' | 'minimal';
  title?: string;
  description?: string;
  buttonText?: string;
  showName?: boolean;
  onSuccess?: (data: SubscriptionResponse) => void;
}

interface SubscriptionResponse {
  success: boolean;
  message: string;
  leadMagnet?: {
    type: string;
    name: string;
    downloadUrl: string;
  };
}

export default function EmailCaptureForm({ 
  source, 
  variant = 'default',
  title = "Get Your Free 5-Step GEO Starter Guide",
  description = "Simple tips to begin improving your AI search visibility",
  buttonText = "Get Instant Access",
  showName = false,
  onSuccess
}: EmailCaptureFormProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const subscribeMutation = useMutation({
    mutationFn: async (data: { email: string; name?: string; source: string; leadMagnet?: string }) => {
      const response = await apiRequest('POST', '/api/subscribe', data);
      const result = await response.json();
      return result as SubscriptionResponse;
    },
    onSuccess: (data: SubscriptionResponse) => {
      setIsSubscribed(true);
      setDownloadUrl(data.leadMagnet?.downloadUrl || null);
      
      // Store in localStorage to prevent re-showing
      localStorage.setItem('geo_subscribed_email', email);
      localStorage.setItem('geo_subscription_date', new Date().toISOString());
      
      toast({
        title: "Success!",
        description: data.message,
      });
      
      if (onSuccess) {
        onSuccess(data);
      }
      
      // Auto-download the checklist
      if (data.leadMagnet?.downloadUrl) {
        setTimeout(() => {
          window.open(data.leadMagnet!.downloadUrl, '_blank');
        }, 1000);
      }
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    subscribeMutation.mutate({
      email,
      name: showName ? name : undefined,
      source,
      leadMagnet: 'geo-starter-guide'
    });
  };

  if (isSubscribed) {
    return (
      <div className="text-center space-y-4" data-testid="subscription-success">
        <div className="flex items-center justify-center mb-4">
          <CheckCircle2 className="h-12 w-12 text-green-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">You're All Set!</h3>
        <p className="text-gray-600">Check your email for your free 5-Step GEO Starter Guide.</p>
        {downloadUrl && (
          <Button
            onClick={() => window.open(downloadUrl, '_blank')}
            className="mt-4"
            data-testid="button-download-checklist"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Guide Now
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2" data-testid="form-email-capture-minimal">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
          data-testid="input-email"
          disabled={subscribeMutation.isPending}
        />
        <Button 
          type="submit" 
          disabled={subscribeMutation.isPending}
          data-testid="button-subscribe"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            buttonText
          )}
        </Button>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="bg-gradient-to-r from-brand-blue/5 to-emerald-500/5 rounded-lg p-6 border border-brand-blue/20">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="space-y-3" data-testid="form-email-capture-inline">
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your best email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              data-testid="input-email"
              disabled={subscribeMutation.isPending}
            />
            <Button 
              type="submit" 
              disabled={subscribeMutation.isPending}
              className="bg-brand-blue hover:bg-brand-blue/90"
              data-testid="button-subscribe"
            >
              {subscribeMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  {buttonText}
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-email-capture">
        {showName && (
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="input-name"
            disabled={subscribeMutation.isPending}
          />
        )}
        
        <Input
          type="email"
          placeholder="Enter your best email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          data-testid="input-email"
          disabled={subscribeMutation.isPending}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-brand-blue hover:bg-brand-blue/90"
          size="lg"
          disabled={subscribeMutation.isPending}
          data-testid="button-subscribe"
        >
          {subscribeMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              {buttonText}
            </>
          )}
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          No spam, ever. Unsubscribe anytime. Your email is safe with us.
        </p>
      </form>
    </div>
  );
}