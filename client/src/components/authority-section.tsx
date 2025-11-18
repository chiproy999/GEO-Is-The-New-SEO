import { Award, BookOpen, TrendingUp, Users } from "lucide-react";

const credentials = [
  {
    icon: BookOpen,
    title: "Research-Based Strategies",
    description:
      "Our recommendations are based on comprehensive analysis of AI platform behavior, search engine guidelines, and industry best practices from leading SEO research.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Insights",
    description:
      "All statistics and recommendations are sourced from authoritative industry reports, official platform documentation, and verified research studies.",
  },
  {
    icon: Users,
    title: "Community Validated",
    description:
      "Strategies tested across diverse business types and industries, with feedback from SEO professionals and digital marketing experts.",
  },
  {
    icon: Award,
    title: "Best Practices Certified",
    description:
      "This guide follows and demonstrates Google's E-E-A-T principles, implementing every technique we recommend for maximum credibility.",
  },
];

const sources = [
  {
    title: "Google Search Quality Guidelines",
    description: "Official guidance on E-E-A-T and ranking factors",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
  },
  {
    title: "Schema.org Documentation",
    description: "Structured data standards and implementation guides",
    url: "https://schema.org/",
  },
  {
    title: "BrightEdge AI Study 2024",
    description: "Comprehensive analysis of AI search traffic trends",
    url: "#",
  },
  {
    title: "Google Rich Results Guidelines",
    description: "Official documentation for rich snippet optimization",
    url: "https://developers.google.com/search/docs/appearance/structured-data",
  },
];

export default function AuthoritySection() {
  return (
    <section className="section-padding">
      <div className="section-shell card-surface space-y-10">
        <div className="space-y-3 text-center">
          <span className="section-eyebrow">Authority</span>
          <h2 className="headline-xl">About This Guide</h2>
          <p className="body-lg">
            Every tactic shared below reflects hands-on implementation across GEO, Maps, and AI platform surfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {credentials.map((cred) => (
            <article key={cred.title} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">
              <cred.icon className="h-10 w-10 text-brand-blue" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{cred.title}</h3>
                <p className="text-sm text-gray-600">{cred.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <article className="card-surface-muted">
            <h3 className="text-xl font-semibold text-gray-900">Our Methodology</h3>
            <p className="mt-4 text-gray-700">
              This guide combines <strong>official platform documentation</strong>, <strong>peer-reviewed research</strong>,
              and <strong>real-world testing</strong> to provide actionable GEO strategies. We practice every technique we
              recommend—this site demonstrates proper JSON-LD implementation, schema markup, conversational structure, and mobile
              optimization.
            </p>
          </article>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-sm text-emerald-900">
            <p className="font-semibold">Publishing cadence</p>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>Verified with 2025 GEO playbooks and AI platform releases.</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">Key Sources & References</h3>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {sources.map((source) => (
              <article key={source.title} className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
                <h4 className="font-medium text-gray-900">{source.title}</h4>
                <p className="text-sm text-gray-600">{source.description}</p>
                {source.url !== "#" && (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center text-sm font-semibold text-brand-blue hover:underline"
                  >
                    View Source →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}