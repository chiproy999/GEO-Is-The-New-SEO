import { useState, useEffect } from "react";
import { scrollToElement, getCurrentSection, debugNavigation } from "@/lib/scroll-utils";

export default function NavigationSidebar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    scrollToElement(id);
  };

  // Track active section for highlighting
  useEffect(() => {
    const handleScroll = () => {
      const current = getCurrentSection();
      setActiveSection(current);
    };

    // Debug navigation on mount (development only)
    if (process.env.NODE_ENV === 'development') {
      setTimeout(debugNavigation, 1000);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'what-is-geo', label: 'What is GEO?' },
    { id: 'geo-strategies', label: 'Core GEO Strategies' },
    { id: 'platforms', label: 'Platform Optimization' },
    { id: 'maps-ranking', label: 'Google Maps Ranking' },
    { id: 'technical', label: 'Technical Implementation' },
    { id: 'measurement', label: 'Performance Tracking' },
    { id: 'checklist', label: 'Interactive Checklist' },
  ];

  return (
    <div className="lg:col-span-1">
      <nav className="sticky top-24 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">Guide Contents</h3>
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className={`block text-sm py-2 px-3 w-full text-left rounded-md transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'bg-brand-blue text-white font-medium'
                    : 'text-gray-600 hover:text-brand-blue hover:bg-blue-50'
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
