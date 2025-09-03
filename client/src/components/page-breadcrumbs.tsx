import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { scrollToElement } from "@/lib/scroll-utils";

interface BreadcrumbProps {
  currentSection?: string;
}

export default function PageBreadcrumbs({ currentSection }: BreadcrumbProps) {
  const handleSectionClick = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  const getSectionName = (section: string): string => {
    const sectionNames: { [key: string]: string } = {
      'overview': 'Overview',
      'what-is-geo': 'What is GEO?',
      'geo-strategies': 'GEO Strategies',
      'platforms': 'Platform Optimization',
      'maps-ranking': 'Google Maps',
      'technical': 'Technical Setup',
      'measurement': 'Performance Tracking',
      'checklist': 'Interactive Checklist'
    };
    return sectionNames[section] || section;
  };

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink 
                className="flex items-center gap-1 hover:text-brand-blue cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Home className="h-4 w-4" />
                GEO Guide
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {currentSection && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-600">
                    {getSectionName(currentSection)}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}