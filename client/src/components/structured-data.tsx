import { useEffect } from 'react';

interface StructuredDataProps {
  pageType?: 'home' | 'guide' | 'checklist';
  title?: string;
  description?: string;
}

export default function StructuredData({ 
  pageType = 'home', 
  title = 'Complete GEO & AI Search Optimization Guide',
  description = 'Master Generative Engine Optimization (GEO) and Google Maps ranking with our comprehensive guide. Future-proof your business for ChatGPT, Claude, Gemini, and all AI platforms with actionable strategies and interactive checklists.'
}: StructuredDataProps) {

  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GEO Optimization Guide",
      "description": "Complete guide for Generative Engine Optimization and AI search visibility",
      "url": window.location.origin,
      "logo": `${window.location.origin}/favicon.ico`,
      "foundingDate": "2025",
      "knowsAbout": [
        "Generative Engine Optimization",
        "AI Search Optimization",
        "Google Maps SEO",
        "Schema Markup",
        "ChatGPT Optimization",
        "Claude AI Optimization",
        "Gemini AI Optimization",
        "Perplexity AI Optimization"
      ],
      "serviceType": "SEO Consulting and AI Optimization",
      "areaServed": "Worldwide"
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GEO Optimization Guide",
      "description": description,
      "url": window.location.origin,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${window.location.origin}/?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "mainEntity": {
        "@type": "Guide",
        "name": title,
        "description": description
      }
    };

    // Article Schema for the main guide
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": ["Article", "Guide"],
      "headline": title,
      "description": description,
      "author": {
        "@type": "Organization",
        "name": "GEO Optimization Guide"
      },
      "publisher": {
        "@type": "Organization",
        "name": "GEO Optimization Guide",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}/favicon.ico`
        }
      },
      "datePublished": "2025-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      },
      "articleSection": "SEO and AI Optimization",
      "keywords": [
        "GEO",
        "Generative Engine Optimization", 
        "AI Search Optimization",
        "ChatGPT SEO",
        "Claude AI",
        "Gemini AI",
        "Google Maps SEO",
        "Schema Markup",
        "JSON-LD",
        "AI Search Results"
      ],
      "about": [
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization",
          "description": "Optimization techniques for AI-powered search engines"
        },
        {
          "@type": "Thing", 
          "name": "Google Maps SEO",
          "description": "Local SEO strategies for Google Maps ranking"
        },
        {
          "@type": "Thing",
          "name": "Schema Markup",
          "description": "Structured data implementation for better search visibility"
        }
      ]
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Generative Engine Optimization (GEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generative Engine Optimization (GEO) is the practice of optimizing content and online presence to appear prominently in AI-generated search responses from platforms like ChatGPT, Claude, Gemini, and Perplexity. It involves creating conversational content, implementing structured data, and building authority signals that AI systems can easily understand and cite."
          }
        },
        {
          "@type": "Question",
          "name": "How does GEO differ from traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": "While traditional SEO focuses on ranking in search engine results pages, GEO optimizes for being featured in AI-generated responses. This requires more conversational content, robust structured data, clear expertise signals, and content that directly answers questions in formats AI models can easily parse and cite."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI platforms should I optimize for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The primary AI platforms to optimize for include ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Perplexity AI, and Microsoft Copilot. Each platform has slightly different preferences, but focusing on high-quality, well-structured content with proper schema markup will improve visibility across all platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What types of schema markup are most important for AI optimization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most important schema types for AI optimization include Organization, LocalBusiness, FAQ, Article, Product, Review, and BreadcrumbList schemas. These provide clear structure that AI systems can easily understand and extract relevant information from."
          }
        },
        {
          "@type": "Question",
          "name": "How can I improve my Google Maps ranking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Improve Google Maps ranking by optimizing your Google Business Profile with complete information, encouraging positive reviews, maintaining consistent NAP (Name, Address, Phone) data across the web, using local keywords, and implementing LocalBusiness schema markup. Focus on the three key ranking factors: Relevance, Distance, and Prominence."
          }
        }
      ]
    };

    // How-To Schema for the optimization process
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Optimize for AI Search and Google Maps",
      "description": "Step-by-step guide to implementing GEO and Google Maps optimization strategies",
      "image": `${window.location.origin}/favicon.ico`,
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Website or business online presence"
        },
        {
          "@type": "HowToSupply", 
          "name": "Google Business Profile access"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Google Rich Results Test"
        },
        {
          "@type": "HowToTool",
          "name": "Schema.org Validator"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Implement GEO Strategies",
          "text": "Convert content to conversational tone, build authority signals, and create comprehensive FAQ sections",
          "url": `${window.location.href}#geo-guide`
        },
        {
          "@type": "HowToStep", 
          "name": "Optimize for AI Platforms",
          "text": "Tailor content for specific AI platforms like ChatGPT, Claude, and Gemini with platform-specific strategies",
          "url": `${window.location.href}#platform-optimization`
        },
        {
          "@type": "HowToStep",
          "name": "Improve Google Maps Presence",
          "text": "Optimize Google Business Profile, manage reviews, and implement local SEO strategies",
          "url": `${window.location.href}#maps-guide`
        },
        {
          "@type": "HowToStep",
          "name": "Add Technical Implementation",
          "text": "Implement JSON-LD schema markup, optimize site performance, and ensure mobile responsiveness",
          "url": `${window.location.href}#technical-implementation`
        }
      ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "GEO Guide",
          "item": `${window.location.origin}#geo-guide`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Platform Optimization",
          "item": `${window.location.origin}#platform-optimization`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Maps Guide", 
          "item": `${window.location.origin}#maps-guide`
        }
      ]
    };

    // Function to add or update script tags
    const addJsonLd = (schema: object, id: string) => {
      // Remove existing script if it exists
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }

      // Add new script
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    };

    // Add all schemas
    addJsonLd(organizationSchema, 'organization-schema');
    addJsonLd(websiteSchema, 'website-schema');
    addJsonLd(articleSchema, 'article-schema');
    addJsonLd(faqSchema, 'faq-schema');
    addJsonLd(howToSchema, 'howto-schema');
    addJsonLd(breadcrumbSchema, 'breadcrumb-schema');

    // Cleanup function to remove schemas when component unmounts
    return () => {
      const schemaIds = [
        'organization-schema',
        'website-schema', 
        'article-schema',
        'faq-schema',
        'howto-schema',
        'breadcrumb-schema'
      ];
      
      schemaIds.forEach(id => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [pageType, title, description]);

  return null; // This component doesn't render anything visible
}