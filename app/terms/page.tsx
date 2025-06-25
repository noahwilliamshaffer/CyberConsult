import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Sentinel Shield',
  description: 'Terms of service for Sentinel Shield cybersecurity services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-slate prose-invert max-w-none">
            <div className="text-slate-300 space-y-6">
              <p className="text-lg">
                <strong>Effective Date:</strong> January 2025
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Sentinel Shield's services, you accept and agree to be bound by the 
                  terms and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Services Description</h2>
                <p>
                  Sentinel Shield provides cybersecurity consulting services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>CIS Controls Implementation (Basic, Intermediate, Enterprise tiers)</li>
                  <li>Web Application Penetration Testing</li>
                  <li>Security assessments and audits</li>
                  <li>Security consulting and advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Service Level Agreements</h2>
                <p>
                  Service delivery timelines and specifications are detailed in individual service agreements. 
                  Standard timelines are:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>CIS Basic Controls: 2-3 weeks implementation</li>
                  <li>CIS Intermediate: 4-6 weeks implementation</li>
                  <li>CIS Enterprise: 8-12 weeks implementation</li>
                  <li>Penetration Testing: 1-2 weeks assessment + 1 week reporting</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Payment Terms</h2>
                <p>
                  Payment is required before service commencement unless otherwise agreed in writing. 
                  All prices are in USD and payments are processed securely through Stripe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Confidentiality</h2>
                <p>
                  Sentinel Shield maintains strict confidentiality regarding all client information, systems, 
                  and vulnerabilities discovered during assessments. All team members sign comprehensive 
                  non-disclosure agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  Sentinel Shield's liability is limited to the amount paid for services. We maintain 
                  professional liability insurance and follow industry best practices, but cybersecurity 
                  involves inherent risks that cannot be completely eliminated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
                <p>
                  All reports, methodologies, and deliverables created for clients remain the property of 
                  the client upon full payment. Sentinel Shield retains rights to general methodologies 
                  and non-client-specific knowledge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Termination</h2>
                <p>
                  Either party may terminate services with 30 days written notice. Clients are responsible 
                  for payment of services rendered up to the termination date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:{' '}
                  <a href="mailto:legal@sentinelshield.com" className="text-cyber-400 hover:text-cyber-300">
                    legal@sentinelshield.com
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