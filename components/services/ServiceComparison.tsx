'use client'

import { motion } from 'framer-motion'
import { CheckCircle, X, Star, Shield, Search, Award } from 'lucide-react'

const comparisonData = [
  {
    feature: 'Asset Inventory & Management',
    tier1: true,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Basic Access Controls',
    tier1: true,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Security Policies & Procedures',
    tier1: true,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Vulnerability Scanning',
    tier1: true,
    tier2: true,
    tier3: true,
    pentest: true
  },
  {
    feature: 'Advanced Access Controls & MFA',
    tier1: false,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Network Security Hardening',
    tier1: false,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Log Monitoring & Analysis',
    tier1: false,
    tier2: true,
    tier3: true,
    pentest: false
  },
  {
    feature: '24/7 Security Monitoring',
    tier1: false,
    tier2: false,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Advanced Threat Detection',
    tier1: false,
    tier2: false,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Compliance Reporting',
    tier1: false,
    tier2: false,
    tier3: true,
    pentest: false
  },
  {
    feature: 'Dedicated Security Consultant',
    tier1: false,
    tier2: false,
    tier3: true,
    pentest: false
  },
  {
    feature: 'OWASP Top 10 Assessment',
    tier1: false,
    tier2: false,
    tier3: false,
    pentest: true
  },
  {
    feature: 'Manual Penetration Testing',
    tier1: false,
    tier2: false,
    tier3: false,
    pentest: true
  },
  {
    feature: 'Vulnerability Exploitation',
    tier1: false,
    tier2: false,
    tier3: false,
    pentest: true
  },
  {
    feature: 'Executive Security Report',
    tier1: false,
    tier2: false,
    tier3: true,
    pentest: true
  }
]

const services = [
  {
    id: 'tier1',
    name: 'CIS Tier 1',
    subtitle: 'Basic Controls',
    price: '$2,499',
    icon: Shield,
    color: 'from-blue-500 to-blue-600',
    ideal: 'Small businesses'
  },
  {
    id: 'tier2',
    name: 'CIS Tier 2',
    subtitle: 'Intermediate Hardening',
    price: '$4,999',
    icon: Shield,
    color: 'from-cyber-500 to-cyber-600',
    ideal: 'Growing businesses',
    popular: true
  },
  {
    id: 'tier3',
    name: 'CIS Tier 3',
    subtitle: 'Enterprise Defense',
    price: '$9,999',
    icon: Star,
    color: 'from-purple-500 to-purple-600',
    ideal: 'Large enterprises'
  },
  {
    id: 'pentest',
    name: 'Penetration Testing',
    subtitle: 'OWASP Assessment',
    price: '$3,499',
    icon: Search,
    color: 'from-red-500 to-red-600',
    ideal: 'All business sizes'
  }
]

export function ServiceComparison() {
  return (
    <section className="py-20 bg-slate-800/30">
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
            Service <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Compare our cybersecurity services to find the perfect solution for your organization's needs and budget.
          </p>
        </motion.div>

        {/* Comparison Table - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="hidden lg:block"
        >
          <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-5 bg-slate-800/50">
              <div className="p-6 border-r border-slate-700">
                <h3 className="text-lg font-semibold text-white">Features</h3>
              </div>
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <div key={service.id} className="p-6 text-center border-r border-slate-700 last:border-r-0 relative">
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyber-500 to-cyber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      </div>
                    )}
                    <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl inline-block mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">{service.name}</h4>
                    <p className="text-sm text-slate-400 mb-2">{service.subtitle}</p>
                    <div className="text-2xl font-bold text-cyber-400 mb-1">{service.price}</div>
                    <p className="text-xs text-slate-500">{service.ideal}</p>
                  </div>
                )
              })}
            </div>

            {/* Feature Rows */}
            {comparisonData.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 ${index % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-800/40'}`}
              >
                <div className="p-4 border-r border-slate-700 flex items-center">
                  <span className="text-slate-300 text-sm">{feature.feature}</span>
                </div>
                <div className="p-4 border-r border-slate-700 flex justify-center items-center">
                  {feature.tier1 ? (
                    <CheckCircle className="h-5 w-5 text-cyber-500" />
                  ) : (
                    <X className="h-5 w-5 text-slate-500" />
                  )}
                </div>
                <div className="p-4 border-r border-slate-700 flex justify-center items-center">
                  {feature.tier2 ? (
                    <CheckCircle className="h-5 w-5 text-cyber-500" />
                  ) : (
                    <X className="h-5 w-5 text-slate-500" />
                  )}
                </div>
                <div className="p-4 border-r border-slate-700 flex justify-center items-center">
                  {feature.tier3 ? (
                    <CheckCircle className="h-5 w-5 text-cyber-500" />
                  ) : (
                    <X className="h-5 w-5 text-slate-500" />
                  )}
                </div>
                <div className="p-4 flex justify-center items-center">
                  {feature.pentest ? (
                    <CheckCircle className="h-5 w-5 text-cyber-500" />
                  ) : (
                    <X className="h-5 w-5 text-slate-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="lg:hidden space-y-8">
          {services.map((service, serviceIndex) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}
                viewport={{ once: true }}
                className={`bg-slate-900/50 backdrop-blur border border-slate-700 rounded-2xl p-6 relative ${
                  service.popular ? 'ring-2 ring-cyber-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyber-500 to-cyber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl inline-block mb-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{service.name}</h4>
                  <p className="text-sm text-slate-400 mb-2">{service.subtitle}</p>
                  <div className="text-2xl font-bold text-cyber-400">{service.price}</div>
                </div>

                <div className="space-y-3">
                  {comparisonData.map((feature, featureIndex) => {
                    const hasFeature = 
                      (service.id === 'tier1' && feature.tier1) ||
                      (service.id === 'tier2' && feature.tier2) ||
                      (service.id === 'tier3' && feature.tier3) ||
                      (service.id === 'pentest' && feature.pentest)

                    if (hasFeature) {
                      return (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-cyber-500 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{feature.feature}</span>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
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
              <h3 className="text-2xl font-bold text-white">Need Help Choosing?</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Not sure which service is right for your business? Our cybersecurity experts can help you 
              assess your needs and recommend the best solution for your organization.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyber-600 to-cyber-700 hover:from-cyber-700 hover:to-cyber-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Free Consultation</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 