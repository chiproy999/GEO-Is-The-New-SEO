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
    <section className="section-padding">
      <div className="section-shell">
        <div className="surface-gradient text-white">
          <div className="flex flex-col gap-4 text-center">
            <span className="section-eyebrow">Resources</span>
            <h2 className="text-3xl font-semibold">Additional Resources & Tools</h2>
            <p className="text-white/80">
              Download the same blueprints we use internally to optimize GEO and Google Maps programs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card-surface-muted bg-white/10 border-white/20 text-white">
              <h3 className="mb-4 flex items-center text-xl font-semibold">
                <Download className="mr-3 h-6 w-6 text-brand-blue" />
                Free Downloads
              </h3>
              <div className="space-y-3">
                {freeResources.map((resource) => (
                  <div
                    key={resource.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    <div className="font-semibold">{resource.title}</div>
                    <div className="text-sm text-white/70">{resource.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface bg-white/5 border-white/20 text-white">
              <h3 className="mb-4 flex items-center text-xl font-semibold">
                <Wrench className="mr-3 h-6 w-6 text-brand-emerald" />
                Essential Tools
              </h3>
              <div className="space-y-3">
                {essentialTools.map((tool) => (
                  <a
                    key={tool.title}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between rounded-2xl border border-white/10 bg-white/0 p-4 text-left transition-all hover:bg-white/10"
                  >
                    <div>
                      <div className="font-semibold">{tool.title}</div>
                      <div className="text-sm text-white/70">{tool.description}</div>
                    </div>
                    <ExternalLink className="ml-4 h-4 w-4 text-white/60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="text-lg font-medium text-white">Ready to dominate AI search results?</p>
            <Button
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90"
              onClick={() => {
                const element = document.getElementById("checklist");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Start Your Optimization Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
