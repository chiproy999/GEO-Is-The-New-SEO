import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, X, Star, Shield, TrendingUp, Users, Zap, Award, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";

type BillingCycle = "monthly" | "annual";

interface PricingTier {
  id: "free" | "pro" | "business" | "enterprise";
  name: string;
  price: number;
  priceAnnual: number;
  description: string;
  features: string[];
  notIncluded?: string[];
  buttonText: string;
  buttonVariant: "default" | "outline" | "ghost";
  isMostPopular?: boolean;
  badge?: string;
  testId: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "FREE",
    price: 0,
    priceAnnual: 0,
    description: "Perfect for getting started with AI optimization",
    features: [
      "Basic optimization checklist",
      "Access to all guides",
      "Community support forum",
      "Monthly newsletter",
      "Basic templates"
    ],
    buttonText: "Start Free",
    buttonVariant: "outline",
    testId: "pricing-free"
  },
  {
    id: "pro",
    name: "PRO",
    price: 29,
    priceAnnual: 290,
    description: "Ideal for serious marketers and small businesses",
    features: [
      "Everything in FREE",
      "Advanced optimization checklist",
      "Weekly AI platform updates",
      "30+ downloadable templates",
      "Priority email support",
      "Exclusive content updates",
      "Personalized recommendations",
      "Monthly trend reports"
    ],
    buttonText: "Upgrade to PRO",
    buttonVariant: "default",
    isMostPopular: true,
    badge: "Save 17%",
    testId: "pricing-pro"
  },
  {
    id: "business",
    name: "BUSINESS",
    price: 99,
    priceAnnual: 990,
    description: "For teams ready to dominate AI search",
    features: [
      "Everything in PRO",
      "Monthly group coaching calls",
      "Custom optimization roadmap",
      "Priority 24/7 support",
      "Team accounts (up to 5 users)",
      "Advanced analytics dashboard",
      "Competitor analysis tools",
      "Custom reporting",
      "Implementation assistance"
    ],
    buttonText: "Go Business",
    buttonVariant: "default",
    badge: "Save 17%",
    testId: "pricing-business"
  },
  {
    id: "enterprise",
    name: "ENTERPRISE",
    price: 499,
    priceAnnual: 4990,
    description: "Complete solution for large organizations",
    features: [
      "Everything in BUSINESS",
      "White-label rights",
      "Custom training for your team",
      "Dedicated account manager",
      "API access",
      "Unlimited team members",
      "Custom integrations",
      "SLA guarantees",
      "Quarterly business reviews"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "default",
    badge: "Save 17%",
    testId: "pricing-enterprise"
  }
];

const allFeatures = [
  { name: "Basic checklist", free: true, pro: true, business: true, enterprise: true },
  { name: "Access to guides", free: true, pro: true, business: true, enterprise: true },
  { name: "Community support", free: true, pro: true, business: true, enterprise: true },
  { name: "Advanced 100+ checklist", free: false, pro: true, business: true, enterprise: true },
  { name: "Weekly AI updates", free: false, pro: true, business: true, enterprise: true },
  { name: "Downloadable templates", free: "5", pro: "30+", business: "50+", enterprise: "Unlimited" },
  { name: "Email support", free: false, pro: true, business: true, enterprise: true },
  { name: "Priority support", free: false, pro: false, business: true, enterprise: true },
  { name: "Group coaching calls", free: false, pro: false, business: true, enterprise: true },
  { name: "Custom roadmap", free: false, pro: false, business: true, enterprise: true },
  { name: "Team accounts", free: "1", pro: "1", business: "5", enterprise: "Unlimited" },
  { name: "Analytics dashboard", free: false, pro: "Basic", business: "Advanced", enterprise: "Custom" },
  { name: "White-label rights", free: false, pro: false, business: false, enterprise: true },
  { name: "Custom training", free: false, pro: false, business: false, enterprise: true },
  { name: "Dedicated manager", free: false, pro: false, business: false, enterprise: true },
  { name: "API access", free: false, pro: false, business: false, enterprise: true }
];

