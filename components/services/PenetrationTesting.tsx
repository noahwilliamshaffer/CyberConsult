'use client'

import { motion } from 'framer-motion'
import { Search, Target, FileText, Shield, AlertTriangle, CheckCircle, Clock, Award } from 'lucide-react'
import { BuyNowButton } from '@/components/ui/BuyNowButton'

const owaspTop10 = [
  { id: 1, name: 'Broken Access Control', severity: 'Critical' },
  { id: 2, name: 'Cryptographic Failures', severity: 'High' },
  { id: 3, name: 'Injection', severity: 'Critical' },
  { id: 4, name: 'Insecure Design', severity: 'High' },
  { id: 5, name: 'Security Misconfiguration', severity: 'High' },
  { id: 6, name: 'Vulnerable Components', severity: 'Medium' },
  { id: 7, name: 'Authentication Failures', severity: 'High' },
  { id: 8, name: 'Software & Data Integrity', severity: 'Medium' },
  { id: 9, name: 'Security Logging Failures', severity: 'Medium' },
  { id: 10, name: 'Server-Side Request Forgery', severity: 'Medium' }
]

const testingPhases = [
  {
    phase: 'Planning & Reconnaissance',
    description: 'Information gathering and attack surface mapping',
    duration: '1-2 days',
    activities: [
      'Target reconnaissance',
      'Technology stack identification',
      'Attack surface mapping',
      'Test plan development'
    ]
  },
  {
    phase: 'Vulnerability Assessment',
    description: 'Automated and manual vulnerability discovery',
    duration: '2-3 days',
    activities: [
      'Automated scanning',
      'Manual testing',
      'OWASP Top 10 assessment',
      'Custom vulnerability research'
    ]
  },
  {
    phase: 'Exploitation & Analysis',
    description: 'Proof-of-concept exploitation and impact analysis',
    duration: '2-3 days',
    activities: [
      'Vulnerability exploitation',
      'Impact assessment',
      'Data exposure evaluation',
      'Business risk analysis'
    ]
  },
  {
    phase: 'Reporting & Remediation',
    description: 'Comprehensive reporting and remediation guidance',
    duration: '1-2 days',
    activities: [
      'Executive summary',
      'Technical findings',
      'Remediation roadmap',
      'Consultation call'
    ]
  }
]

export function PenetrationTesting() {
  return (
    <section id="penetration-testing" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Web Application <span className="gradient-text">Penetration Testing</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive security assessments based on OWASP Top 10 vulnerabilities, 
            designed to identify and help remediate critical security weaknesses in your web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Service Card */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl inline-block mb-6">
                  <Search className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Professional Penetration Testing</h3>
                <div className="text-4xl font-bold text-white mb-4">$3,499</div>
                <div className="flex items-center justify-center space-x-4 text-sm text-slate-400 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    6-10 days
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    OWASP Top 10
                  </div>
                </div>
              </div>

              {/* Testing Types */}
              <div className="space-y-4 mb-8">
                <h4 className="text-white font-semibold mb-4">Testing Approaches:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <h5 className="text-cyber-400 font-semibold mb-2">Black-box Testing</h5>
                    <p className="text-slate-300 text-sm">External perspective with no internal knowledge</p>
                  </div>
                  <div className="p-4 bg-slate-900/50 rounded-xl">
                    <h5 className="text-cyber-400 font-semibold mb-2">Gray-box Testing</h5>
                    <p className="text-slate-300 text-sm">Partial internal knowledge for thorough testing</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-3 mb-8">
                <h4 className="text-white font-semibold mb-3">What's Included:</h4>
                {[
                  'OWASP Top 10 comprehensive assessment',
                  'Manual and automated testing',
                  'Business logic vulnerability testing',
                  'Authentication and authorization testing',
                  'Session management analysis',
                  'Input validation and injection testing',
                  'Detailed vulnerability report',
                  'Executive summary for stakeholders',
                  'Remediation recommendations',
                  'Post-test consultation call'
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-cyber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <BuyNowButton
                serviceId="penetration-testing"
                serviceName="Web Application Penetration Testing"
                price={3499}
                className="w-full"
              />
            </div>
          </motion.div>

          {/* OWASP Top 10 & Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* OWASP Top 10 */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-white">OWASP Top 10 Coverage</h3>
              </div>
              <div className="space-y-3">
                {owaspTop10.map((vulnerability) => (
                  <div key={vulnerability.id} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="w-6 h-6 bg-cyber-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                        {vulnerability.id}
                      </span>
                      <span className="text-slate-300 text-sm">{vulnerability.name}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      vulnerability.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      vulnerability.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {vulnerability.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testing Process */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-cyber-500 mr-3" />
                <h3 className="text-xl font-bold text-white">Testing Process</h3>
              </div>
              <div className="space-y-4">
                {testingPhases.map((phase, index) => (
                  <div key={index} className="border-l-2 border-cyber-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-cyber-400 font-semibold">{phase.phase}</h4>
                      <span className="text-xs text-slate-400">{phase.duration}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{phase.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="text-xs text-slate-400 flex items-center">
                          <div className="w-1 h-1 bg-cyber-500 rounded-full mr-2"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-cyber-500 mr-3" />
                <h3 className="text-2xl font-bold text-white">Why Penetration Testing?</h3>
              </div>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Regular penetration testing helps identify vulnerabilities before attackers do, 
                ensuring your applications remain secure and compliant with industry standards.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">$4.45M</div>
                <div className="text-slate-400 text-sm">Average Data Breach Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">287</div>
                <div className="text-slate-400 text-sm">Days to Identify Breach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-400 mb-2">95%</div>
                <div className="text-slate-400 text-sm">Vulnerabilities Found</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-400 mb-2">24hrs</div>
                <div className="text-slate-400 text-sm">Report Delivery</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 