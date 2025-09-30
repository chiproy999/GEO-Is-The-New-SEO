import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { BookOpen, TrendingUp, Users, Target } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <SEOHead 
        title="GEO & AI Search Blog - Latest Strategies & Insights | GEO Guide"
        description="Stay updated with the latest GEO strategies, AI search trends, and optimization techniques. Expert insights on ChatGPT, Claude, Gemini, and Perplexity optimization."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GEO & AI Search Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Latest strategies, insights, and trends in Generative Engine Optimization 
              and AI search visibility.
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <BookOpen className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Blog Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                We're preparing comprehensive articles on GEO strategies, case studies, 
                and the latest developments in AI search optimization.
              </p>
              
              {/* Planned Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Strategy Guides</h3>
                  <p className="text-sm text-gray-600">
                    Step-by-step tutorials for optimizing your content for each AI platform
                  </p>
                </div>
                
                <div className="p-6 bg-green-50 rounded-lg">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
                  <p className="text-sm text-gray-600">
                    Real-world examples of successful GEO implementations and results
                  </p>
                </div>
                
                <div className="p-6 bg-purple-50 rounded-lg">
                  <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Platform Updates</h3>
                  <p className="text-sm text-gray-600">
                    Latest changes to ChatGPT, Claude, Gemini, and other AI search tools
                  </p>
                </div>
                
                <div className="p-6 bg-orange-50 rounded-lg">
                  <BookOpen className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Industry News</h3>
                  <p className="text-sm text-gray-600">
                    Breaking news and analysis of the evolving AI search landscape
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Get Notified</h3>
                <p className="text-gray-600 mb-4">
                  Want to be the first to know when we publish new content?
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}