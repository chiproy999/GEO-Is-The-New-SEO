const stats = [
  {
    value: "79%",
    label: "AI-first searchers",
    detail: "of consumers will use AI search in 2025",
    accent: "text-brand-blue",
  },
  {
    value: "180M+",
    label: "ChatGPT users",
    detail: "Monthly active across GPT experiences",
    accent: "text-brand-emerald",
  },
  {
    value: "858%",
    label: "Perplexity growth",
    detail: "Year-over-year query volume increase",
    accent: "text-brand-amber",
  },
  {
    value: "14.5%",
    label: "AI traffic share",
    detail: "Projected contribution to organic visits",
    accent: "text-purple-600",
  },
];

export default function OverviewStats() {
  return (
    <section id="overview" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card" aria-label={stat.label}>
              <p className="stat-label">{stat.label}</p>
              <p className={`stat-value ${stat.accent}`}>{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
