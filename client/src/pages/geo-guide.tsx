import GeoGuide from "@/components/geo-guide";
import ValidationBadges from "@/components/validation-badges";
import MarketingLayout from "@/components/layouts/marketing-layout";
import { seoMetadata } from "@/lib/seo";

export default function GeoGuidePage() {
  return (
    <MarketingLayout
      hero={
        <div className="bg-gradient-to-r from-brand-blue to-emerald-600 text-white">
          <div className="section-shell section-padding">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete GEO Optimization Guide
            </h1>
            <p className="text-xl opacity-90 max-w-3xl">
              Master Generative Engine Optimization for ChatGPT, Claude, Gemini, and Perplexity. 
              Learn the strategies that drive 14.5% of organic traffic in 2025.
            </p>
          </div>
        </div>
      }
      seo={seoMetadata.geoGuide}
      structuredData={{
        pageType: "guide",
        title: "Complete GEO Optimization Guide",
        description:
          "Master Generative Engine Optimization for ChatGPT, Claude, Gemini, and Perplexity. Learn the strategies that drive 14.5% of organic traffic in 2025.",
      }}
      mainClassName="space-y-12"
    >
      <ValidationBadges />
      <GeoGuide />
    </MarketingLayout>
  );
}