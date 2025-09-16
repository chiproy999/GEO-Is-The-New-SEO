import { Target, MapPin, Star, Camera, MessageSquare, CheckCircle } from "lucide-react";
import ContentUpgradeForm from "./content-upgrade-form";

export default function MapsGuide() {
  return (
    <section id="maps-ranking" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Google Maps Ranking Factors 2025</h2>
      
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-6">
          Google evaluates local businesses based on three primary factors that determine your ranking in local search results.
        </p>
      </div>

      {/* Content Upgrade After Introduction */}
      <ContentUpgradeForm 
        source="maps-guide-intro" 
        variant="inline"
        title="Want to Rank #1 on Google Maps?"
        description="Download our complete local SEO checklist with 37 proven optimization tactics"
      />

      {/* Core Ranking Factors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Relevance */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-brand-blue mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Relevance</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            How well your business profile matches search queries
          </p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Complete business information</li>
            <li>• Accurate business categories (up to 10)</li>
            <li>• Keyword optimization in descriptions</li>
            <li>• Detailed service offerings</li>
          </ul>
        </div>

        {/* Distance */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <MapPin className="h-8 w-8 text-brand-emerald mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Distance</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            Physical proximity to the searcher's location
          </p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Critical since December 2021 update</li>
            <li>• Closer businesses can outrank better-optimized ones</li>
            <li>• Ensure accurate location data</li>
            <li>• Cannot be directly optimized</li>
          </ul>
        </div>

        {/* Prominence */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 text-brand-amber mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Prominence</h3>
          </div>
          <p className="text-sm text-gray-700 mb-4">
            How well-known and established your business appears online
          </p>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• Reviews quantity, quality, and recency</li>
            <li>• Citations across directories</li>
            <li>• Backlinks and online mentions</li>
            <li>• Overall online presence</li>
          </ul>
        </div>
      </div>

      {/* Optimization Strategies */}
      <div className="space-y-6">
        
        {/* Google Business Profile */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Google Business Profile Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Essential Elements:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Complete NAP consistency (Name, Address, Phone)</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Accurate business hours and special hours</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> High-quality photos and videos</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Business description with local keywords</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Service areas clearly defined</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> All available attributes filled out</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Visual Content Strategy:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><Camera className="h-4 w-4 text-blue-500 mr-2" /> Regular photo uploads (interior, exterior, products)</li>
                <li className="flex items-center"><Camera className="h-4 w-4 text-blue-500 mr-2" /> Video content (auto-plays in Maps)</li>
                <li className="flex items-center"><Camera className="h-4 w-4 text-blue-500 mr-2" /> Fresh visual content regularly</li>
                <li className="flex items-center"><Camera className="h-4 w-4 text-blue-500 mr-2" /> Professional quality images</li>
                <li className="flex items-center"><Camera className="h-4 w-4 text-blue-500 mr-2" /> Team and behind-the-scenes content</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews & Reputation */}
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reviews & Reputation Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Review Signals:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" /> Review quantity (more reviews = higher engagement)</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" /> Review recency (fresh reviews = active business)</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" /> Review quality (detailed, authentic reviews)</li>
                <li className="flex items-center"><MessageSquare className="h-4 w-4 text-green-500 mr-2" /> Response rate (respond to all reviews)</li>
                <li className="flex items-center"><Star className="h-4 w-4 text-yellow-500 mr-2" /> Cross-platform reviews (Google, Yelp, Facebook)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Optimization Tips:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Encourage detailed, genuine reviews</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Respond professionally to all reviews</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Focus on Google but don't neglect other platforms</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Monitor online reputation actively</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" /> Address negative reviews promptly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Content Upgrade at End */}
      <ContentUpgradeForm 
        source="maps-guide-end" 
        variant="featured"
        title="Master Google Maps Ranking in 2025"
        description="Get instant access to our complete optimization toolkit trusted by 12,847+ local businesses"
      />
    </section>
  );
}
