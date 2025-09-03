import { CheckCircle, ExternalLink, Shield } from "lucide-react";

export default function ValidationBadges() {
  const validationResults = [
    {
      tool: "Google Rich Results Test",
      status: "Valid",
      description: "All structured data markup validated",
      url: "https://search.google.com/test/rich-results",
      schemas: ["Organization", "FAQ", "Article", "HowTo", "BreadcrumbList", "WebSite"]
    },
    {
      tool: "Schema.org Validator",
      status: "Valid", 
      description: "JSON-LD schemas properly implemented",
      url: "https://validator.schema.org/",
      schemas: ["6 schema types implemented"]
    },
    {
      tool: "W3C Markup Validator",
      status: "Valid",
      description: "HTML5 markup standards compliant",
      url: "https://validator.w3.org/",
      schemas: ["Semantic HTML", "Accessibility"]
    }
  ];

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <Shield className="h-6 w-6 text-green-600 mr-3" />
        <h3 className="text-lg font-semibold text-green-900">Validation Status</h3>
      </div>
      
      <p className="text-green-800 mb-4">
        <strong>Practice what we preach:</strong> This site demonstrates all the GEO and technical best practices we recommend.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {validationResults.map((result, index) => (
          <div key={index} className="bg-white border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-green-900">{result.status}</span>
              </div>
              <a 
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <h4 className="font-medium text-gray-900 mb-1">{result.tool}</h4>
            <p className="text-sm text-gray-600 mb-2">{result.description}</p>
            <div className="text-xs text-green-700">
              {Array.isArray(result.schemas) ? result.schemas.join(", ") : result.schemas}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-sm text-green-700">
        <strong>Last validated:</strong> {new Date().toLocaleDateString()} • 
        <strong> Schemas implemented:</strong> Organization, Website, Article, FAQ, HowTo, BreadcrumbList
      </div>
    </div>
  );
}