'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, Phone, Mail, Calendar } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to <span className="gradient-text">Secure</span> Your Business?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Don't wait for a security breach to happen. Get a comprehensive cybersecurity 
                assessment and protection plan tailored to your business needs.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyber-500/20 rounded-lg">
                  <Shield className="h-5 w-5 text-cyber-400" />
                </div>
                <span className="text-slate-300">Free cybersecurity consultation (30 minutes)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyber-500/20 rounded-lg">
                  <Calendar className="h-5 w-5 text-cyber-400" />
                </div>
                <span className="text-slate-300">Custom security roadmap for your business</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-cyber-500/20 rounded-lg">
                  <Phone className="h-5 w-5 text-cyber-400" />
                </div>
                <span className="text-slate-300">Direct access to certified security experts</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-cyber-600 to-cyber-700 hover:from-cyber-700 hover:to-cyber-800 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Get Free Consultation</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+1555123456"
                className="group bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-slate-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 cyber-glow">
              {/* Security Dashboard Mockup */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Security Dashboard</h3>
                  <div className="w-3 h-3 bg-cyber-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                    <span className="text-slate-300">Threat Detection</span>
                    <span className="text-cyber-400 font-semibold">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                    <span className="text-slate-300">Firewall Status</span>
                    <span className="text-cyber-400 font-semibold">SECURED</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                    <span className="text-slate-300">Data Encryption</span>
                    <span className="text-cyber-400 font-semibold">256-BIT</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-xl">
                    <span className="text-slate-300">Compliance Score</span>
                    <span className="text-cyber-400 font-semibold">98%</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyber-400 mb-1">99.9%</div>
                    <div className="text-sm text-slate-400">Uptime Protection</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 p-3 bg-gradient-to-br from-cyber-500 to-cyber-600 rounded-xl"
            >
              <Shield className="h-6 w-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-700 text-center"
        >
          <p className="text-slate-400 mb-6">
            Trusted by 250+ businesses worldwide for their cybersecurity needs
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-500 text-sm">Enterprise Grade Security</div>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <div className="text-slate-500 text-sm">ISO 27001 Compliant</div>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <div className="text-slate-500 text-sm">24/7 Support</div>
            <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
            <div className="text-slate-500 text-sm">99.9% SLA</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 