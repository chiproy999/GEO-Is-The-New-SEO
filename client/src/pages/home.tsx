import HeroSection from "@/components/hero-section";
import OverviewStats from "@/components/overview-stats";
import ResourcesSection from "@/components/resources-section";
import ValidationBadges from "@/components/validation-badges";
import AuthoritySection from "@/components/authority-section";
import MarketingLayout from "@/components/layouts/marketing-layout";
import { seoMetadata } from "@/lib/seo";
import { Link } from "wouter";
import { Bot, Brain, Gem, Search, MapPin, CheckSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCaptureForm from "@/components/email-capture-form";

export default function Home() {
  const mainSections = [
    {
      title: "Complete GEO Guide",
      description: "Stop being invisible to ChatGPT and Claude. Master the optimization strategies that get your business cited by AI.",
      icon: Bot,
      color: "from-brand-blue to-emerald-600",
      textColor: "text-brand-blue",
      link: "/geo-guide",
      features: ["Fix AI Invisibility", "Get AI Citations", "Beat Competitors", "Proven Implementation"]
    },
    {
      title: "Google Maps Ranking",
      description: "Losing local customers to competitors? Master Google Maps before your competition becomes invisible.",
      icon: MapPin,
      color: "from-emerald-600 to-blue-600",
      textColor: "text-emerald-600",
      link: "/maps-guide",
      features: ["Outrank Competitors", "Get Found Locally", "Increase Walk-ins", "Local Dominance"]
    },
    {
      title: "Interactive Checklist",
      description: "Track your optimization progress with our comprehensive checklist. Never miss a critical step in your implementation.",
      icon: CheckSquare,
      color: "from-purple-600 to-brand-blue",
      textColor: "text-purple-600",
      link: "/checklist",
      features: ["GEO Tasks", "Maps Tasks", "Technical Setup", "Progress Tracking"]
    }
  ];

  const platformSections = [
    {
      title: "ChatGPT Optimization",
      description: "ChatGPT can't find you. Fix the conversational gaps killing your visibility.",
      icon: Bot,
      color: "text-green-600",
      link: "/platforms/chatgpt"
    },
    {
      title: "Claude Optimization", 
      description: "Claude ignores shallow content. Learn what it actually takes to get cited.",
      icon: Brain,
      color: "text-purple-600",
      link: "/platforms/claude"
    },
    {
      title: "Gemini Optimization",
      description: "Google Gemini requires visual optimization. Text alone won't cut it.",
      icon: Gem,
      color: "text-blue-600",
      link: "/platforms/gemini"
    },
    {
      title: "Perplexity Optimization",
      description: "Perplexity needs fresh citations. Outdated content gets buried.",
      icon: Search,
      color: "text-indigo-600",
      link: "/platforms/perplexity"
    }
  ];

  return (
    <MarketingLayout
      hero={<HeroSection />}
      seo={seoMetadata.home}
      structuredData={{ pageType: "home" }}
      mainClassName="space-y-16"
    >
      <OverviewStats />
      <ValidationBadges />

        {/* Pain Point Section */}
        <section className="mb-16 bg-red-50 rounded-2xl p-8 border border-red-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-4">
              ⚠️ The AI Search Crisis: Is Your Business Ready?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">73%</div>
                <p className="text-gray-700">of users now start searches with AI instead of Google</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                <p className="text-gray-700">of businesses are invisible to AI search platforms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-red-600 mb-2">5x</div>
                <p className="text-gray-700">more conversions from AI-optimized content</p>
              </div>
            </div>
            <p className="text-lg text-gray-800 mt-6 font-semibold">
              While you focus on traditional SEO, your competitors are capturing AI-driven traffic.
              <span className="text-red-600"> Don't get left behind.</span>
            </p>
          </div>
        </section>

        {/* Main Sections */}
        <section className="mb-16">
          <div className="text-center mb-12 space-y-3">
            <span className="section-eyebrow">Guides</span>
            <h2 className="headline-xl">
              Complete Optimization Guides
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Stop losing customers to AI search. Master the strategies that actually work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <article key={section.title} className="card-surface h-full flex flex-col overflow-hidden">
                  <div className={`bg-gradient-to-r ${section.color} p-6 text-white rounded-2xl`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 mr-3" />
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <p className="text-white/90">{section.description}</p>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={section.link}>
                      <Button
                        className="w-full border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                        data-testid={`link-${section.link.replace("/", "")}`}
                      >
                        Explore Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Platform-Specific Optimization */}
        <section className="mb-16">
          <div className="text-center mb-12 space-y-3">
            <span className="section-eyebrow">Platforms</span>
            <h2 className="headline-xl">
              Why Can't AI Platforms Find You?
            </h2>
            <p className="body-lg max-w-3xl mx-auto">
              Each AI platform ignores different signals. Learn exactly what you're missing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformSections.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Link key={index} href={platform.link}>
                  <article
                    className="card-surface h-full cursor-pointer transition-all hover:-translate-y-1"
                    data-testid={`platform-${platform.link.split("/").pop()}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <IconComponent className={`h-8 w-8 ${platform.color} mr-3`} />
                      <h3 className="text-lg font-semibold text-gray-900">{platform.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
                    <div className="flex items-center text-sm font-semibold text-brand-blue">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>

        <AuthoritySection />
        <ResourcesSection />

        <section className="mb-16">
          <div className="surface-gradient rounded-3xl p-10 text-white shadow-2xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex-1 space-y-4">
                <span className="section-eyebrow text-white/80">Action Plan</span>
                <h2 className="headline-xl text-white">
                  Become the business AI assistants recommend first
                </h2>
                <p className="body-lg text-white/80">
                  Get our GEO field notes every week plus instant access to the starter guide.
                  No fluff—just the experiments and frameworks we ship for clients.
                </p>
              </div>
              <div className="flex-1">
                <EmailCaptureForm
                  source="home-cta"
                  variant="inline"
                  title="Stay ahead of AI search"
                  description="Join 3,000+ marketers leveling up their GEO playbooks."
                  buttonText="Send me the playbook"
                />
              </div>
            </div>
          </div>
        </section>
    </MarketingLayout>
  );
}
