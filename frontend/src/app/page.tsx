'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import CountdownCircle from "@/components/CountdownCircle";
import { graphqlRequest } from '@/lib/graphql'

const SEND_QUOTE_MUTATION = `#graphql
  mutation SendQuote($email: String!, $explicit: Boolean!) {
    sendQuote(email: $email, explicit: $explicit)
  }
`;

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [explicitMode, setExplicitMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleSubmit = async () => {
    setMessage(null)
    if (!email) {
      setMessage('Enter a valid email first.')
      return
    }
    try {
      setLoading(true)
      const data = await graphqlRequest<{ sendQuote: boolean }>(SEND_QUOTE_MUTATION, {
        email,
        explicit: explicitMode,
      })
      if (data.sendQuote) {
        setMessage('Sent. Check your inbox in the next minute.')
      } else {
        setMessage('We couldn’t send it. Try again in a minute.')
      }
    } catch (err: any) {
      setMessage(err?.message ?? 'We couldn’t send it. Try again in a minute.')
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
        <span className="text-gray-300">Regret lasts a lifetime.</span>
        <span className="text-gray-500 italic"> Pain is just a moment.</span>
        </p>
      </div>

      {/* TONE TOGGLE */}
      <div className="flex items-center gap-4 mb-6">
        <Switch
          checked={explicitMode}
          onCheckedChange={() => setExplicitMode(!explicitMode)}
          id="explicit-mode"
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
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending your wake‑up call…' : 'WAKE ME UP!'}
        </Button>
      </div>
      <p className="w-full max-w-md text-xs text-gray-400 mt-2 text-left">No spam. 1 click to unsubscribe.</p>

      {message && (
        <p className="mt-4 text-sm text-gray-300">{message}</p>
      )}
    </main>
  )
}
