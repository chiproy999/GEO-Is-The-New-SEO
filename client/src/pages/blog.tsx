import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Users } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      <SEOHead 
        title="GEO Blog - Latest Insights on AI Search Optimization | GEO Guide"
        description="Stay updated with the latest trends, strategies, and insights in Generative Engine Optimization. Expert tips for AI search success."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              GEO Insights & Strategy Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights, case studies, and the latest trends in Generative Engine Optimization
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4" />
                <span>Expert Content</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>Latest Trends</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Community Driven</span>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Blog Coming Soon!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We're working hard to bring you the most valuable content on Generative Engine Optimization. 
                  Our blog will feature expert insights, case studies, and actionable strategies.
                </p>
              </div>

              {/* Planned Content Categories */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Planned Content</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>AI Search Algorithm Updates</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>GEO Strategy Case Studies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Platform-Specific Optimization</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Local Business Success Stories</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Technical Implementation Guides</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Industry News & Analysis</span>
                    </li>
                  </ul>
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Weekly Expert Articles</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Real-World Case Studies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Actionable Tips & Strategies</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Industry Expert Interviews</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Tool Reviews & Comparisons</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Community Q&A Sessions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Notified When We Launch
                </h3>
                <p className="text-gray-600 mb-6">
                  Be the first to know when our blog goes live and get exclusive early access to our content.
                </p>
                
                <form className="max-w-md mx-auto">
                  <div className="flex space-x-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Preview: What's Coming
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Preview Article 1 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Coming Soon</span>
                  <Clock className="h-4 w-4 ml-4" />
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  "The Complete Guide to ChatGPT SEO in 2025"
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to optimize your content for ChatGPT's search capabilities and drive more qualified traffic to your business.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>

              {/* Preview Article 2 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Coming Soon</span>
                  <Clock className="h-4 w-4 ml-4" />
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  "Case Study: How a Local Restaurant Increased Visibility by 300%"
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the exact GEO strategies that helped a small restaurant dominate local AI search results and boost reservations.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>

              {/* Preview Article 3 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>Coming Soon</span>
                  <Clock className="h-4 w-4 ml-4" />
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  "Perplexity vs Google: The New Search Landscape"
                </h3>
                <p className="text-gray-600 mb-4">
                  Understand the key differences between traditional search and AI-powered search engines, and how to optimize for both.
                </p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
