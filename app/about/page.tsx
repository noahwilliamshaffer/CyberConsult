import { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'
import { TeamSection } from '@/components/about/TeamSection'

export const metadata: Metadata = {
  title: 'About Us - Expert Cybersecurity Team',
  description: 'Meet the certified cybersecurity experts behind SentinelStack Security. Our team brings decades of experience in penetration testing, security consulting, and enterprise protection.',
  keywords: [
    'cybersecurity team',
    'security experts',
    'penetration testing professionals',
    'certified ethical hacker',
    'security consultants',
    'cybersecurity experience'
  ],
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <TeamSection />
    </div>
  )
} 