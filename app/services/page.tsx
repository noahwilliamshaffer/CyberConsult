import { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'
import { CISServices } from '@/components/services/CISServices'
import { PenetrationTesting } from '@/components/services/PenetrationTesting'
import { ServiceComparison } from '@/components/services/ServiceComparison'

export const metadata: Metadata = {
  title: 'Cybersecurity Services - CIS Implementation & Penetration Testing',
  description: 'Professional cybersecurity services including CIS Controls implementation (Tier 1-3) and comprehensive web application penetration testing based on OWASP Top 10.',
  keywords: [
    'CIS controls implementation',
    'penetration testing',
    'web application security',
    'OWASP top 10',
    'cybersecurity consulting',
    'security assessment',
    'vulnerability testing',
    'enterprise security'
  ],
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServicesHero />
      <CISServices />
      <PenetrationTesting />
      <ServiceComparison />
    </div>
  )
} 