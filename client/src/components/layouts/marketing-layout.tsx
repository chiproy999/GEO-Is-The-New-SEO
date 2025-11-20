import type { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StructuredData, { type StructuredDataProps } from "@/components/structured-data";
import SEOHead, { type SEOProps } from "@/components/seo-head";
import PageBreadcrumbs from "@/components/page-breadcrumbs";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  hero?: ReactNode;
  children: ReactNode;
  seo: SEOProps;
  structuredData?: StructuredDataProps;
  showBreadcrumbs?: boolean;
  mainClassName?: string;
}

export default function MarketingLayout({
  hero,
  children,
  seo,
  structuredData,
  showBreadcrumbs = true,
  mainClassName,
}: MarketingLayoutProps) {
  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen">
      <SEOHead {...seo} />
      {structuredData && <StructuredData {...structuredData} />}
      <Header />
      {showBreadcrumbs && <PageBreadcrumbs />}
      {hero}
      <main className={cn("section-shell section-padding space-y-12", mainClassName)}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

