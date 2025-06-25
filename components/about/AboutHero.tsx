'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Users, Award } from 'lucide-react'

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 security-pattern opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                <span className="block text-white">Protecting Your</span>
                <span className="block gradient-text">Digital Assets</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed">
                With decades of combined experience in cybersecurity, our team of certified experts 
                is dedicated to safeguarding businesses from evolving cyber threats.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-cyber-400 mb-4">Our Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To provide world-class cybersecurity solutions that protect businesses of all sizes 
                from digital threats while enabling them to grow and innovate with confidence.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-400 mb-1">500+</div>
                <div className="text-slate-400 text-sm">Security Assessments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyber-400 mb-1">250+</div>
                <div className="text-slate-400 text-sm">Businesses Protected</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Values Cards */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-cyber-500 to-cyber-600 rounded-xl inline-block mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Security First</h4>
                <p className="text-slate-300 text-sm">
                  Every solution we implement puts security at the forefront
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl inline-block mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Precision</h4>
                <p className="text-slate-300 text-sm">
                  Targeted, efficient solutions tailored to your specific needs
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl inline-block mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Partnership</h4>
                <p className="text-slate-300 text-sm">
                  We work alongside your team as trusted security advisors
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 text-center"
              >
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl inline-block mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Excellence</h4>
                <p className="text-slate-300 text-sm">
                  Certified experts delivering industry-leading results
                </p>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 p-4 bg-gradient-to-br from-cyber-500 to-cyber-600 rounded-2xl cyber-glow"
            >
              <Shield className="h-8 w-8 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 