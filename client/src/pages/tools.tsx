import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Settings, Wrench, BarChart3, Search } from 'lucide-react';

export default function ToolsPage() {
  return (
    <>
      <SEOHead 
        title="GEO Tools & Resources - AI Search Optimization Tools | GEO Guide"
        description="Access powerful tools and resources for GEO optimization. Schema generators, content analyzers, and AI search visibility tools."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GEO Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to help you optimize your content for AI search engines 
              and track your GEO performance.
            </p>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Schema Generator */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <Settings className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Schema Generator</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Generate structured data markup for better AI understanding of your content.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  Status: <span className="text-orange-600">Coming Soon</span>
                </div>
                <button className="w-full bg-gray-100 text-gray-400 py-2 px-4 rounded-md cursor-not-allowed">
                  Available Soon
                </button>
              </div>

              {/* Content Analyzer */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <Search className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Content Analyzer</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Analyze your content for AI-readability and conversational structure.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  Status: <span className="text-orange-600">Coming Soon</span>
                </div>
                <button className="w-full bg-gray-100 text-gray-400 py-2 px-4 rounded-md cursor-not-allowed">
                  Available Soon
                </button>
              </div>

              {/* GEO Checker */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-purple-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">GEO Score Checker</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Evaluate your website's GEO readiness across all major AI platforms.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  Status: <span className="text-orange-600">Coming Soon</span>
                </div>
                <button className="w-full bg-gray-100 text-gray-400 py-2 px-4 rounded-md cursor-not-allowed">
                  Available Soon
                </button>
              </div>

              {/* Quick Tools */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-8 w-8 text-orange-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Quick Tools</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Essential utilities for GEO optimization and content enhancement.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Meta Tag Generator</span>
                    <span className="text-orange-600">Soon</span>
                  </div>
                  <div className="flex justify-between">
                    <span>FAQ Generator</span>
                    <span className="text-orange-600">Soon</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Citation Formatter</span>
                    <span className="text-orange-600">Soon</span>
                  </div>
                </div>
              </div>

              {/* External Tools */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended External Tools</h3>
                <div className="space-y-3">
                  <a 
                    href="https://validator.schema.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
                  >
                    <div className="font-medium text-blue-900">Schema Validator</div>
                    <div className="text-sm text-blue-700">Validate your structured data</div>
                  </a>
                  
                  <a 
                    href="https://search.google.com/test/rich-results" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-green-50 rounded-md hover:bg-green-100 transition-colors"
                  >
                    <div className="font-medium text-green-900">Rich Results Test</div>
                    <div className="text-sm text-green-700">Test rich snippet markup</div>
                  </a>
                  
                  <a 
                    href="https://business.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-purple-50 rounded-md hover:bg-purple-100 transition-colors"
                  >
                    <div className="font-medium text-purple-900">Google My Business</div>
                    <div className="text-sm text-purple-700">Manage your business listing</div>
                  </a>
                </div>
              </div>

              {/* API Access */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Developer API</h3>
                <p className="text-gray-600 mb-4">
                  Integrate GEO optimization into your workflow with our API.
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  Status: <span className="text-orange-600">In Development</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>• Content analysis endpoints</div>
                  <div>• Schema generation API</div>
                  <div>• GEO scoring algorithms</div>
                  <div>• Real-time optimization suggestions</div>
                </div>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Get Notified When Tools Launch</h2>
              <p className="text-lg opacity-90 mb-6">
                Be the first to access our GEO optimization tools and get early-bird pricing.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Notify Me When Available
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}