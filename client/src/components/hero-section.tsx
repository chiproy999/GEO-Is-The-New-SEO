import { Link, useLocation } from "wouter";
import EmailCaptureForm from "./email-capture-form";
import { useState } from "react";

export default function HeroSection() {
  const [location] = useLocation();
  const isHomePage = location === "/";
  const [showEmailForm, setShowEmailForm] = useState(false);
  
  // Check if already subscribed
  const isSubscribed = localStorage.getItem('geo_subscribed_email');

  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Future-Proof Your Business for
            <span className="text-blue-200"> AI Search</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Complete guide to Generative Engine Optimization (GEO) and Google Maps ranking. 
            Dominate ChatGPT, Claude, Gemini, and all AI search platforms in 2025.
          </p>
          
          {/* Email capture section for homepage */}
          {isHomePage && !isSubscribed && !showEmailForm && (
            <div className="mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto border border-white/20">
                <h3 className="text-2xl font-bold mb-3">🎁 Get Your Free GEO Audit Checklist</h3>
                <p className="text-blue-100 mb-4">
                  37 essential optimization points that helped our clients increase AI visibility by 240%
                </p>
                <button
                  onClick={() => setShowEmailForm(true)}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
                  data-testid="button-get-free-checklist"
                >
                  Get Free Checklist →
                </button>
              </div>
            </div>
          )}
          
          {/* Show email form when clicked */}
          {showEmailForm && (
            <div className="max-w-lg mx-auto mb-8">
              <EmailCaptureForm
                source="hero"
                onSuccess={() => setShowEmailForm(false)}
              />
            </div>
          )}
          
          {isHomePage && !showEmailForm && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/geo-guide">
                <button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  data-testid="hero-geo-guide-button"
                >
                  Start GEO Guide
                </button>
              </Link>
              <Link href="/maps-guide">
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  data-testid="hero-maps-guide-button"
                >
                  Maps Optimization
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
