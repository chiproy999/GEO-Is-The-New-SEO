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
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}