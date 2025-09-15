import Header from "@/components/header";
import Footer from "@/components/footer";
import GeoGuide from "@/components/geo-guide";
import StructuredData from "@/components/structured-data";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import ValidationBadges from "@/components/validation-badges";

export default function GeoGuidePage() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <StructuredData />
      <Header />
      <PageBreadcrumbs />
      
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-brand-blue to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Complete GEO Optimization Guide
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Master Generative Engine Optimization for ChatGPT, Claude, Gemini, and Perplexity. 
            Learn the strategies that drive 14.5% of organic traffic in 2025.
          </p>
        </div>
      </div>

      <ValidationBadges />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GeoGuide />
      </div>
      
      <Footer />
    </div>
  );
}