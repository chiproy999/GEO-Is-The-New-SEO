import { Bot } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const footerLinks = [
    { label: "Overview", path: "/" },
    { label: "GEO Guide", path: "/geo-guide" },
    { label: "Maps Guide", path: "/maps-guide" },
    { label: "Checklist", path: "/checklist" },
    { label: "Pricing", path: "/pricing" },
  ];

  const platformLinks = [
    { label: "ChatGPT", path: "/platforms/chatgpt" },
    { label: "Claude", path: "/platforms/claude" },
    { label: "Gemini", path: "/platforms/gemini" },
    { label: "Perplexity", path: "/platforms/perplexity" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-20 overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/5 to-transparent opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Bot className="h-8 w-8 text-brand-blue mr-3" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">GEO Optimization Guide</span>
            </div>
            <p className="text-gray-400 leading-relaxed">Future-proof your business for the AI search revolution</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    data-testid={`footer-${link.path.replace('/', '') || 'home'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Guides */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Platform Guides</h3>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1 inline-block"
                    data-testid={`footer-platform-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-10 text-center">
          <div className="text-sm text-gray-400">
            © 2025 GEO Optimization Guide. Continuously updated with the latest AI search strategies.
          </div>
        </div>
      </div>
    </footer>
  );
}
