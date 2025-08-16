import { Download, Wrench, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ResourcesSection() {
  const freeResources = [
    {
      title: "GEO Optimization Checklist PDF",
      description: "Printable checklist for tracking progress"
    },
    {
      title: "Schema Markup Templates", 
      description: "Ready-to-use JSON-LD code snippets"
    },
    {
      title: "AI Platform Contact List",
      description: "Direct contacts for platform optimization support"
    }
  ];

  const essentialTools = [
    {
      title: "Google Rich Results Test",
      description: "Validate your structured data markup", 
      url: "https://search.google.com/test/rich-results"
    },
    {
      title: "Schema.org Validator",
      description: "Test schema implementation",
      url: "https://validator.schema.org/"
    },
    {
      title: "Google Business Profile",
      description: "Manage your Google Maps listing",
      url: "https://business.google.com/"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6">Additional Resources & Tools</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Free Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Download className="h-6 w-6 text-brand-blue mr-3" />
            Free Downloads
          </h3>
          <div className="space-y-3">
            {freeResources.map((resource, index) => (
              <div 
                key={index} 
                className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
              >
                <div className="font-semibold">{resource.title}</div>
                <div className="text-sm text-gray-300">{resource.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Wrench className="h-6 w-6 text-brand-emerald mr-3" />
            Essential Tools
          </h3>
          <div className="space-y-3">
            {essentialTools.map((tool, index) => (
              <a 
                key={index}
                href={tool.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">{tool.title}</div>
                    <div className="text-sm text-gray-300">{tool.description}</div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 ml-2 flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-lg mb-4">Ready to dominate AI search results?</p>
        <Button 
          className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          onClick={() => {
            const element = document.getElementById('checklist');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          Start Your Optimization Journey
        </Button>
      </div>
    </section>
  );
}
