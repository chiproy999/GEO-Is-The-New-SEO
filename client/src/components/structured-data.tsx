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

    // Course/LearningResource Schema for educational content
    const courseSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": title,
      "description": description,
      "provider": {
        "@type": "Organization",
        "name": "GEO Optimization Guide",
        "url": window.location.origin
      },
      "educationalLevel": "Intermediate",
      "teaches": [
        "Generative Engine Optimization (GEO)",
        "AI Search Optimization",
        "Google Maps SEO",
        "Schema Markup Implementation",
        "AI Platform Optimization"
      ],
      "coursePrerequisites": "Basic understanding of SEO and digital marketing",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT2-4H",
        "instructor": {
          "@type": "Organization",
          "name": "GEO Optimization Guide"
        }
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Search Engine Optimization"
        },
        {
          "@type": "Thing",
          "name": "Artificial Intelligence"
        },
        {
          "@type": "Thing",
          "name": "Digital Marketing"
        }
      ]
    };

    // SpecialAnnouncement Schema for timely updates
    const announcementSchema = {
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      "name": "Latest GEO and AI Search Optimization Strategies for 2025",
      "text": "Stay ahead of the curve with the most up-to-date Generative Engine Optimization strategies. Our guide covers the latest techniques for ChatGPT, Claude, Gemini, and Perplexity AI platforms.",
      "datePosted": new Date().toISOString().split('T')[0],
      "expires": "2025-12-31",
      "category": "SEO Updates",
      "announcementLocation": {
        "@type": "VirtualLocation",
        "url": window.location.origin
      }
    };

    // ItemList Schema for comprehensive guide structure
    const itemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Complete GEO Optimization Guide Sections",
      "description": "Comprehensive list of all sections in the GEO optimization guide",
      "numberOfItems": 8,
      "itemListOrder": "https://schema.org/ItemListOrderAscending",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "GEO Fundamentals",
          "description": "Introduction to Generative Engine Optimization",
          "url": `${window.location.origin}/geo-guide`
        },
        {
          "@type": "ListItem", 
          "position": 2,
          "name": "ChatGPT Optimization",
          "description": "Specific strategies for OpenAI ChatGPT and SearchGPT",
          "url": `${window.location.origin}/platforms/chatgpt`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Claude AI Optimization", 
          "description": "Research-driven content strategies for Anthropic Claude",
          "url": `${window.location.origin}/platforms/claude`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Gemini AI Optimization",
          "description": "Multimodal content strategies for Google Gemini",
          "url": `${window.location.origin}/platforms/gemini`
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Perplexity Optimization",
          "description": "Citation-heavy content for Perplexity AI",
          "url": `${window.location.origin}/platforms/perplexity`
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Google Maps SEO",
          "description": "Local business ranking strategies",
          "url": `${window.location.origin}/maps-guide`
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Implementation Checklist",
          "description": "Interactive checklist to track optimization progress",
          "url": `${window.location.origin}/checklist`
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Technical Implementation",
          "description": "Schema markup and technical SEO requirements",
          "url": `${window.location.origin}/geo-guide#technical-implementation`
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
    addJsonLd(faqSchema, 'faq-schema');
    addJsonLd(howToSchema, 'howto-schema');
    addJsonLd(breadcrumbSchema, 'breadcrumb-schema');
    addJsonLd(courseSchema, 'course-schema');
    addJsonLd(announcementSchema, 'announcement-schema');
    addJsonLd(itemListSchema, 'itemlist-schema');

    // Cleanup function to remove schemas when component unmounts
    return () => {
      const schemaIds = [
        'organization-schema',
        'website-schema',
        'faq-schema',
        'howto-schema',
        'breadcrumb-schema',
        'course-schema',
        'announcement-schema',
        'itemlist-schema'
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