import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function PageBreadcrumbs() {
  const [location] = useLocation();

  const getPageName = (path: string): string => {
    const pageNames: { [key: string]: string } = {
      '/': 'Home',
      '/geo-guide': 'GEO Guide',
      '/maps-guide': 'Maps Guide',
      '/checklist': 'Checklist',
      '/platforms/chatgpt': 'ChatGPT Optimization',
      '/platforms/claude': 'Claude Optimization',
      '/platforms/gemini': 'Gemini Optimization',
      '/platforms/perplexity': 'Perplexity Optimization'
    };
    return pageNames[path] || 'Page';
  };

  const isHomePage = location === '/';
  const isPlatformPage = location.startsWith('/platforms/');

  return (
    <div className="bg-gray-50 border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-1 hover:text-brand-blue">
                  <Home className="h-4 w-4" />
                  GEO Guide
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {!isHomePage && (
              <>
                <BreadcrumbSeparator />
                {isPlatformPage && (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-gray-600">
                        Platforms
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                )}
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-600">
                    {getPageName(location)}
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