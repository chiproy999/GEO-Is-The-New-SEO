import { Link, TrendingUp, BarChart3, Eye, MousePointer, ExternalLink } from "lucide-react";

export default function PerformanceTracking() {
  const trackingMethods = [
    {
      icon: Link,
      title: "Monitor Backlinks",
      description: "Track if AI engines like Perplexity or ChatGPT are linking back to your website as a source for their responses.",
      color: "text-brand-blue"
    },
    {
      icon: TrendingUp,
      title: "Google Analytics 4 Setup",
      description: "Use Regex filters to identify visitors from AI platforms. Set up custom referral tracking for AI engines.",
      color: "text-brand-emerald"
    },
    {
      icon: BarChart3,
      title: "Lead Source Surveys",
      description: "Include \"How did you hear about us?\" in forms with AI platforms as dropdown options to track direct attribution.",
      color: "text-brand-amber"
    }
  ];

  const keyMetrics = [
    { label: "AI Platform Referral Traffic", icon: TrendingUp, color: "bg-blue-50 text-brand-blue" },
    { label: "Citation Mentions in AI Responses", icon: Link, color: "bg-emerald-50 text-brand-emerald" },
    { label: "Brand Visibility in AI Answers", icon: Eye, color: "bg-amber-50 text-brand-amber" },
    { label: "Click-through from AI Platforms", icon: MousePointer, color: "bg-purple-50 text-purple-600" }
  ];

  const validationTools = [
    {
      title: "Google Rich Results Test",
      description: "Validate structured data markup",
      url: "https://search.google.com/test/rich-results"
    },
    {
      title: "Schema.org Validator", 
      description: "Test schema markup implementation",
      url: "https://validator.schema.org/"
    },
    {
      title: "Google Search Console",
      description: "Monitor enhancement reports",
      url: "https://search.google.com/search-console"
    }
  ];

  return (
    <section id="measurement" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Performance Tracking & Measurement</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Tracking Methods */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tracking GEO Success</h3>
          <div className="space-y-4">
            {trackingMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <IconComponent className={`h-6 w-6 ${method.color} mr-2`} />
                    {method.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {method.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics to Monitor</h3>
          <div className="space-y-3">
            {keyMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${metric.color}`}>
                  <span className="text-sm font-medium text-gray-900">{metric.label}</span>
                  <IconComponent className="h-5 w-5" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools & Resources */}
      <div className="mt-8 border-t border-gray-200 pt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Validation Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {validationTools.map((tool, index) => (
            <a 
              key={index}
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{tool.title}</div>
                  <div className="text-sm text-gray-600">{tool.description}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
