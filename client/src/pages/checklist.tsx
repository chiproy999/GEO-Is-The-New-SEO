import Header from "@/components/header";
import Footer from "@/components/footer";
import InteractiveChecklist from "@/components/interactive-checklist";
import StructuredData from "@/components/structured-data";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import ValidationBadges from "@/components/validation-badges";

export default function ChecklistPage() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <StructuredData />
      <Header />
      <PageBreadcrumbs />
      
      {/* Page Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive Optimization Checklist
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Track your progress with our comprehensive GEO and Maps optimization checklist. 
            Never miss a critical step in your implementation.
          </p>
        </div>
      </div>

      <ValidationBadges />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InteractiveChecklist />
      </div>
      
      <Footer />
    </div>
  );
}