import { Bot, Menu, X, LogOut, User } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const [location] = useLocation();

  const navigationItems = [
    { label: "Overview", path: "/" },
    { label: "GEO vs SEO", path: "/geo-vs-seo" },
    { label: "GEO Guide", path: "/geo-guide" },
    { label: "Maps Guide", path: "/maps-guide" },
    { label: "Checklist", path: "/checklist" },
    { label: "Pricing", path: "/pricing" },
  ];

  const platformMenuItems = [
    { label: "ChatGPT", path: "/platforms/chatgpt" },
    { label: "Claude", path: "/platforms/claude" },
    { label: "Gemini", path: "/platforms/gemini" },
    { label: "Perplexity", path: "/platforms/perplexity" },
  ];

  const isActivePath = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200/50 sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Bot className="h-8 w-8 text-brand-blue mr-3" />
              <span className="text-xl font-bold text-gradient">GEO Optimization Guide</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-brand-blue bg-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  data-testid={`nav-${item.path.replace('/', '') || 'home'}`}
                >
                  {item.label}
                </Link>
              ))}
              
              {isAuthenticated && (
                <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {(user as any)?.firstName || (user as any)?.email || 'User'}
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.location.href = '/api/logout'}
                    className="text-gray-500 hover:text-gray-700"
                    data-testid="logout-button"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </Button>
                </div>
              )}
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
              {navigationItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`block px-4 py-3 text-base font-medium w-full rounded-lg transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'text-brand-blue bg-blue-50 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`mobile-nav-${item.path.replace('/', '') || 'home'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
