'use client'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 text-gray-100">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Zero Dopamine Movement
        </h1>
        <p className="mt-3 text-base text-gray-400">
          Reclaim focus. Reset your baseline. Earn your dopamine through effort, not shortcuts.
        </p>
      </header>

      {/* Intro */}
      <section className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <p className="text-base leading-relaxed text-gray-300">
          The Zero Dopamine Movement is about{" "}
          <span className="font-semibold text-white">
            cutting out (or severely restricting) cheap dopamine hits
          </span>{" "}
          that hijack your discipline, drain your focus, and keep you trapped in the loop of instant gratification.
        </p>
      </section>

      {/* Project Purpose */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-white">
          Why this project exists
        </h2>
        <p className="mt-3 text-base text-gray-300">
          This site is a simple hub for subscribers who receive one weekly email:
          pure motivation, free from the noise of modern feeds. No edits, no
          background music, no dopamine traps. Just raw, actionable wisdom
          designed to sharpen your mindset and strengthen discipline.
        </p>
        <p className="mt-4 text-base text-gray-300">
          It’s not about hype—it’s about truth. A reminder each week to stay
          focused, to do the work, and to build resilience when it matters most.
        </p>
      </section>

      {/* Closing */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-white">
          The Mission
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Deliver clarity in a world overloaded with noise, and help you train the discipline to finish what you start.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/" passHref>
            <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white">
              Subscribe to our Initiative
            </Button>
          </Link>
        </div>
      </section>

      {/* The Traps */}
      <section className="mt-10">
        <h2 className="text-lg font-bold text-white uppercase tracking-wide">
          The Traps
        </h2>
        <ul className="mt-4 list-disc list-inside space-y-1 text-base text-gray-400">
          <li>Social media scrolling</li>
          <li>Junk food &amp; sugar</li>
          <li>Porn &amp; excessive entertainment</li>
          <li>Gaming / streaming binges</li>
          <li>Mindless phone use</li>
        </ul>
        <p className="mt-5 text-base text-gray-400">
          Constant dopamine spikes rewire your reward system. The result: you crave quick pleasure and avoid hard, meaningful work - whether it’s studying, building, running 42km, or grinding through LeetCode.
        </p>
      </section>

      {/* Science */}
      <section className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-lg font-bold text-white uppercase tracking-wide">
          The Science
        </h2>
        <ul className="mt-4 space-y-2 text-base text-gray-400">
          <li>
            - Dopamine ≠ pleasure. It’s motivation-spiking on{" "}
            <em>anticipation</em>, not reward itself.
          </li>
          <li>
            - Overstimulation leads to downregulation - you need more and more just to feel “normal.”
          </li>
          <li>
            - Cutting cheap hits resets your baseline, making study, training, and coding feel rewarding again.
          </li>
        </ul>
      </section>

      {/* Practice */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-white uppercase tracking-wide">
          Get Started Now
        </h2>
        <ol className="mt-4 list-decimal list-inside space-y-3 text-base text-gray-400">
          <li>
            <span className="font-semibold text-white">Digital Detox</span>: limit or uninstall social media, keep internet essential.
          </li>
          <li>
            <span className="font-semibold text-white">Clean Inputs</span>: no junk food, no porn, no instant snacks.
          </li>
          <li>
            <span className="font-semibold text-white">Monk Mode</span>: strict sleep, exercise, deep work, reading, meditation.
          </li>
          <li>
            <span className="font-semibold text-white">Boredom Training</span>: practice sitting with stillness to reset comfort levels.
          </li>
        </ol>
      </section>

      {/* Quote */}
      <section className="mt-12">
        <blockquote className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-base italic text-gray-300">
          “Everybody comes to a point in their life when they want to quit, but it's what you do at that moment that determines who you are.”
          <footer className="mt-3 text-sm not-italic font-medium text-gray-500">
            — David Goggins
          </footer>
        </blockquote>
      </section>

      {/* Outro */}
      <section className="mt-10">
        <p className="text-base text-gray-400">
          This isn’t anti-fun, it’s pro-focus<br />
          <span className="font-semibold text-white">
            Earn your dopamine through effort, not shortcuts.
          </span>
        </p>
        <div className="mt-6 flex justify-center">
        <Link href="/" passHref>
          <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white">
            Join the Movement
          </Button>
        </Link>
      </div>
      </section>
      <Footer center />
    </div>
  )
}