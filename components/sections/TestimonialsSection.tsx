'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Solutions',
    image: '/api/placeholder/60/60',
    rating: 5,
    content: 'SentinelStack Security transformed our cybersecurity posture. Their CIS Tier 2 implementation was thorough and professional. The team\'s expertise in penetration testing uncovered critical vulnerabilities we didn\'t know existed.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'DataVault Corp',
    image: '/api/placeholder/60/60',
    rating: 5,
    content: 'Outstanding service! The penetration testing revealed several security gaps, and their detailed remediation plan was invaluable. Erwin\'s expertise and certifications gave us complete confidence in their capabilities.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Security Manager',
    company: 'CloudSecure Inc',
    image: '/api/placeholder/60/60',
    rating: 5,
    content: 'The enterprise defense package exceeded our expectations. 24/7 monitoring and the dedicated consultant have been game-changers for our security operations. Highly recommend for any serious organization.'
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trusted by hundreds of businesses to secure their digital assets and infrastructure
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="h-8 w-8 text-cyber-500" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-slate-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-500 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-400 mb-2">500+</div>
            <div className="text-slate-400">Security Assessments</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-400 mb-2">99.9%</div>
            <div className="text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-400 mb-2">250+</div>
            <div className="text-slate-400">Businesses Protected</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cyber-400 mb-2">24/7</div>
            <div className="text-slate-400">Security Monitoring</div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Trusted Certifications & Standards
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              EC-Council CEH
            </div>
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              CompTIA PenTest+
            </div>
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              CompTIA Sec+
            </div>
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              OWASP Top 10
            </div>
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              CIS Controls
            </div>
            <div className="text-slate-400 font-mono text-sm bg-slate-800 px-4 py-2 rounded">
              Azure Certified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 