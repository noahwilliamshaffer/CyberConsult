'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Search, CheckCircle } from 'lucide-react'

export function ServicesHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 security-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="block text-white">Cybersecurity</span>
              <span className="block gradient-text">Services</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security solutions designed to protect your business from evolving cyber threats. 
              From CIS Controls implementation to advanced penetration testing.
            </p>
          </div>

          {/* Service Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {/* CIS Implementation */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center group hover:border-cyber-500/50 transition-all duration-300">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">CIS Controls Implementation</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Three-tier approach to implementing CIS Controls, from basic security baseline to enterprise-grade defense systems.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Tier 1: Basic Controls
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Tier 2: Intermediate Hardening
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Tier 3: Enterprise Defense
                </div>
              </div>
            </div>

            {/* Penetration Testing */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center group hover:border-cyber-500/50 transition-all duration-300">
              <div className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Application Penetration Testing</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                OWASP Top 10 based security assessments with detailed vulnerability reporting and remediation guidance.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Black-box Testing
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Gray-box Testing
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Detailed Reporting
                </div>
              </div>
            </div>

            {/* Consulting */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 text-center group hover:border-cyber-500/50 transition-all duration-300">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security Consulting</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Strategic cybersecurity guidance, compliance consulting, and custom security solutions tailored to your business needs.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Compliance Assessment
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Risk Analysis
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <CheckCircle className="h-4 w-4 text-cyber-500 mr-2" />
                  Security Strategy
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-slate-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-400">500+</div>
              <div className="text-slate-400 text-sm">Security Assessments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-400">250+</div>
              <div className="text-slate-400 text-sm">Businesses Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-400">99.9%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-400">24/7</div>
              <div className="text-slate-400 text-sm">Security Monitoring</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 