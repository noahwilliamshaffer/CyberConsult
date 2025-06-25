'use client'

import { motion } from 'framer-motion'
import { Code, Shield, BarChart3, Award, Mail, Linkedin, Github } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Noah Shaffer',
    role: 'Full Stack Developer',
    specialization: 'Web Development & Security Architecture',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Experienced full-stack developer with expertise in modern web technologies and secure application development. Specializes in creating robust, scalable solutions with security built-in from the ground up.',
    skills: [
      'React/Next.js Development',
      'Node.js & TypeScript',
      'Cloud Architecture (AWS, Azure)',
      'DevSecOps Implementation',
      'API Security Design',
      'Database Security'
    ],
    certifications: [
      'AWS Certified Solutions Architect',
      'Microsoft Azure Fundamentals (AZ-900)',
      'Certified Secure Software Developer'
    ],
    experience: '8+ years',
    email: 'noah@sentinelshield.com',
    linkedin: 'https://linkedin.com/in/noah-shaffer',
    github: 'https://github.com/noahwilliamshaffer',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    name: 'Erwin Bruno',
    role: 'Tech Lead & Offensive Security Operator',
    specialization: 'Penetration Testing & Security Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Veteran cybersecurity professional and certified ethical hacker with extensive experience in penetration testing, vulnerability assessment, and security operations. Military background brings discipline and precision to security assessments.',
    skills: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Network Security',
      'Incident Response',
      'Security Auditing',
      'Threat Intelligence'
    ],
    certifications: [
      'EC-Council Certified Ethical Hacker (CEH)',
      'CompTIA PenTest+',
      'CompTIA Security+',
      'CompTIA Network+',
      'CompTIA A+',
      'CompTIA IT Fundamentals (ITF+)',
      'Microsoft Azure Fundamentals (AZ-900)',
      'Microsoft 365 Fundamentals (MS-900)',
      'OSHA 10-Hour Certificate'
    ],
    experience: '12+ years',
    email: 'erwin@sentinelshield.com',
    linkedin: 'https://linkedin.com/in/erwin-bruno',
    github: 'https://github.com/erwin-bruno',
    color: 'from-cyber-500 to-cyber-600',
    featured: true
  },
  {
    id: 3,
    name: 'Mathew [Last Name]',
    role: 'Business Analyst',
    specialization: 'ROI Analysis & Pricing Strategy',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    bio: 'Strategic business analyst with deep expertise in cybersecurity ROI modeling, risk assessment, and pricing optimization. Helps organizations understand the business value of security investments and develop cost-effective protection strategies.',
    skills: [
      'Risk Assessment & Analysis',
      'ROI Modeling',
      'Compliance Framework Design',
      'Business Process Analysis',
      'Financial Impact Assessment',
      'Strategic Planning'
    ],
    certifications: [
      'Certified Information Systems Auditor (CISA)',
      'Project Management Professional (PMP)',
      'Certified Risk Management Professional',
      'ISO 27001 Lead Implementer'
    ],
    experience: '10+ years',
    email: 'mathew@sentinelshield.com',
    linkedin: 'https://linkedin.com/in/mathew-analyst',
    github: 'https://github.com/mathew-analyst',
    color: 'from-purple-500 to-purple-600'
  }
]

export function TeamSection() {
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
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our diverse team combines technical expertise, business acumen, and real-world 
            experience to deliver comprehensive cybersecurity solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative bg-slate-900/50 backdrop-blur border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-300 ${
                member.featured ? 'ring-2 ring-cyber-500/50 scale-105' : ''
              }`}
            >
              {/* Featured Badge */}
              {member.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyber-500 to-cyber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Team Lead
                  </span>
                </div>
              )}

              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className={`absolute -bottom-2 -right-2 p-2 bg-gradient-to-r ${member.color} rounded-full`}>
                    {member.role.includes('Developer') ? <Code className="h-4 w-4 text-white" /> :
                     member.role.includes('Security') ? <Shield className="h-4 w-4 text-white" /> :
                     <BarChart3 className="h-4 w-4 text-white" />}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-cyber-400 font-semibold text-sm mb-2">{member.role}</p>
                <p className="text-slate-400 text-xs">{member.specialization}</p>
              </div>

              {/* Experience */}
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-cyber-400 mb-1">{member.experience}</div>
                <div className="text-slate-400 text-sm">Experience</div>
              </div>

              {/* Bio */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm mb-3">Core Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 4).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 4 && (
                    <span className="text-xs text-slate-400 px-2 py-1">
                      +{member.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Certifications Preview */}
              <div className="mb-6">
                <h4 className="text-white font-semibold text-sm mb-3">Key Certifications:</h4>
                <div className="space-y-2">
                  {member.certifications.slice(0, 3).map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-center text-xs text-slate-300">
                      <Award className="h-3 w-3 text-cyber-500 mr-2 flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                  {member.certifications.length > 3 && (
                    <div className="text-xs text-slate-400 italic">
                      +{member.certifications.length - 3} more certifications
                    </div>
                  )}
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex justify-center space-x-4 pt-4 border-t border-slate-700">
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href={member.linkedin}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4 text-slate-400" />
                </a>
                <a
                  href={member.github}
                  className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-4 w-4 text-slate-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-700"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-cyber-400 mb-2">30+</div>
              <div className="text-slate-400 text-sm">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-400 mb-2">15+</div>
              <div className="text-slate-400 text-sm">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-400 mb-2">500+</div>
              <div className="text-slate-400 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyber-400 mb-2">99%</div>
              <div className="text-slate-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 