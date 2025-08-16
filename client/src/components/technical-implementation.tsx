import { HelpCircle, List, Building, FileCode } from "lucide-react";

export default function TechnicalImplementation() {
  const schemaTypes = [
    {
      icon: HelpCircle,
      title: "FAQ Schema",
      description: "Sites with FAQ sections have better chances of appearing in AI search results. Essential for Q&A content.",
      code: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}`,
      color: "text-brand-blue"
    },
    {
      icon: List,
      title: "How-to Schema",
      description: "Perfect for step-by-step guides and instruction content that AI systems frequently reference.",
      code: `{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to...",
  "step": [...]
}`,
      color: "text-brand-emerald"
    },
    {
      icon: Building,
      title: "Organization Schema",
      description: "Site-wide implementation that builds AI trust and establishes source credibility for your business.",
      code: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Company Name",
  "logo": "...",
  "contactPoint": [...]
}`,
      color: "text-brand-amber"
    },
    {
      icon: FileCode,
      title: "LocalBusiness Schema",
      description: "Critical for local SEO and Google Maps ranking. Supplies essential business details to AI systems.",
      code: `{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Business Name",
  "address": {...},
  "telephone": "...",
  "openingHours": [...]
}`,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="technical" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation Guide</h2>
      
      {/* Schema Markup */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Schema Markup Types</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemaTypes.map((schema, index) => {
            const IconComponent = schema.icon;
            return (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <IconComponent className={`h-6 w-6 ${schema.color} mr-2`} />
                  {schema.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {schema.description}
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <code className="text-xs text-gray-700 whitespace-pre-wrap">
                    &lt;script type="application/ld+json"&gt;<br />
                    {schema.code}<br />
                    &lt;/script&gt;
                  </code>
                </div>
              </div>
            );
          })}
        </div>

        {/* Implementation Tips */}
        <div className="mt-6 bg-blue-50 border-l-4 border-brand-blue p-6">
          <h4 className="font-semibold text-blue-900 mb-2">Implementation Best Practices</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Use JSON-LD format (preferred by Google and AI systems)</li>
            <li>• Validate using Google Rich Results Test and Schema.org validator</li>
            <li>• Keep structured data separate from HTML using &lt;script&gt; tags</li>
            <li>• Pages with schema are 30% more likely to appear in rich results</li>
          </ul>
        </div>
      </div>

      {/* LLMs.txt File */}
      <div className="border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <FileCode className="h-8 w-8 text-green-600 mr-3" />
          LLMs.txt Implementation
        </h3>
        <p className="text-gray-700 mb-4">
          An emerging best practice for GEO is implementing an llms.txt file - a standardized way to provide AI systems with curated information about your business.
        </p>
        
        <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
          <div className="mb-2 text-gray-400"># /llms.txt</div>
          <div>Company: Your Business Name</div>
          <div>Description: What your business does</div>
          <div>Founded: Year founded</div>
          <div>Location: Primary business location</div>
          <div>Services: List of main services</div>
          <div>Contact: Primary contact information</div>
          <div>Website: https://yourbusiness.com</div>
          <div className="mt-4 text-gray-400"># Additional metadata for AI systems</div>
          <div>Industry: Your industry category</div>
          <div>Specialties: Key specializations</div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          <strong>Usage:</strong> Place this file at your domain root (yourdomain.com/llms.txt) to help AI systems understand your business context.
        </div>
      </div>
    </section>
  );
}
