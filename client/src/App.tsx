import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

const Home = lazy(() => import("@/pages/home"));
const Landing = lazy(() => import("@/pages/landing"));
const GeoGuidePage = lazy(() => import("@/pages/geo-guide"));
const MapsGuidePage = lazy(() => import("@/pages/maps-guide"));
const ChecklistPage = lazy(() => import("@/pages/checklist"));
const ChatGPTPage = lazy(() => import("@/pages/platforms/chatgpt"));
const ClaudePage = lazy(() => import("@/pages/platforms/claude"));
const GeminiPage = lazy(() => import("@/pages/platforms/gemini"));
const PerplexityPage = lazy(() => import("@/pages/platforms/perplexity"));
const PricingPage = lazy(() => import("@/pages/pricing"));
const GeoVsSeoPage = lazy(() => import("@/pages/geo-vs-seo"));
const PrivacyPage = lazy(() => import("@/pages/privacy"));
const ContactPage = lazy(() => import("@/pages/contact"));
const BlogPage = lazy(() => import("@/pages/blog"));
const ToolsPage = lazy(() => import("@/pages/tools"));
const TermsPage = lazy(() => import("@/pages/terms"));
const NotFound = lazy(() => import("@/pages/not-found"));
const ProtectedRoute = lazy(() => import("@/components/ProtectedRoute"));
const ExitIntentModal = lazy(() => import("@/components/exit-intent-modal"));
const FloatingCTAButton = lazy(() => import("@/components/floating-cta-button"));

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Suspense fallback={<PageLoadingState />}>
      <Switch>
        {/* Root route - authenticated users see Home, others see Landing */}
        <Route path="/" component={() => {
          if (isLoading) {
            return <PageLoadingState />;
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
    </Suspense>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // initGA() handles missing measurement ID gracefully by showing a warning and returning early
    initGA();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Suspense fallback={null}>
          <ExitIntentModal />
        </Suspense>
        <Suspense fallback={null}>
          <FloatingCTAButton />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

function PageLoadingState() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading experience...</p>
      </div>
    </div>
  );
}

export default App;
