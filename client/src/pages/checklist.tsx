import Header from "@/components/header";
import Footer from "@/components/footer";
import InteractiveChecklist from "@/components/interactive-checklist";
import StructuredData from "@/components/structured-data";
import SEOHead from "@/components/seo-head";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import ValidationBadges from "@/components/validation-badges";

export default function ChecklistPage() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <SEOHead 
        title="Interactive GEO Checklist | Track Your AI Optimization Progress - 2025 Guide"
        description="Track your progress with our comprehensive GEO and Maps optimization checklist. Never miss a critical step in implementing AI search and local SEO strategies."
        keywords={["GEO checklist", "AI optimization checklist", "SEO task list", "optimization tracker", "GEO implementation", "AI search optimization tasks", "local SEO checklist", "schema markup checklist"]}
        type="article"
      />
      <StructuredData pageType="checklist" title="Interactive Optimization Checklist" description="Track your progress with our comprehensive GEO and Maps optimization checklist. Never miss a critical step in your implementation." />
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