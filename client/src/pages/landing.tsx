import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="section-shell">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="bg-brand-blue rounded-lg p-2">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">GEO Guide</span>
            </div>
            <Button 
              onClick={() => window.location.href = '/api/login'}
              className="bg-brand-blue hover:bg-blue-700"
              data-testid="login-button"
            >
              Sign In
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="section-shell section-padding">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 max-w-2xl mx-auto">
            <p className="font-semibold">⚠️ 90% of businesses are invisible to AI search platforms</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Competitors Are <span className="text-red-600">Stealing</span> Your <span className="text-brand-blue">AI Traffic</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            <span className="font-bold text-gray-900">While you focus on Google SEO, smart businesses dominate ChatGPT, Claude, and Perplexity.</span> 
            Master Generative Engine Optimization (GEO) before it's too late.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/api/login'}
              className="bg-brand-blue hover:bg-blue-700 text-lg px-8 py-3"
              data-testid="get-started-button"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-gray-300"
              onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
              data-testid="learn-more-button"
            >
              Learn More
            </Button>
          </div>

          {/* The Cost of Ignoring GEO */}
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">💸 The Cost of Ignoring GEO</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">$50K+/year</div>
                <div className="text-gray-700">Average revenue lost to AI-optimized competitors</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
                <div className="text-gray-700">Of searches now start with AI, not Google</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-red-600 mb-2">18 months</div>
                <div className="text-gray-700">Until AI search completely disrupts traditional SEO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
              <Shield className="h-6 w-6 text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Stop Losing to AI
            </h3>
            <p className="text-gray-600">
              Your competitors are already ranking in ChatGPT and Claude. 
              Learn the exact strategies to take back your market share.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="bg-emerald-100 rounded-lg p-3 w-fit mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fix Your AI Blindspot
            </h3>
            <p className="text-gray-600">
              90% of businesses don't even know what they're missing. 
              Our checklist reveals every gap in your AI visibility.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Practice What We Preach
            </h3>
            <p className="text-gray-600">
              This site demonstrates every technique we teach. Rich snippets, 
              schema markup, and AI-optimized content throughout.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue to-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">🚀 The Window Is Closing Fast</h2>
            <p className="text-xl mb-6 opacity-90">
              Every day you wait, competitors steal more AI traffic. Act now.
            </p>
            <Button 
              size="lg"
              onClick={() => window.location.href = '/api/login'}
              className="bg-white text-brand-blue hover:bg-gray-100 text-lg px-8 py-3"
              data-testid="cta-signup-button"
            >
              Start Your GEO Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}