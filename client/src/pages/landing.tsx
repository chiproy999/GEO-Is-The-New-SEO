import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Master <span className="text-brand-blue">AI Search</span> in 2025
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete guide to Generative Engine Optimization (GEO) and Google Maps ranking. 
            Optimize your business for ChatGPT, Claude, Gemini, and Perplexity with our 
            interactive checklist and expert strategies.
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

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-brand-blue mb-2">Growing Fast</div>
              <div className="text-gray-600">AI platforms are rapidly gaining traffic share</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-emerald-600 mb-2">High Impact</div>
              <div className="text-gray-600">Early adopters see significant visibility gains</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-purple-600 mb-2">User Trust</div>
              <div className="text-gray-600">Users increasingly rely on AI for search</div>
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
              Expert Strategies
            </h3>
            <p className="text-gray-600">
              Research-backed optimization techniques for all major AI platforms. 
              Stay ahead with 2025's latest GEO strategies.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="bg-emerald-100 rounded-lg p-3 w-fit mb-4">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Interactive Checklist
            </h3>
            <p className="text-gray-600">
              Track your optimization progress with our comprehensive checklist. 
              Never miss a critical step in your GEO implementation.
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
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate AI Search?</h2>
            <p className="text-xl mb-6 opacity-90">
              Start optimizing for the AI-first future today.
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