'use client'

import { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import CountdownCircle from "@/components/CountdownCircle";
import { graphqlRequest } from '@/lib/graphql'
import Footer from '@/components/Footer'

const REGISTER_USER_MUTATION = `#graphql
  mutation RegisterUser($input: RegisterInput!) {
    registerUser(input: $input) {
      _id
      email
      name
      isExplicit
      subscribed
      createdAt
    }
  }
`;

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [explicitMode, setExplicitMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [registered, setRegistered] = useState(false)
  const [pulse, setPulse] = useState(false)
  const emailRef = useRef<HTMLInputElement | null>(null)

  // Auto-focus email on mount (and when unregistered)
  useEffect(() => {
    if (!registered) {
      emailRef.current?.focus()
    }
  }, [registered])

  // Briefly pulse the success badge when registered flips to true
  useEffect(() => {
    if (registered) {
      setPulse(true)
      const t = setTimeout(() => setPulse(false), 900)
      return () => clearTimeout(t)
    }
  }, [registered])

  const handleSubmit = async () => {
    setMessage(null)
    if (!email) {
      setMessage('Enter a valid email first.')
      return
    }
    try {
      setLoading(true)
      const data = await graphqlRequest<{ registerUser: { _id: string } }>(REGISTER_USER_MUTATION, {
        input: { email, isExplicit: explicitMode }
      })
      if (data?.registerUser?._id) {
        setMessage('You’re in. We’ll nudge you soon.')
        setRegistered(true)
        // Light haptic feedback on success (supported on some devices)
        if (typeof window !== 'undefined' && 'vibrate' in navigator) {
          try { (navigator as any).vibrate?.(20) } catch {}
        }
      } else {
        setMessage('Could not save your preference. Try again in a minute.')
      }
    } catch (err: any) {
      setMessage(err?.message ?? 'Could not save your preference. Try again in a minute.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="w-full flex-1 flex flex-col items-center justify-center px-4 py-12">
      {/* HEADLINE */}
      <div className="max-w-md text-center space-y-4 mb-8">
        <div className="flex justify-center items-center w-full mt-4 mb-6">
          <CountdownCircle />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight leading-tight">
          Zero Dopamine. <br />Maximum Output.
        </h1>
        <p className="text-gray-300">
        Every second, a voice whispers: <span className="text-red-500 font-bold">quit</span>.<br />
        But in that one second — <span className="text-white font-bold">you choose</span>.<br /><br />
        <span className="text-gray-300">Regret lasts a lifetime.</span><br />
        <span className="text-gray-500 italic"> Pain is just a moment.</span>
        </p>
        {registered && (
          <div className={`mt-2 inline-flex items-center gap-2 rounded-md bg-green-600/10 text-green-400 px-3 py-1 text-sm ${pulse ? 'animate-pulse' : ''}`}>
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            Registered. You’ll get pushes when it matters.
          </div>
        )}
      </div>

      {/* TONE TOGGLE */}
      <div className="flex items-center gap-4 mb-6">
        <Switch
          checked={explicitMode}
          onCheckedChange={() => !registered && setExplicitMode(!explicitMode)}
          id="explicit-mode"
          disabled={registered || loading}
        />
        <Label htmlFor="explicit-mode" className="text-xs">
          🔥 Unfiltered: profanity & aggressive tone. Opt in if you’re sure.
        </Label>
      </div>

      {/* EMAIL INPUT + BUTTON */}
      <div className="flex w-full max-w-md gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={registered || loading}
          ref={emailRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !loading && !registered) {
              e.preventDefault()
              handleSubmit()
            }
          }}
        />
        <Button onClick={handleSubmit} disabled={loading || registered}>
          {registered ? 'You’re in' : loading ? 'Saving…' : 'WAKE ME UP!'}
        </Button>
      </div>
      <p className="w-full max-w-md text-xs text-gray-400 mt-2 text-left">No spam. 1 click to unsubscribe.</p>

      {message && (
        <p className="mt-4 text-sm text-gray-300">{message}</p>
      )}

      {/* Tiny footer */}
      <Footer />
    </main>
  )
}