const faqs = [
  {
    question: "Can I change my plan anytime?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged a prorated amount. When downgrading, the remaining balance will be credited to your account."
  },
  {
    question: "Do you offer a money-back guarantee?",
    answer: "Absolutely! All paid plans come with a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment, no questions asked."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through Stripe."
  },
  {
    question: "Is there a discount for annual plans?",
    answer: "Yes! When you choose annual billing, you save 17% compared to monthly billing. That's like getting 2 months free every year!"
  },
  {
    question: "Can I get a custom plan for my team?",
    answer: "For teams larger than 5 members or with specific requirements, we offer custom Enterprise plans. Contact our sales team to discuss your needs and get a personalized quote."
  },
  {
    question: "What happens after the free trial?",
    answer: "The FREE tier doesn't expire - it's free forever! For paid plans, you can try them risk-free with our 30-day money-back guarantee."
  },
  {
    question: "Do you offer educational or non-profit discounts?",
    answer: "Yes! We offer 50% discounts for educational institutions and registered non-profits. Contact us with proof of eligibility to get your discount code."
  },
  {
    question: "How do team accounts work?",
    answer: "Business plans include up to 5 team member accounts. Each member gets their own login and can track their individual progress. Enterprise plans include unlimited team members."
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const signupUrl = import.meta.env.VITE_SIGNUP_URL || "/api/login";
  const checkoutLinks: Record<PricingTier["id"], Partial<Record<BillingCycle, string | undefined>>> = {
    free: {},
    pro: {
      monthly: import.meta.env.VITE_CHECKOUT_PRO_MONTHLY_URL,
      annual: import.meta.env.VITE_CHECKOUT_PRO_ANNUAL_URL,
    },
    business: {
      monthly: import.meta.env.VITE_CHECKOUT_BUSINESS_MONTHLY_URL,
      annual: import.meta.env.VITE_CHECKOUT_BUSINESS_ANNUAL_URL,
    },
    enterprise: {
      monthly: import.meta.env.VITE_CHECKOUT_ENTERPRISE_URL,
      annual: import.meta.env.VITE_CHECKOUT_ENTERPRISE_URL,
    },
  };

  const handlePlanClick = (tier: PricingTier) => {
    if (tier.id === "free") {
      window.location.href = signupUrl;
      return;
    }

    if (tier.id === "enterprise") {
      const enterpriseUrl = checkoutLinks.enterprise.monthly || "/contact?plan=enterprise";
      window.location.href = enterpriseUrl;
      return;
    }

    const destination = checkoutLinks[tier.id]?.[billingCycle];

    if (destination) {
      window.location.href = destination;
    } else {
      window.location.href = `/contact?plan=${tier.id}&billing=${billingCycle}`;
    }
  };

  return (
    <>
      <SEOHead 
        title="Pricing - Choose Your AI Optimization Plan | GEO Guide"
        description="Choose the perfect plan to future-proof your business for AI search. Free tier available. 30-day money-back guarantee on all paid plans."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-700" variant="secondary">
              <Star className="h-3 w-3 mr-1" />
              Trusted by marketers worldwide
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" data-testid="pricing-title">
              Choose Your Path to AI Dominance
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Future-proof your business with the right plan. Start free, upgrade as you grow.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-12">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm text-gray-700 font-medium">30-day money-back guarantee</span>
              <span className="text-gray-400">•</span>
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-gray-700 font-medium">Cancel anytime</span>
              <span className="text-gray-400">•</span>
              <Zap className="h-5 w-5 text-purple-600" />
              <span className="text-sm text-gray-700 font-medium">Instant access</span>
            </div>
            
            {/* Billing Toggle */}
              <Tabs value={billingCycle} onValueChange={(value) => setBillingCycle(value as BillingCycle)} className="w-fit mx-auto">
              <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                <TabsTrigger value="monthly" data-testid="billing-monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual" className="relative" data-testid="billing-annual">
                  Annual
                  <Badge className="absolute -top-3 -right-3 bg-green-500">Save 17%</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingTiers.map((tier) => {
                const isCheckoutReady =
                  tier.id === "free" ||
                  tier.id === "enterprise"
                    ? !!checkoutLinks[tier.id]?.monthly
                    : !!checkoutLinks[tier.id]?.[billingCycle];

                return (
                <Card 
                  key={tier.name} 
                  className={`relative ${tier.isMostPopular ? 'border-blue-500 border-2 shadow-xl scale-105' : ''}`}
                  data-testid={tier.testId}
                >
                  {tier.isMostPopular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                      <Award className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  
                  {tier.badge && billingCycle === "annual" && (
                    <Badge className="absolute -top-3 right-4 bg-green-500">
                      {tier.badge}
                    </Badge>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                    
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        ${billingCycle === "monthly" ? tier.price : Math.floor(tier.priceAnnual / 12)}
                      </span>
                      <span className="text-gray-500 ml-1">
                        {tier.price > 0 ? '/month' : ''}
                      </span>
                      {billingCycle === "annual" && tier.price > 0 && (
                        <p className="text-sm text-gray-500 mt-1">
                          Billed ${tier.priceAnnual} annually
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="flex flex-col gap-2">
                    <Button 
                      className="w-full" 
                      variant={tier.buttonVariant}
                      size="lg"
                      data-testid={`${tier.testId}-button`}
                      onClick={() => handlePlanClick(tier)}
                    >
                      {tier.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    {tier.id !== "free" && tier.id !== "enterprise" && !isCheckoutReady && (
                      <p className="text-xs text-amber-600 text-center">
                        Checkout link coming soon—contact form will open instead.
                      </p>
                    )}
                  </CardFooter>
                </Card>
              )})}
            </div>
          </div>
        </section>
        
        {/* Feature Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="comparison-title">
              Compare All Features
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" data-testid="comparison-table">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-medium text-gray-900">Features</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">FREE</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">
                      <span className="inline-flex items-center">
                        PRO
                        <Badge className="ml-2 bg-blue-100 text-blue-700" variant="secondary">Popular</Badge>
                      </span>
                    </th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">BUSINESS</th>
                    <th className="text-center py-4 px-4 font-medium text-gray-900">ENTERPRISE</th>
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, index) => (
                    <tr key={feature.name} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-sm text-gray-700">{feature.name}</td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.free === 'boolean' ? (
                          feature.free ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.free}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4 bg-blue-50/50">
                        {typeof feature.pro === 'boolean' ? (
                          feature.pro ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.pro}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.business === 'boolean' ? (
                          feature.business ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.business}</span>
                        )}
                      </td>
                      <td className="text-center py-3 px-4">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-700">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" data-testid="comparison-cta">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Social Proof */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Businesses around the world are using our strategies to improve their AI search visibility.
              </p>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12" data-testid="faq-title">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600" data-testid={`faq-answer-${index}`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Future-Proof Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start optimizing for AI search today with proven strategies.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100" data-testid="final-cta-free">
                Start Free Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" data-testid="final-cta-demo">
                Schedule Demo
                <Users className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-4 text-sm opacity-80">
              <Shield className="h-4 w-4" />
              <span>30-day money-back guarantee</span>
              <span>•</span>
              <span>No credit card required</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
}