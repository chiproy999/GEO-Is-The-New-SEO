import { Helmet } from "react-helmet-async";

type JsonLdSchema = Record<string, unknown>;

export interface StructuredDataProps {
  pageType?: "home" | "guide" | "checklist";
  title?: string;
  description?: string;
}

export default function StructuredData({
  pageType = "home",
  title = "Complete GEO & AI Search Optimization Guide",
  description = "Master Generative Engine Optimization (GEO) and Google Maps ranking with our comprehensive guide. Future-proof your business for ChatGPT, Claude, Gemini, and all AI platforms with actionable strategies and interactive checklists.",
}: StructuredDataProps) {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : import.meta.env.VITE_PUBLIC_URL || "";
  const baseSchemas: JsonLdSchema[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "GEO Optimization Guide",
      description: "Complete guide for Generative Engine Optimization and AI search visibility",
      url: origin,
      logo: `${origin}/favicon.ico`,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "GEO Optimization Guide",
      description,
      url: origin,
      potentialAction: {
        "@type": "SearchAction",
        target: `${origin}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  if (pageType === "home") {
    baseSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ENTITIES,
    });

    baseSchemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Optimize for AI Search and Google Maps",
      description,
      step: HOWTO_STEPS,
    });
  }

  if (pageType === "guide") {
    baseSchemas.push({
      "@context": "https://schema.org",
      "@type": "Guide",
      name: title,
      description,
      provider: {
        "@type": "Organization",
        name: "GEO Optimization Guide",
        url: origin,
      },
    });

    baseSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: GUIDE_BREADCRUMBS.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        ...item,
      })),
    });
  }

  if (pageType === "checklist") {
    baseSchemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: title,
      description,
      step: HOWTO_STEPS.slice(0, 3),
    });
  }

  return (
    <Helmet>
      {baseSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
}

const FAQ_ENTITIES: JsonLdSchema[] = [
  {
    "@type": "Question",
    name: "What is Generative Engine Optimization (GEO)?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Generative Engine Optimization (GEO) is the practice of optimizing content and online presence to appear in AI-generated responses from ChatGPT, Claude, Gemini, Perplexity, and other assistants.",
    },
  },
  {
    "@type": "Question",
    name: "How does GEO differ from traditional SEO?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Traditional SEO focuses on ranking web pages, while GEO emphasizes structured, conversational content that AI systems can parse, cite, and summarize directly.",
    },
  },
  {
    "@type": "Question",
    name: "Which AI platforms should I optimize for?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Start with ChatGPT, Claude, Gemini, Perplexity, and Microsoft Copilot—each rewards depth, recency, and authority signals differently.",
    },
  },
];

const HOWTO_STEPS: JsonLdSchema[] = [
  {
    "@type": "HowToStep",
    name: "Implement GEO Strategies",
    text: "Convert content to conversational tone, build authority signals, and create comprehensive FAQ sections.",
  },
  {
    "@type": "HowToStep",
    name: "Optimize for AI Platforms",
    text: "Tailor your sources and media for ChatGPT, Claude, Gemini, and Perplexity requirements.",
  },
  {
    "@type": "HowToStep",
    name: "Improve Google Maps Presence",
    text: "Complete your Google Business Profile, manage reviews, and maintain NAP consistency across directories.",
  },
  {
    "@type": "HowToStep",
    name: "Add Technical Implementation",
    text: "Implement JSON-LD schema, ensure mobile responsiveness, and monitor Core Web Vitals.",
  },
];

const GUIDE_BREADCRUMBS: { name: string; item: string }[] = [
  { name: "Home", item: "/" },
  { name: "GEO Guide", item: "/geo-guide" },
  { name: "Maps Guide", item: "/maps-guide" },
];