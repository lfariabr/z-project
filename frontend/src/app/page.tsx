'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import CountdownCircle from "@/components/CountdownCircle";


export default function HomePage() {
  const [email, setEmail] = useState('')
  const [explicitMode, setExplicitMode] = useState(false)

  const handleSubmit = () => {
    if (!email) return
    // Call your GraphQL mutation or API handler here
    console.log(`Sending Goggins message to ${email} - explicit: ${explicitMode}`)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-12">
      {/* HEADLINE */}
      <div className="max-w-md text-center space-y-4 mb-8">
        <div className="flex justify-center items-center w-full mt-4 mb-6">
          <CountdownCircle />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight leading-snug">
          Every second, a voice whispers: <span className="text-red-500 font-bold">quit</span>.<br />
          But in that one second — <span className="text-white font-bold">you choose</span>.<br />
          <span className="text-gray-300">Regret lasts a lifetime.</span><br />
          <span className="text-gray-500 italic">Pain is just a moment.</span>
        </h1>
      </div>

      {/* TONE TOGGLE */}
      <div className="flex items-center gap-4 mb-6">
        <Switch
          checked={explicitMode}
          onCheckedChange={() => setExplicitMode(!explicitMode)}
          id="explicit-mode"
        />
        <Label htmlFor="explicit-mode">
          🔥 Unfiltered: Expect profanity and max intensity.
        </Label>
      </div>

      {/* EMAIL INPUT + BUTTON */}
      <div className="flex w-full max-w-md gap-2">
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSubmit}>
          WAKE ME UP
        </Button>
      </div>
    </main>
  )
}
