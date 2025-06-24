'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Star, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react'
import { BuyNowButton } from '@/components/ui/BuyNowButton'

const cisServices = [
  {
    id: 'cis-tier-1',
    tier: 'Tier 1',
    title: 'Basic Controls',
    subtitle: 'Essential Security Baseline',
    price: 2499,
    duration: '2-3 weeks',
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    description: 'Fundamental cybersecurity controls to establish a solid security foundation for small to medium businesses.',
    features: [
      'Asset inventory and management system',
      'Access control implementation',
      'Basic security policies and procedures',
      'Vulnerability scanning setup and configuration',
      'Security awareness training program',
      'Email security configuration',
      'Network perimeter defense',
      'Incident response plan (basic)',
      'Monthly security reports',
      'Initial compliance assessment'
    ],
    deliverables: [
      'CIS Controls implementation report',
      'Security policy documentation',
      'Asset inventory spreadsheet',
      'Training materials and presentations',
      'Vulnerability scan reports'
    ],
    ideal: 'Small to medium businesses starting their cybersecurity journey'
  },
  {
    id: 'cis-tier-2',
    tier: 'Tier 2',
    title: 'Intermediate Hardening',
    subtitle: 'Enhanced Protection',
    price: 4999,
    duration: '4-6 weeks',
    icon: Lock,
    color: 'from-cyber-500 to-cyber-600',
    popular: true,
    description: 'Advanced security controls with monitoring capabilities for businesses requiring enhanced protection.',
    features: [
      'All Tier 1 features included',
      'Advanced access controls and MFA',
      'Network security hardening',
      'Log monitoring and analysis setup',
      'Incident response planning (advanced)',
      'Security metrics dashboard',
      'Email and web filtering',
      'Mobile device management policies',
      'Weekly security reports',
      'Quarterly security reviews'
    ],
    deliverables: [
      'Comprehensive security architecture',
      'Advanced policy framework',
      'Monitoring dashboard setup',
      'Incident response playbooks',
      'Security metrics reporting'
    ],
    ideal: 'Growing businesses with sensitive data and compliance requirements'
  },
  {
    id: 'cis-tier-3',
    tier: 'Tier 3',
    title: 'Full Enterprise Defense',
    subtitle: 'Comprehensive Security',
    price: 9999,
    duration: '8-12 weeks',
    icon: Star,
    color: 'from-purple-500 to-purple-600',
    description: 'Complete CIS implementation with enterprise-grade protection and compliance features.',
    features: [
      'All Tier 1 & 2 features included',
      'Full CIS Controls v8 implementation',
      'Advanced threat detection and response',
      '24/7 security monitoring setup',
      'Compliance reporting (SOC 2, HIPAA, etc.)',
      'Dedicated security consultant',
      'Advanced security automation',
      'Penetration testing (quarterly)',
      'Executive security briefings',
      'Continuous security improvement'
    ],
    deliverables: [
      'Enterprise security framework',
      'Compliance certification reports',
      '24/7 monitoring solution',
      'Advanced threat intelligence',
      'Executive dashboard and reporting'
    ],
    ideal: 'Large enterprises with strict compliance and security requirements'
  }
]

export function CISServices() {
  return (
    <section id="cis" className="py-20 bg-slate-800/30">
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
            CIS Controls <span className="gradient-text">Implementation</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Structured approach to implementing the Center for Internet Security (CIS) Controls, 
            providing layered cybersecurity protection tailored to your organization's needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cisServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-900/50 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyber-500/50 scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyber-500 to-cyber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Service Header */}
                <div className="text-center mb-8">
                  <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl inline-block mb-6`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-sm text-cyber-400 font-semibold uppercase tracking-wide mb-2">
                    {service.tier}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.subtitle}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    ${service.price.toLocaleString()}
                  </div>
                  <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h4 className="text-white font-semibold text-sm mb-3">Key Features:</h4>
                  {service.features.slice(0, 6).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-cyber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 6 && (
                    <div className="text-slate-400 text-sm italic">
                      +{service.features.length - 6} more features...
                    </div>
                  )}
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-slate-800/50 rounded-xl">
                  <div className="flex items-center mb-2">
                    <Users className="h-4 w-4 text-cyber-500 mr-2" />
                    <span className="text-white font-semibold text-sm">Ideal For:</span>
                  </div>
                  <p className="text-slate-300 text-sm">{service.ideal}</p>
                </div>

                {/* CTA Button */}
                <BuyNowButton
                  serviceId={service.id}
                  serviceName={`CIS ${service.tier}: ${service.title}`}
                  price={service.price}
                  className="w-full"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-center mb-6">
              <Award className="h-8 w-8 text-cyber-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Why Choose CIS Controls?</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
              The CIS Controls are a prioritized set of actions that collectively form a defense-in-depth set 
              of best practices that mitigate the most common attack vectors. Developed by cybersecurity 
              experts from around the world, they provide a proven framework for cybersecurity.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-400 mb-2">20</div>
                <div className="text-slate-400 text-sm">Critical Security Controls</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-400 mb-2">153</div>
                <div className="text-slate-400 text-sm">Implementation Guidelines</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-400 mb-2">95%</div>
                <div className="text-slate-400 text-sm">Attack Prevention Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 