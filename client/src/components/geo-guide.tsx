import { Lightbulb, MessageCircle, Award, Code, Target } from "lucide-react";

export default function GeoGuide() {
  return (
    <>
      {/* What is GEO Section */}
      <section id="what-is-geo" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Generative Engine Optimization (GEO)?</h2>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Generative Engine Optimization (GEO) is the strategic process of formatting and structuring your content so AI platforms like ChatGPT, Perplexity, Claude, and Gemini can easily understand, extract, and cite it when answering user queries.
          </p>
          
          <div className="bg-blue-50 border-l-4 border-brand-blue p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-700">
                  <strong>Key Insight:</strong> AI platforms already drive 6.5% of organic traffic and are projected to hit 14.5% within the next year. GEO is rapidly becoming essential for online visibility in 2025.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Why GEO Matters in 2025</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>70% of users already trust generative AI search results</li>
            <li>Generative models attract younger demographics (Millennials and Gen Z)</li>
            <li>AI platforms are entering the top traffic drivers in the US and Europe</li>
            <li>Many users skip traditional search engines entirely</li>
          </ul>
        </div>
      </section>

      {/* Core GEO Strategies */}
      <section id="geo-strategies" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Core GEO Strategies for 2025</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Conversational Content */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <MessageCircle className="h-8 w-8 text-brand-blue mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Conversational Content Creation</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Generative engines are built on natural language, so your content should feel like a chat with a friend—not a lecture.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use everyday language and question-based headings</li>
              <li>• Prioritize natural language over keyword stuffing</li>
              <li>• Align with how AI interprets conversational queries</li>
            </ul>
          </div>

          {/* Authority Building */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-brand-emerald mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Authority Building</h3>
            </div>
            <p className="text-gray-700 mb-4">
              AI loves authority. Content with stats, expert quotes, or credible links is 30-40% more likely to appear in AI answers.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Include statistics from trusted sources</li>
              <li>• Add expert quotes and citations</li>
              <li>• Build credible backlinks</li>
              <li>• Implement E-E-A-T principles</li>
            </ul>
          </div>

          {/* Structured Data */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-brand-amber mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Structured Data Implementation</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Pages with schema markup are 30% more likely to appear in rich results and AI responses.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• FAQ Schema for Q&A content</li>
              <li>• How-to Schema for instructions</li>
              <li>• Organization Schema site-wide</li>
              <li>• LocalBusiness Schema for locations</li>
            </ul>
          </div>

          {/* Content Optimization */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-purple-600 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Query-Type Optimization</h3>
            </div>
            <p className="text-gray-700 mb-4">
              Different query types require different optimization approaches for maximum visibility.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Transactional: Clear CTAs and persuasive content</li>
              <li>• Technical: Precise terminology and authority</li>
              <li>• Business: Statistics and data-driven insights</li>
              <li>• Creative: Quotations and cultural references</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
