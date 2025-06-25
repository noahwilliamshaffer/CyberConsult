import { Metadata } from 'next'
import { Mail, Phone, MapPin, Clock, Shield, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get Expert Cybersecurity Consultation',
  description: 'Contact Sentinel Shield for professional cybersecurity consulting, penetration testing, and CIS implementation services. Get your free security assessment today.',
  keywords: [
    'cybersecurity contact',
    'security consultation',
    'penetration testing quote',
    'CIS implementation contact',
    'cybersecurity experts',
    'security assessment'
  ],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-cyber-grid opacity-5" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in <span className="text-cyber-400">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to strengthen your cybersecurity posture? Contact our expert team for a consultation or free security assessment.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-cyber-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="cis-basic">CIS Basic Controls ($2,499)</option>
                    <option value="cis-intermediate">CIS Intermediate Hardening ($4,999)</option>
                    <option value="cis-enterprise">CIS Full Enterprise Defense ($9,999)</option>
                    <option value="penetration-testing">Web Application Penetration Testing ($3,499)</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your cybersecurity needs, current challenges, or questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyber-600 to-cyber-500 hover:from-cyber-700 hover:to-cyber-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyber-500/20 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-cyber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-slate-300">contact@sentinelshield.com</p>
                      <p className="text-slate-400 text-sm mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyber-500/20 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-cyber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-slate-300">+1 (555) 123-4567</p>
                      <p className="text-slate-400 text-sm mt-1">Mon-Fri 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyber-500/20 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-cyber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Location</h4>
                      <p className="text-slate-300">Remote & On-site Services</p>
                      <p className="text-slate-400 text-sm mt-1">Serving clients nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cyber-500/20 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-cyber-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Emergency Response</h4>
                      <p className="text-slate-300">24/7 Incident Response</p>
                      <p className="text-slate-400 text-sm mt-1">For existing enterprise clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-slate-300">Veteran-owned security company</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-slate-300">Multiple industry certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-slate-300">Proven track record with enterprises</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-slate-300">Free initial security assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyber-400 rounded-full" />
                    <span className="text-slate-300">Comprehensive reporting & documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 