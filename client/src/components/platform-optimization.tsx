import { useState } from "react";
import { Bot, Brain, Gem, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlatformOptimization() {
  const [activeTab, setActiveTab] = useState('chatgpt');

  const platforms = [
    { id: 'chatgpt', label: 'ChatGPT', icon: Bot, color: 'text-green-600' },
    { id: 'claude', label: 'Claude', icon: Brain, color: 'text-purple-600' },
    { id: 'gemini', label: 'Gemini', icon: Gem, color: 'text-blue-600' },
    { id: 'perplexity', label: 'Perplexity', icon: Search, color: 'text-indigo-600' },
  ];

  const platformContent = {
    chatgpt: {
      title: 'ChatGPT (SearchGPT) Optimization',
      practices: [
        'Use clear, direct language',
        'Include step-by-step instructions',
        'Add relevant examples and use cases',
        'Structure content with headers'
      ],
      format: [
        'Q&A format for FAQs',
        'Bulleted lists for key points',
        'Numbered steps for processes',
        'Clear headings and subheadings'
      ]
    },
    claude: {
      title: 'Claude Optimization',
      practices: [
        'Emphasize accuracy and fact-checking',
        'Include source citations',
        'Use analytical, thoughtful tone',
        'Provide comprehensive explanations'
      ],
      format: [
        'Long-form, detailed content',
        'Multi-perspective analysis',
        'Research-backed information',
        'Logical flow and structure'
      ]
    },
    gemini: {
      title: 'Google Gemini Optimization',
      practices: [
        'Integrate multimodal content',
        'Optimize for visual search',
        'Use Google-friendly structured data',
        'Leverage Google ecosystem connections'
      ],
      format: [
        'Rich media integration',
        'Image and video descriptions',
        'Cross-platform consistency',
        'Mobile-optimized content'
      ]
    },
    perplexity: {
      title: 'Perplexity AI Optimization',
      practices: [
        'Focus on real-time relevance',
        'Include current data and trends',
        'Optimize for research queries',
        'Provide comprehensive sources'
      ],
      format: [
        'Research-oriented content',
        'Citation-heavy format',
        'Up-to-date information',
        'Academic-style references'
      ]
    }
  };

  const currentPlatform = platforms.find(p => p.id === activeTab);
  const currentContent = platformContent[activeTab as keyof typeof platformContent];
  const IconComponent = currentPlatform?.icon;

  return (
    <section id="platforms" className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform-Specific Optimization</h2>
      
      {/* Platform Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8 flex-wrap">
          {platforms.map((platform) => (
            <Button
              key={platform.id}
              variant="ghost"
              className={`border-b-2 py-2 px-1 text-sm font-medium ${
                activeTab === platform.id
                  ? 'border-brand-blue text-brand-blue'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab(platform.id)}
            >
              {platform.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Platform Content */}
      <div>
        <div className="flex items-center mb-4">
          {IconComponent && <IconComponent className={`h-8 w-8 ${currentPlatform?.color} mr-3`} />}
          <h3 className="text-xl font-semibold">{currentContent.title}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Best Practices:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {currentContent.practices.map((practice, index) => (
                <li key={index}>• {practice}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Content Format:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {currentContent.format.map((format, index) => (
                <li key={index}>• {format}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
