'use client'

import { useState } from 'react'
import { ShoppingCart, Loader2 } from 'lucide-react'
import { useSupabase } from '@/app/providers'

interface BuyNowButtonProps {
  serviceId: string
  serviceName: string
  price: number
  className?: string
}

export function BuyNowButton({ serviceId, serviceName, price, className = '' }: BuyNowButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { supabase } = useSupabase()

  const handleCheckout = async () => {
    setIsLoading(true)
    
    try {
      // Check if user is authenticated
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        // Redirect to login with return URL
        window.location.href = `/login?returnTo=/services&checkout=${serviceId}`
        return
      }

      // Create Stripe checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceId,
          serviceName,
          price,
          userId: user.id,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create checkout session')
      }

      const { url } = await response.json()
      
      // Redirect to Stripe Checkout
      window.location.href = url
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Failed to initiate checkout. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className={`group bg-gradient-to-r from-cyber-600 to-cyber-700 hover:from-cyber-700 hover:to-cyber-800 disabled:from-slate-600 disabled:to-slate-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 flex items-center justify-center space-x-2 ${className}`}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Processing...</span>
        </>
      ) : (
        <>
          <ShoppingCart className="h-5 w-5" />
          <span>Buy Now - ${price.toLocaleString()}</span>
        </>
      )}
    </button>
  )
} 