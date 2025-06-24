'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Search, Lock, CheckCircle, ArrowRight, Star } from 'lucide-react'

const services = [
  {
    id: 'cis-tier-1',
    title: 'CIS Tier 1: Basic Controls',
    description: 'Essential security baseline implementation with fundamental cybersecurity controls.',
    icon: Shield,
    price: '$2,499',
    features: [
      'Asset inventory and management',
      'Access control implementation',
      'Basic security policies',
      'Vulnerability scanning setup',
      'Security awareness training'
    ],
    tier: 'Basic',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'cis-tier-2',
    title: 'CIS Tier 2: Intermediate Hardening',
    description: 'Enhanced protection with advanced security controls and monitoring capabilities.',
    icon: Lock,
    price: '$4,999',
    features: [
      'Advanced access controls',
      'Network security hardening',
      'Log monitoring & analysis',
      'Incident response planning',
      'Security metrics dashboard'
    ],
    tier: 'Intermediate',
    color: 'from-cyber-500 to-cyber-600',
    popular: true
  },
  {
    id: 'cis-tier-3',
    title: 'CIS Tier 3: Full Enterprise Defense',
    description: 'Comprehensive security framework with enterprise-grade protection and compliance.',
    icon: Star,
    price: '$9,999',
    features: [
      'Full CIS implementation',
      'Compliance reporting',
      'Advanced threat detection',
      '24/7 security monitoring',
      'Dedicated security consultant'
    ],
    tier: 'Enterprise',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'penetration-testing',
    title: 'Web Application Penetration Testing',
    description: 'OWASP Top 10 based security assessments with detailed reporting and remediation guidance.',
    icon: Search,
    price: '$3,499',
    features: [
      'OWASP Top 10 assessment',
      'Black-box & Gray-box testing',
      'Detailed vulnerability report',
      'Remediation recommendations',
      'Post-test consultation'
    ],
    tier: 'Professional',
    color: 'from-red-500 to-red-600'
  }
]

export function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-slate-800/50">
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
            Our <span className="gradient-text">Security Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions tailored to protect your business at every level
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300 group ${
                  service.popular ? 'ring-2 ring-cyber-500/50' : ''
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyber-500 to-cyber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-slate-400 uppercase tracking-wide">
                      {service.tier}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-cyber-500 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/services#${service.id}`}
                  className="group/btn w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-cyber-600 hover:to-cyber-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Security Solution?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Every business has unique security requirements. Let's discuss how we can create 
              a tailored cybersecurity strategy for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyber-600 to-cyber-700 hover:from-cyber-700 hover:to-cyber-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 