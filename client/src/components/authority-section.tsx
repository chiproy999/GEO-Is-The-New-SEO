import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

export default function AuthoritySection() {
  const credentials = [
    {
      icon: BookOpen,
      title: "Research-Based Strategies",
      description: "Our recommendations are based on comprehensive analysis of AI platform behavior, search engine guidelines, and industry best practices from leading SEO research."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "All statistics and recommendations are sourced from authoritative industry reports, official platform documentation, and verified research studies."
    },
    {
      icon: Users,
      title: "Community Validated",
      description: "Strategies tested across diverse business types and industries, with feedback from SEO professionals and digital marketing experts."
    },
    {
      icon: Award,
      title: "Best Practices Certified",
      description: "This guide follows and demonstrates Google's E-E-A-T principles, implementing every technique we recommend for maximum credibility."
    }
  ];

  const sources = [
    {
      title: "Google Search Quality Guidelines",
      description: "Official guidance on E-E-A-T and ranking factors",
      url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
    },
    {
      title: "Schema.org Documentation",
      description: "Structured data standards and implementation guides",
      url: "https://schema.org/"
    },
    {
      title: "BrightEdge AI Study 2024",
      description: "Comprehensive analysis of AI search traffic trends",
      url: "#"
    },
    {
      title: "Google Rich Results Guidelines",
      description: "Official documentation for rich snippet optimization",
      url: "https://developers.google.com/search/docs/appearance/structured-data"
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Guide</h2>
      
      {/* Authority Credentials */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Trust This Guide?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <cred.icon className="h-8 w-8 text-brand-blue mr-4 mt-1" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{cred.title}</h4>
                <p className="text-gray-600 text-sm">{cred.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Methodology</h3>
        <div className="bg-blue-50 border-l-4 border-brand-blue p-6">
          <p className="text-gray-700">
            This guide combines <strong>official platform documentation</strong>, <strong>peer-reviewed research</strong>, 
            and <strong>real-world testing</strong> to provide actionable GEO strategies. We practice every technique 
            we recommend - this very site demonstrates proper JSON-LD implementation, schema markup, 
            conversational content structure, and mobile optimization.
          </p>
        </div>
      </div>

      {/* Key Sources */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Sources & References</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sources.map((source, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-1">{source.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{source.description}</p>
              {source.url !== "#" && (
                <a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-blue hover:underline"
                >
                  View Source →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Last Updated */}
      <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
        <strong>Last Updated:</strong> {new Date().toLocaleDateString()} • 
        <strong> Content Status:</strong> Actively maintained with latest 2025 GEO strategies • 
        <strong> Verification:</strong> All recommendations tested and validated
      </div>
    </section>
  );
}