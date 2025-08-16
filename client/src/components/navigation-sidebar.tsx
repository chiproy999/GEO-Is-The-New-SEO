export default function NavigationSidebar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="lg:col-span-1">
      <nav className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Guide Contents</h3>
        <ul className="space-y-2">
          <li>
            <button 
              onClick={() => scrollToSection('what-is-geo')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              What is GEO?
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('geo-strategies')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Core GEO Strategies
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('platforms')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Platform Optimization
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('maps-ranking')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Google Maps Ranking
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('technical')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Technical Implementation
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('measurement')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Performance Tracking
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('checklist')}
              className="block text-sm text-gray-600 hover:text-brand-blue py-1 w-full text-left"
            >
              Interactive Checklist
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
