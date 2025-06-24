'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, ArrowRight, PlayCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 security-pattern opacity-30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-cyber-500/10 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48 bg-primary-500/10 rounded-full blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="p-4 bg-gradient-to-br from-cyber-500 to-primary-600 rounded-2xl cyber-glow">
              <Shield className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold"
          >
            <span className="block text-white">Secure Your</span>
            <span className="block gradient-text">Digital Future</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Professional cybersecurity consulting, penetration testing, and enterprise security solutions 
            to protect what matters most to your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/services"
              className="group bg-gradient-to-r from-cyber-600 to-cyber-700 hover:from-cyber-700 hover:to-cyber-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 cyber-glow flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-slate-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <PlayCircle className="h-5 w-5" />
              <span>Free Consultation</span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-700"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-400">500+</div>
              <div className="text-slate-400 text-sm">Security Assessments</div>
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 