import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { ExternalLink, CheckCircle, Star, Zap, Shield, Target } from 'lucide-react';

export default function ToolsPage() {
  return (
    <>
      <SEOHead 
        title="GEO Tools - Essential Resources for AI Search Optimization | GEO Guide"
        description="Discover the best tools and resources for Generative Engine Optimization. Validate, test, and optimize your content for AI search engines."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
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

        {/* Business Tools */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Business Optimization Tools
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Google My Business */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Star className="h-5 w-5 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Google My Business</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Manage your business listing and optimize for local AI search results.
                </p>
                <a
                  href="https://business.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Google Search Console */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Search Console</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Monitor your site's performance in Google search results.
                </p>
                <a
                  href="https://search.google.com/search-console/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open Tool
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Google Analytics */}
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Google Analytics</h3>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-gray-600 mb-4">
                  Track user behavior and measure your GEO optimization success.
                </p>
                <a
                  href="https://analytics.google.com/"
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
