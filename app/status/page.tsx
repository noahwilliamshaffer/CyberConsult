'use client'

import { useEffect, useState } from 'react'
import { useSupabase } from '@/app/providers'

export default function StatusPage() {
  const [status, setStatus] = useState({
    supabaseUrl: '',
    hasAnonKey: false,
    connectionStatus: 'checking...',
    error: null as string | null
  })
  const { supabase } = useSupabase()

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // Check environment variables
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'NOT SET'
        const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        
        // Test Supabase connection
        const { data, error } = await supabase.auth.getSession()
        
        setStatus({
          supabaseUrl,
          hasAnonKey,
          connectionStatus: error ? 'error' : 'connected',
          error: error?.message || null
        })
      } catch (err: any) {
        setStatus(prev => ({
          ...prev,
          connectionStatus: 'error',
          error: err.message
        }))
      }
    }

    checkStatus()
  }, [supabase])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
          
          <div className="space-y-6">
            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-white mb-3">Environment Variables</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Supabase URL:</span>
                  <span className={status.supabaseUrl.includes('placeholder') ? 'text-red-400' : 'text-green-400'}>
                    {status.supabaseUrl}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Has Anon Key:</span>
                  <span className={status.hasAnonKey ? 'text-green-400' : 'text-red-400'}>
                    {status.hasAnonKey ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-white mb-3">Supabase Connection</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Status:</span>
                  <span className={
                    status.connectionStatus === 'connected' ? 'text-green-400' :
                    status.connectionStatus === 'error' ? 'text-red-400' : 'text-yellow-400'
                  }>
                    {status.connectionStatus}
                  </span>
                </div>
                {status.error && (
                  <div className="mt-2">
                    <span className="text-slate-300">Error:</span>
                    <div className="text-red-400 text-xs mt-1 p-2 bg-red-900/20 rounded">
                      {status.error}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-slate-700/50 rounded-lg p-4">
              <h3 className="text-xl font-semibold text-white mb-3">Debug Information</h3>
              <div className="text-xs text-slate-400 space-y-1">
                <div>Node Env: {process.env.NODE_ENV}</div>
                <div>Timestamp: {new Date().toISOString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 