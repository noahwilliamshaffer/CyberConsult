import Link from 'next/link'
import { Shield, Lock, Search, CheckCircle, ArrowRight, Star } from 'lucide-react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CTASection } from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
} 