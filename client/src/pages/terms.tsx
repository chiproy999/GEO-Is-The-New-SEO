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
