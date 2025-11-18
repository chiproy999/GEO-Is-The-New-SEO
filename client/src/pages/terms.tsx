import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Scale, AlertTriangle, Users, FileText } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - GEO Guide | Legal Terms & Conditions"
        description="Terms of service and legal information for using the GEO Optimization Guide. User responsibilities and service conditions."
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEOHead from "@/components/seo-head";
import { Calendar, FileText, Shield, Users } from 'lucide-react';
export default function TermsPage() {
  return (
    <>
      <SEOHead 
        title="Terms of Service - GEO Guide Platform Usage Terms | GEO Guide"
        description="Read our terms of service for using the GEO Guide platform. Understand your rights and responsibilities when using our GEO optimization services."
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Scale className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our GEO optimization services and resources.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 15, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick Summary */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Terms Summary</h2>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-blue-900">Fair Use</div>
                  <div className="text-blue-700">Educational and commercial use permitted</div>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-blue-900">Content</div>
                  <div className="text-blue-700">Guidelines and strategies provided as-is</div>
                </div>
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-medium text-blue-900">Liability</div>
                  <div className="text-blue-700">Limited liability for business decisions</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              {/* Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing or using the GEO Optimization Guide website and services ("Service"), 
                  you agree to be bound by these Terms of Service ("Terms"). If you disagree with 
                  any part of these terms, then you may not access the Service.
                </p>
                <p className="text-gray-700">
                  These Terms apply to all visitors, users, and others who access or use the Service.
                </p>
              </section>

              {/* Service Description */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Service Description</h2>
                <p className="text-gray-700 mb-4">
                  Our Service provides educational content, guides, and strategies for Generative 
                  Engine Optimization (GEO) to help businesses improve their visibility in AI-powered 
                  search results.
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">What We Provide:</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
                  <li>Educational content about GEO strategies</li>
                  <li>Platform-specific optimization guides</li>
                  <li>Checklists and implementation resources</li>
                  <li>Industry insights and best practices</li>
                </ul>
                <p className="text-gray-700">
                  The Service is provided for educational and informational purposes.
                </p>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Acceptable Use</h3>
                <p className="text-gray-700 mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Activities</h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Attempting to hack, reverse engineer, or disrupt the Service</li>
                  <li>Sharing false or misleading information</li>
                  <li>Using automated tools to scrape content without permission</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Intellectual Property</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Content</h3>
                <p className="text-gray-700 mb-4">
                  The Service and its original content, features, and functionality are owned by 
                  GEO Optimization Guide and are protected by international copyright, trademark, 
                  and other intellectual property laws.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Use Rights</h3>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-green-800">
                    <strong>Permitted:</strong> You may use our strategies and guidelines for your 
                    business optimization efforts, including implementing recommendations for 
                    commercial purposes.
                  </p>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800">
                    <strong>Not Permitted:</strong> Redistributing, republishing, or reselling our 
                    content without explicit permission. Creating derivative works for commercial 
                    distribution.
                  </p>
                </div>
              </section>

              {/* Disclaimers */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Disclaimers and Limitations</h2>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Important Notice</h3>
                  <p className="text-yellow-800 mb-3">
                    The information provided through our Service is for educational purposes only. 
                    Results may vary based on implementation, industry, competition, and other factors.
                  </p>
                  <p className="text-yellow-800">
                    We do not guarantee specific outcomes from implementing our strategies.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We aim to provide continuous access to the Service, but we do not guarantee 
                  uninterrupted availability. We may modify, suspend, or discontinue any part 
                  of the Service at any time.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Links</h3>
                <p className="text-gray-700 mb-4">
                  Our Service may contain links to third-party websites or services. We are not 
                  responsible for the content, privacy policies, or practices of third-party sites.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by applicable law, GEO Optimization Guide shall 
                  not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or 
                  other intangible losses.
                </p>
                <p className="text-gray-700">
                  Our total liability shall not exceed the amount you paid for the Service in the 
                  12 months preceding the claim.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of 
                  material changes by posting the updated Terms on our website and updating the 
                  "Last updated" date.
                </p>
                <p className="text-gray-700">
                  Your continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
                <p className="text-gray-700">
                  These Terms shall be governed by and construed in accordance with the laws of 
                  the jurisdiction in which our company is incorporated, without regard to conflict 
                  of law principles.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-4">
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@geo-guide.com</p>
                    <p><strong>Response Time:</strong> We aim to respond within 5 business days</p>
                  </div>
                </div>
              </section>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Please read these terms carefully before using our GEO optimization platform
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: September 2025</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <span>Legal Document</span>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Welcome to GEO Guide ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, 
                  services, and platform (collectively, the "Service") operated by GEO Guide.
                </p>
                <p className="text-gray-600">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                  then you may not access the Service.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By using our Service, you confirm that:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                  <li>You are at least 18 years old or have parental consent</li>
                  <li>You have the legal capacity to enter into these Terms</li>
                  <li>You will use the Service in compliance with all applicable laws</li>
                  <li>You will not use the Service for any unlawful or prohibited purpose</li>
                </ul>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Description</h2>
                <p className="text-gray-600 mb-4">
                  GEO Guide provides educational content, tools, and resources related to Generative Engine Optimization (GEO). 
                  Our Service includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Educational content about AI search optimization</li>
                  <li>Tools and resources for GEO implementation</li>
                  <li>Platform guides and best practices</li>
                  <li>Community features and support</li>
                </ul>
              </div>

              {/* User Accounts */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. User Accounts</h2>
                <p className="text-gray-600 mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Safeguarding your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Maintaining the confidentiality of your account</li>
                </ul>
              </div>

              {/* Acceptable Use */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Acceptable Use Policy</h2>
                <p className="text-gray-600 mb-4">You agree not to use the Service to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>Use the Service for commercial purposes without permission</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property Rights</h2>
                <p className="text-gray-600 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of 
                  GEO Guide and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-600">
                  You may not reproduce, distribute, modify, or create derivative works of our content without explicit written permission.
                </p>
              </div>

              {/* Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                  to understand our practices.
                </p>
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read our Privacy Policy →
                </a>
              </div>

              {/* Service Availability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain the Service's availability, but we do not guarantee uninterrupted access. The Service may be 
                  temporarily unavailable due to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Scheduled maintenance</li>
                  <li>Technical difficulties</li>
                  <li>Force majeure events</li>
                  <li>Updates or improvements</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  In no event shall GEO Guide, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for 
                  any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                  we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-600">
                  Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 mb-2">
                    <strong>Email:</strong> legal@geoguide.com
                  </p>
                  <p className="text-gray-600 mb-2">
                    <strong>Address:</strong> 123 GEO Street, San Francisco, CA 94105
                  </p>
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +1 (555) GEO-HELP
                  </p>
                </div>
              </div>

              {/* Effective Date */}
              <div className="border-t pt-8">
                <p className="text-sm text-gray-500 text-center">
                  These Terms of Service are effective as of September 2025 and will remain in effect except with respect to any changes 
                  in their provisions in the future, which will be in effect immediately after being posted on this page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
}
