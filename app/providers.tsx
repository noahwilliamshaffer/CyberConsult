'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

type SupabaseContext = {
  supabase: ReturnType<typeof createClientComponentClient>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export default function SupabaseProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [supabase] = useState(() => createClientComponentClient())
  const router = useRouter()

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh()
    })

    return () => subscription.unsubscribe()
  }, [supabase, router])

  return (
    <Context.Provider value={{ supabase }}>
      <div>{children}</div>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)
  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }
  return context
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseProvider>
      {children}
    </SupabaseProvider>
  )
} 