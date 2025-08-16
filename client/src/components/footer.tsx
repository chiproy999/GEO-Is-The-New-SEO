import { Bot } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Bot className="h-8 w-8 text-brand-blue mr-3" />
            <span className="text-xl font-bold">GEO Optimization Guide</span>
          </div>
          <p className="text-gray-400 mb-4">Future-proof your business for the AI search revolution</p>
          <div className="text-sm text-gray-500">
            © 2025 GEO Optimization Guide. Updated with the latest 2025 strategies and trends.
          </div>
        </div>
      </div>
    </footer>
  );
}
