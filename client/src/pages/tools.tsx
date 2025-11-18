import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Settings, Wrench, BarChart3, Search } from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { ExternalLink, CheckCircle, Star, Zap, Shield, Target } from 'lucide-react';

export default function ToolsPage() {
  return (
    <>
      <SEOHead 
        title="GEO Tools & Resources - AI Search Optimization Tools | GEO Guide"
        description="Access powerful tools and resources for GEO optimization. Schema generators, content analyzers, and AI search visibility tools."
        title="GEO Tools - Essential Resources for AI Search Optimization | GEO Guide"
        description="Discover the best tools and resources for Generative Engine Optimization. Validate, test, and optimize your content for AI search engines."
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
              Essential GEO Tools & Resources
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Validate, test, and optimize your content with the best tools for Generative Engine Optimization
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Validated Tools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4" />
                <span>Expert Recommended</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4" />
                <span>Free & Premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Validation Tools */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Content Validation Tools
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Schema.org Validator */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Schema.org Validator</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Validate your structured data markup to ensure proper AI search engine understanding.
                </p>
                <a
                  href="https://validator.schema.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Google Rich Results Test */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Rich Results Test</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Test how Google sees your content and identify optimization opportunities.
                </p>
                <a
                  href="https://search.google.com/test/rich-results"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* W3C Markup Validator */}
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">W3C Validator</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Validate your HTML markup for proper structure and accessibility.
                </p>
                <a
                  href="https://validator.w3.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AI Platform Tools */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              AI Platform Optimization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ChatGPT Optimization */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">ChatGPT Optimization</h3>
                    <p className="text-gray-600">Optimize for OpenAI's search capabilities</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Structured data implementation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Content clarity optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Context-rich descriptions</span>
                  </li>
                </ul>
              </div>

              {/* Perplexity Optimization */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Perplexity Optimization</h3>
                    <p className="text-gray-600">Optimize for Perplexity's search engine</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Source citation optimization</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Factual content structure</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Authority signal enhancement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Recommendations */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Need Help Choosing the Right Tools?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team can help you select and implement the best tools for your specific GEO optimization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Expert Consultation
              </a>
              <a
                href="/geo-guide"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Read Our Guide
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
}
