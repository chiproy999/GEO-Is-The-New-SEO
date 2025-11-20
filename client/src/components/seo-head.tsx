import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
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
  type = "website",
  author = "GEO Optimization Guide",
  publishDate = "2025-01-01",
  modifiedDate = new Date().toISOString().split("T")[0],
}: SEOProps) {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : import.meta.env.VITE_APP_URL || "";
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const currentUrl = url ?? `${origin}${pathname}`;
  const defaultImage = image ?? `${origin}/favicon.ico`;
  const truncatedDescription = description.length > 200 ? `${description.slice(0, 197)}...` : description;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={currentUrl} />
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="application-name" content="GEO Optimization Guide" />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="GEO Optimization Guide" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:image:alt" content={`${title} - Visual Guide`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={defaultImage} />
      <meta name="twitter:site" content="@GEOOptimization" />
      <meta name="twitter:creator" content="@GEOOptimization" />

      {type === "article" && (
        <>
          <meta property="article:published_time" content={publishDate} />
          <meta property="article:modified_time" content={modifiedDate} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content="SEO and AI Optimization" />
          {keywords.map((keyword) => (
            <meta property="article:tag" content={keyword} key={keyword} />
          ))}
        </>
      )}
    </Helmet>
  );
}