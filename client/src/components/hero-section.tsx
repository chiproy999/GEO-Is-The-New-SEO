import { Link, useLocation } from "wouter";
import EmailCaptureForm from "./email-capture-form";
import { useMemo, useState } from "react";
import { ResponsiveMedia } from "@/components/ui/responsive-media";
import heroScreenshot from "@assets/IMG_3604_1756865021777.png";

export default function HeroSection() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const [showEmailForm, setShowEmailForm] = useState(false);
  const isSubscribed = useMemo(() => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("geo_subscribed_email");
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-brand-blue via-indigo-600 to-purple-700 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 animate-pulse" />
      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Is Your Business <span className="text-red-300 line-through">Invisible</span> to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200"> AI Search?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-50/90 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
              <span className="font-bold text-yellow-200">90% of businesses are missing from AI search results.</span> While you optimize for Google, your competitors dominate ChatGPT, Claude, and Perplexity.
            </p>
            <p className="text-lg md:text-xl mb-10 text-blue-50/80 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
              Master Generative Engine Optimization (GEO) before it's too late. The AI search revolution is happening now.
            </p>

            {isHomePage && !isSubscribed && !showEmailForm && (
              <div className="mb-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl hover-lift">
                  <h3 className="text-2xl font-bold mb-3">Get Your Free 5-Step GEO Starter Guide</h3>
                  <p className="text-blue-50/90 mb-5">
                    <span className="font-semibold text-yellow-200">Stop losing customers to AI-savvy competitors.</span> Essential tips to begin improving your AI search visibility today.
                  </p>
                  <button
                    onClick={() => setShowEmailForm(true)}
                    className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    data-testid="button-get-free-checklist"
                  >
                    Get Free Guide →
                  </button>
                </div>
              </div>
            )}

            {showEmailForm && (
              <div className="max-w-lg mb-8">
                <EmailCaptureForm
                  source="hero"
                  onSuccess={() => setShowEmailForm(false)}
                />
              </div>
            )}

            {isHomePage && !showEmailForm && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/geo-guide">
                  <button 
                    className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover-lift"
                    data-testid="hero-geo-guide-button"
                  >
                    Start GEO Guide
                  </button>
                </Link>
                <Link href="/maps-guide">
                  <button 
                    className="border-2 border-white/80 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm hover:shadow-xl hover-lift"
                    data-testid="hero-maps-guide-button"
                  >
                    Maps Optimization
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="bg-white/5 p-2 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10">
            <ResponsiveMedia
              src={heroScreenshot}
              alt="GEO dashboard highlights"
              containerClassName="aspect-[4/3] bg-gradient-to-br from-blue-900/40 to-purple-900/10"
              className="object-cover"
            />
            <div className="mt-4 grid grid-cols-2 gap-4 text-left text-sm text-blue-50">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-bold text-white">+214%</p>
                <p className="text-blue-100/80">AI traffic after GEO rollout</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-3xl font-bold text-white">68%</p>
                <p className="text-blue-100/80">Of leads sourced from chat agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
