import MapsGuide from "@/components/maps-guide";
import ValidationBadges from "@/components/validation-badges";
import MarketingLayout from "@/components/layouts/marketing-layout";
import { seoMetadata } from "@/lib/seo";

export default function MapsGuidePage() {
  return (
    <MarketingLayout
      hero={
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <div className="section-shell section-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Google Maps Ranking Guide</h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Dominate local search with proven Google Maps optimization strategies. Master relevance, distance, and prominence
              factors for 2025.
            </p>
          </div>
        </div>
      }
      seo={seoMetadata.mapsGuide}
      structuredData={{
        pageType: "guide",
        title: "Google Maps Ranking Guide",
        description:
          "Dominate local search with proven Google Maps optimization strategies. Master relevance, distance, and prominence factors for 2025.",
      }}
      mainClassName="space-y-12"
    >
      <ValidationBadges />
      <MapsGuide />
    </MarketingLayout>
  );
}