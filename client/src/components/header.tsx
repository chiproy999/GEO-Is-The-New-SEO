import { Bot, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/scroll-utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    scrollToElement(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Bot className="h-8 w-8 text-brand-blue mr-3" />
              <span className="text-xl font-bold text-gray-900">GEO Optimization Guide</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => scrollToSection('overview')}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('what-is-geo')}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                GEO Guide
              </button>
              <button 
                onClick={() => scrollToSection('maps-ranking')}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Maps Guide
              </button>
              <button 
                onClick={() => scrollToSection('checklist')}
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Checklist
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('overview')}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full text-left"
              >
                Overview
              </button>
              <button 
                onClick={() => scrollToSection('what-is-geo')}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full text-left"
              >
                GEO Guide
              </button>
              <button 
                onClick={() => scrollToSection('maps-ranking')}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full text-left"
              >
                Maps Guide
              </button>
              <button 
                onClick={() => scrollToSection('checklist')}
                className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 w-full text-left"
              >
                Checklist
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
