import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sentinel Shield',
  description: 'Privacy policy for Sentinel Shield cybersecurity services.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-slate prose-invert max-w-none">
            <div className="text-slate-300 space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  request services, or contact us. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Name and contact information</li>
                  <li>Company information</li>
                  <li>Service preferences and requirements</li>
                  <li>Payment information (processed securely through Stripe)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Provide and improve our cybersecurity services</li>
                  <li>Process payments and transactions</li>
                  <li>Communicate with you about services and support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p>
                  As a cybersecurity company, we implement industry-leading security measures to protect 
                  your information, including encryption, secure data storage, and regular security audits.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as necessary to provide our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:privacy@sentinelshield.com" className="text-cyber-400 hover:text-cyber-300">
                    privacy@sentinelshield.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 