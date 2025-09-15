import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import OverviewStats from "@/components/overview-stats";
import ResourcesSection from "@/components/resources-section";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import ValidationBadges from "@/components/validation-badges";
import AuthoritySection from "@/components/authority-section";
import { Link } from "wouter";
import { Bot, Brain, Gem, Search, MapPin, CheckSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const mainSections = [
    {
      title: "Complete GEO Guide",
      description: "Master Generative Engine Optimization for all major AI platforms. Learn the core strategies that drive 14.5% of organic traffic.",
      icon: Bot,
      color: "from-brand-blue to-emerald-600",
      textColor: "text-brand-blue",
      link: "/geo-guide",
      features: ["Core GEO Strategies", "Authority Building", "Content Optimization", "Technical Implementation"]
    },
    {
      title: "Google Maps Ranking",
      description: "Dominate local search with proven Google Maps optimization strategies. Master relevance, distance, and prominence factors.",
      icon: MapPin,
      color: "from-emerald-600 to-blue-600",
      textColor: "text-emerald-600",
      link: "/maps-guide",
      features: ["Ranking Factors", "Business Profile", "Review Management", "Local SEO"]
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
      description: "Optimize for OpenAI's ChatGPT and SearchGPT with conversational content strategies.",
      icon: Bot,
      color: "text-green-600",
      link: "/platforms/chatgpt"
    },
    {
      title: "Claude Optimization", 
      description: "Create research-backed content that Claude values and cites in responses.",
      icon: Brain,
      color: "text-purple-600",
      link: "/platforms/claude"
    },
    {
      title: "Gemini Optimization",
      description: "Leverage Google's ecosystem with multimodal content optimization.",
      icon: Gem,
      color: "text-blue-600",
      link: "/platforms/gemini"
    },
    {
      title: "Perplexity Optimization",
      description: "Create authoritative, well-sourced content for research-focused queries.",
      icon: Search,
      color: "text-indigo-600",
      link: "/platforms/perplexity"
    }
  ];

  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <StructuredData />
      <Header />
      <PageBreadcrumbs />
      <HeroSection />
      <OverviewStats />
      <ValidationBadges />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Sections */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Optimization Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to dominate AI search and local rankings in 2025
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`bg-gradient-to-r ${section.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="h-8 w-8 mr-3" />
                      <h3 className="text-xl font-bold">{section.title}</h3>
                    </div>
                    <p className="text-white/90">{section.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-2 mb-6">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={section.link}>
                      <Button className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50" data-testid={`link-${section.link.replace('/', '')}`}>
                        Explore Guide
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Platform-Specific Optimization */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platform-Specific Optimization
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed strategies for each major AI platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformSections.map((platform, index) => {
              const IconComponent = platform.icon;
              return (
                <Link key={index} href={platform.link}>
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer" data-testid={`platform-${platform.link.split('/').pop()}`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className={`h-8 w-8 ${platform.color} mr-3`} />
                      <h3 className="text-lg font-semibold text-gray-900">{platform.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{platform.description}</p>
                    <div className="flex items-center text-sm font-medium text-brand-blue">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <AuthoritySection />
        <ResourcesSection />
      </div>
      
      <Footer />
    </div>
  );
}
