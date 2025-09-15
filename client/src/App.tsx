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
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  
  // Track page views when routes change
  useAnalytics();
  
  return (
    <Switch>
      {isLoading || !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Home} />
          <Route path="/geo-guide" component={GeoGuidePage} />
          <Route path="/maps-guide" component={MapsGuidePage} />
          <Route path="/checklist" component={ChecklistPage} />
          <Route path="/platforms/chatgpt" component={ChatGPTPage} />
          <Route path="/platforms/claude" component={ClaudePage} />
          <Route path="/platforms/gemini" component={GeminiPage} />
          <Route path="/platforms/perplexity" component={PerplexityPage} />
        </>
      )}
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
