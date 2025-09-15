import Header from "@/components/header";
import Footer from "@/components/footer";
import MapsGuide from "@/components/maps-guide";
import StructuredData from "@/components/structured-data";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import ValidationBadges from "@/components/validation-badges";

export default function MapsGuidePage() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <StructuredData />
      <Header />
      <PageBreadcrumbs />
      
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Google Maps Ranking Guide
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Dominate local search with proven Google Maps optimization strategies. 
            Master relevance, distance, and prominence factors for 2025.
          </p>
        </div>
      </div>

      <ValidationBadges />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MapsGuide />
      </div>
      
      <Footer />
    </div>
  );
}