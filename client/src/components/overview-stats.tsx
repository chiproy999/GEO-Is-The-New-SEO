export default function OverviewStats() {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-blue mb-2">79%</div>
            <div className="text-gray-600">of consumers will use AI search in 2025</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-emerald mb-2">180M+</div>
            <div className="text-gray-600">monthly ChatGPT users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-amber mb-2">858%</div>
            <div className="text-gray-600">growth in Perplexity AI searches</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">14.5%</div>
            <div className="text-gray-600">projected AI traffic share</div>
          </div>
        </div>
      </div>
    </section>
  );
}
