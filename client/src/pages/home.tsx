import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import OverviewStats from "@/components/overview-stats";
import NavigationSidebar from "@/components/navigation-sidebar";
import GeoGuide from "@/components/geo-guide";
import PlatformOptimization from "@/components/platform-optimization";
import MapsGuide from "@/components/maps-guide";
import TechnicalImplementation from "@/components/technical-implementation";
import PerformanceTracking from "@/components/performance-tracking";
import InteractiveChecklist from "@/components/interactive-checklist";
import ResourcesSection from "@/components/resources-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <Header />
      <HeroSection />
      <OverviewStats />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <NavigationSidebar />
          
          <div className="lg:col-span-3 space-y-12">
            <GeoGuide />
            <PlatformOptimization />
            <MapsGuide />
            <TechnicalImplementation />
            <PerformanceTracking />
            <InteractiveChecklist />
            <ResourcesSection />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
