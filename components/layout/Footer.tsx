import Link from 'next/link'
import { Shield, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyber-500" />
              <span className="text-xl font-bold text-white">SentinelStack Security</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              Professional cybersecurity consulting services providing comprehensive security solutions, 
              penetration testing, and enterprise protection for businesses of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>contact@sentinelstack-security.com</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>United States</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#cis" className="text-slate-400 hover:text-white transition-colors text-sm">
                  CIS Implementation
                </Link>
              </li>
              <li>
                <Link href="/services#penetration-testing" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Security Assessments</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Vulnerability Analysis</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Compliance Consulting</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/noahwilliamshaffer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="View our GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
              <p className="text-slate-400 text-sm">
                © {currentYear} SentinelStack Security. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 