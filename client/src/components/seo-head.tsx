import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author = 'GEO Optimization Guide',
  publishDate = '2025-01-01',
  modifiedDate = new Date().toISOString().split('T')[0]
}: SEOProps) {
  
  useEffect(() => {
    // Get current URL if not provided - use clean URL without hash/params
    const currentUrl = url || (window.location.origin + window.location.pathname);
    const currentOrigin = window.location.origin;
    const defaultImage = `${currentOrigin}/favicon.ico`;
    const ogImage = image || defaultImage;
    
    // Helper function to update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attributeName = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attributeName}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };
    
    // Update document title
    document.title = title;
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Keywords (if provided)
    if (keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);
    
    // Open Graph tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:site_name', 'GEO Optimization Guide', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', `${title} - Visual Guide`, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description.length > 200 ? description.substring(0, 197) + '...' : description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:site', '@GEOOptimization');
    updateMetaTag('twitter:creator', '@GEOOptimization');
    
    // Article specific tags (if type is article)
    if (type === 'article') {
      updateMetaTag('article:published_time', publishDate, true);
      updateMetaTag('article:modified_time', modifiedDate, true);
      updateMetaTag('article:author', author, true);
      updateMetaTag('article:section', 'SEO and AI Optimization', true);
      
      // Article keywords as tags - create separate meta elements for each keyword
      if (keywords.length > 0) {
        // First, remove any existing article:tag meta tags
        const existingTagMetas = document.querySelectorAll('meta[property="article:tag"]');
        existingTagMetas.forEach(meta => meta.remove());
        
        // Create a separate meta element for each keyword
        keywords.forEach(keyword => {
          const meta = document.createElement('meta');
          meta.setAttribute('property', 'article:tag');
          meta.setAttribute('content', keyword);
          document.head.appendChild(meta);
        });
      }
    }
    
    // Additional SEO meta tags
    updateMetaTag('theme-color', '#ffffff');
    updateMetaTag('msapplication-TileColor', '#ffffff');
    updateMetaTag('application-name', 'GEO Optimization Guide');
    
    // JSON-LD structured data for article/webpage
    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "headline": title,
      "description": description,
      "author": {
        "@type": "Organization",
        "name": author
      },
      "publisher": {
        "@type": "Organization", 
        "name": "GEO Optimization Guide",
        "logo": {
          "@type": "ImageObject",
          "url": defaultImage
        }
      },
      "datePublished": publishDate,
      "dateModified": modifiedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      },
      "url": currentUrl,
      "image": {
        "@type": "ImageObject",
        "url": ogImage,
        "width": 1200,
        "height": 630
      }
    };
    
    // Add keywords to structured data if available
    if (keywords.length > 0) {
      structuredData["keywords"] = keywords;
    }
    
    // Add or update JSON-LD script
    let jsonLdScript = document.getElementById('page-structured-data') as HTMLScriptElement;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.type = 'application/ld+json';
      jsonLdScript.id = 'page-structured-data';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData, null, 2);
    
    // Cleanup function
    return () => {
      // Remove page-specific structured data when component unmounts
      const script = document.getElementById('page-structured-data');
      if (script) {
        script.remove();
      }
    };
    
  }, [title, description, keywords, image, url, type, author, publishDate, modifiedDate]);
  
  return null; // This component doesn't render anything visible
}