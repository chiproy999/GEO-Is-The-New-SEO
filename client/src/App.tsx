import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Landing from "@/pages/landing";
import GeoGuidePage from "@/pages/geo-guide";
import MapsGuidePage from "@/pages/maps-guide";
import ChecklistPage from "@/pages/checklist";
import ChatGPTPage from "@/pages/platforms/chatgpt";
import ClaudePage from "@/pages/platforms/claude";
import GeminiPage from "@/pages/platforms/gemini";
import PerplexityPage from "@/pages/platforms/perplexity";
import PricingPage from "@/pages/pricing";
import GeoVsSeoPage from "@/pages/geo-vs-seo";
import PrivacyPage from "@/pages/privacy";
import ContactPage from "@/pages/contact";
import BlogPage from "@/pages/blog";
import ToolsPage from "@/pages/tools";
import TermsPage from "@/pages/terms";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";
import ExitIntentModal from "@/components/exit-intent-modal";
import FloatingCTAButton from "@/components/floating-cta-button";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      {/* Root route - authenticated users see Home, others see Landing */}
      <Route path="/" component={() => {
        if (isLoading) {
          return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading...</p>
              </div>
            </div>
          );
        }
        return isAuthenticated ? <Home /> : <Landing />;
      }} />
      
      {/* Public content pages - always accessible for SEO */}
      <Route path="/pricing" component={PricingPage} />
      <Route path="/geo-vs-seo" component={GeoVsSeoPage} />
      <Route path="/geo-guide" component={GeoGuidePage} />
      <Route path="/maps-guide" component={MapsGuidePage} />
      <Route path="/platforms/chatgpt" component={ChatGPTPage} />
      <Route path="/platforms/claude" component={ClaudePage} />
      <Route path="/platforms/gemini" component={GeminiPage} />
      <Route path="/platforms/perplexity" component={PerplexityPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/tools" component={ToolsPage} />
      <Route path="/terms" component={TermsPage} />
      
      {/* Protected routes - require authentication */}
      <Route path="/checklist" component={() => (
        <ProtectedRoute>
          <ChecklistPage />
        </ProtectedRoute>
      )} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ExitIntentModal />
        <FloatingCTAButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
