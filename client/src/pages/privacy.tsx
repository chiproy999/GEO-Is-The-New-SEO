import { useEffect } from 'react';
import { Shield, Mail, Database, Eye, Lock, Users } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - GEO Master | Data Protection & User Privacy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'GEO Master privacy policy explaining how we collect, use, and protect your personal information. GDPR compliant data handling practices.');
    }
  }, []);

  const lastUpdated = "December 15, 2024";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">
              <a href="/">GEO Master</a>
            </div>
            <nav>
              <ul className="flex items-center space-x-6">
                <li><a href="/" className="text-gray-600 hover:text-blue-600 transition">Home</a></li>
                <li><a href="/blog" className="text-gray-600 hover:text-blue-600 transition">Blog</a></li>
                <li><a href="/tools" className="text-gray-600 hover:text-blue-600 transition">Tools</a></li>
                <li><a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">
            Your privacy is important to us. Learn how we protect and handle your data.
          </p>
          <p className="text-sm opacity-75 mt-4">
            Last updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Quick Overview */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Minimal Collection</h3>
                <p className="text-sm text-blue-700">We only collect what's necessary for our service</p>
              </div>
              <div className="text-center">
                <Lock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">Secure Storage</h3>
                <p className="text-sm text-blue-700">Your data is encrypted and protected</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold text-blue-900 mb-1">No Sharing</h3>
                <p className="text-sm text-blue-700">We never sell your information to third parties</p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 mb-4">
                GEO Master ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our site or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Contact Information:</strong> Email address, name (when provided)</li>
                <li><strong>Communication Data:</strong> Messages you send through our contact forms</li>
                <li><strong>Newsletter Data:</strong> Email preferences and subscription status</li>
                <li><strong>Account Information:</strong> Username and preferences (for registered users)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we may automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
                <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                <li><strong>Technical Data:</strong> IP address, referrer URL, access times</li>
                <li><strong>Cookies:</strong> Small files stored on your device (see Cookie Policy below)</li>
              </ul>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Service Provision:</strong> To provide and maintain our GEO optimization tools and guides</li>
                <li><strong>Communication:</strong> To send newsletters, updates, and respond to inquiries</li>
                <li><strong>Improvement:</strong> To analyze usage patterns and improve our services</li>
                <li><strong>Support:</strong> To provide customer support and technical assistance</li>
                <li><strong>Marketing:</strong> To send relevant content and promotional materials (with consent)</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following limited circumstances:
              </p>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Providers</h3>
                <p className="text-gray-700">
                  We may share information with trusted third-party service providers who assist us in operating our website and services, such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                  <li>Email marketing platforms (Mailchimp, ConvertKit)</li>
                  <li>Analytics providers (Google Analytics)</li>
                  <li>Cloud hosting services</li>
                  <li>Payment processors</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Requirements</h3>
                <p className="text-gray-700">
                  We may disclose information if required by law or to protect our rights, safety, or the rights and safety of others.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Encryption:</strong> Data is encrypted in transit and at rest</li>
                <li><strong>Access Controls:</strong> Limited access to authorized personnel only</li>
                <li><strong>Regular Updates:</strong> Security systems are regularly updated and monitored</li>
                <li><strong>Secure Hosting:</strong> Data is stored on secure, industry-standard servers</li>
              </ul>
              <p className="text-gray-700">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Access & Portability</h3>
                  <p className="text-blue-800 text-sm">
                    Request a copy of your personal information and receive it in a portable format
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Correction</h3>
                  <p className="text-green-800 text-sm">
                    Request correction of inaccurate or incomplete personal information
                  </p>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">Deletion</h3>
                  <p className="text-orange-800 text-sm">
                    Request deletion of your personal information (subject to legal requirements)
                  </p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">Opt-Out</h3>
                  <p className="text-purple-800 text-sm">
                    Opt out of marketing communications and data processing activities
                  </p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                To exercise these rights, please contact us at <a href="mailto:privacy@geomaster.com" className="text-blue-600 hover:underline">privacy@geomaster.com</a>
              </p>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cookie Type</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Essential</td>
                      <td className="border border-gray-300 px-4 py-3">Required for website functionality</td>
                      <td className="border border-gray-300 px-4 py-3">Session</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Analytics</td>
                      <td className="border border-gray-300 px-4 py-3">Track usage patterns and performance</td>
                      <td className="border border-gray-300 px-4 py-3">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Marketing</td>
                      <td className="border border-gray-300 px-4 py-3">Personalize content and ads</td>
                      <td className="border border-gray-300 px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain legitimate business interests</li>
              </ul>
              <p className="text-gray-700">
                When information is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure adequate protection through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions by regulatory authorities</li>
                <li>Other legally approved transfer mechanisms</li>
              </ul>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information immediately.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy periodically. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices on our website</li>
              </ul>
              <p className="text-gray-700">
                Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-800 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-blue-700">
                  <p className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <strong>Email:</strong> <a href="mailto:privacy@geomaster.com" className="underline ml-2">privacy@geomaster.com</a>
                  </p>
                  <p><strong>Response Time:</strong> We aim to respond within 48 hours</p>
                  <p><strong>Data Protection Officer:</strong> Available for EU residents</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">GEO Master</div>
          <p className="text-gray-400 mb-6">
            Committed to protecting your privacy since 2024
          </p>
          <nav>
            <ul className="flex justify-center space-x-8 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/tools" className="text-gray-400 hover:text-white transition">Tools</a></li>
              <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}