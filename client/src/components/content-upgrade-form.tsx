import EmailCaptureForm from './email-capture-form';
import { FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface ContentUpgradeFormProps {
  source: string;
  variant?: 'inline' | 'featured' | 'sidebar';
  title?: string;
  description?: string;
}

export default function ContentUpgradeForm({ 
  source, 
  variant = 'inline',
  title = "Ready to Accelerate Your GEO Strategy?",
  description = "Get our complete optimization framework used by leading brands"
}: ContentUpgradeFormProps) {
  
  if (variant === 'sidebar') {
    return (
      <div className="sticky top-8 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue/10 rounded-full mb-4">
            <FileText className="h-8 w-8 text-brand-blue" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Free Resource</h3>
          <p className="text-sm text-gray-600">
            Download our comprehensive GEO Audit Checklist
          </p>
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">37 optimization checkpoints</span>
          </div>
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">Platform-specific strategies</span>
          </div>
          <div className="flex items-start text-sm">
            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700">Implementation templates</span>
          </div>
        </div>
        
        <EmailCaptureForm
          source={`content-sidebar-${source}`}
          variant="minimal"
          buttonText="Get Checklist"
        />
      </div>
    );
  }
  
  if (variant === 'featured') {
    return (
      <div className="bg-gradient-to-br from-brand-blue to-emerald-600 rounded-2xl p-8 text-white my-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">
                Level Up Your GEO Strategy Today
              </h3>
              <p className="text-white/90 mb-6">
                Join 12,847+ businesses using our proven framework to rank #1 in AI search results. 
                Get instant access to our complete optimization toolkit.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl font-bold mb-1">240%</div>
                  <div className="text-sm text-white/80">Avg. Visibility Increase</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl font-bold mb-1">37</div>
                  <div className="text-sm text-white/80">Optimization Points</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="text-3xl font-bold mb-1">5</div>
                  <div className="text-sm text-white/80">AI Platforms Covered</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <EmailCaptureForm
                  source={`content-featured-${source}`}
                  variant="minimal"
                  buttonText="Get Your Free Toolkit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Default inline variant
  return (
    <div className="bg-gray-50 border-l-4 border-brand-blue rounded-lg p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="bg-brand-blue/10 rounded-full p-3">
            <ArrowRight className="h-6 w-6 text-brand-blue" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <EmailCaptureForm
            source={`content-inline-${source}`}
            variant="inline"
          />
        </div>
      </div>
    </div>
  );
}