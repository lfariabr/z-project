'use client'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 text-gray-100">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-3 text-base text-gray-400">
          No shortcuts. No excuses. Just clear terms for those ready to commit to the movement.
        </p>
      </header>

      {/* Intro */}
      <section className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur mb-8">
        <p className="text-base leading-relaxed text-gray-300">
          By using Zero Dopamine Movement, you're agreeing to these terms. We keep it simple because{" "}
          <span className="font-semibold text-white">
            discipline doesn't need complicated rules
          </span>
          . Read them. Understand them. Follow them.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          Last updated: January 2025
        </p>
      </section>

      {/* Acceptance */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          1. Acceptance of Terms
        </h2>
        <p className="mt-3 text-base text-gray-300">
          By accessing our website, subscribing to our emails, or engaging with our content, you accept these terms completely. 
          No partial commitment here - it's all or nothing, just like everything else worth doing.
        </p>
        <p className="mt-3 text-base text-gray-400">
          If you don't agree, close this tab and go back to your dopamine traps. We're not for everyone.
        </p>
      </section>

      {/* Service Description */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          2. What We Provide
        </h2>
        <div className="mt-4 space-y-3 text-base text-gray-300">
          <p>
            <span className="font-semibold text-white">Weekly Email:</span> One focused message per week. 
            No spam, no upsells, no dopamine manipulation tactics.
          </p>
          <p>
            <span className="font-semibold text-white">Educational Content:</span> Information about dopamine 
            regulation, discipline building, and mental toughness.
          </p>
          <p>
            <span className="font-semibold text-white">Community Access:</span> Connection with others who've 
            chosen the harder path.
          </p>
        </div>
        <div className="mt-4 p-4 rounded-lg border border-red-500/30 bg-red-500/10">
          <p className="text-sm text-red-300">
            <strong>What we DON'T provide:</strong> Quick fixes, magic solutions, or participation trophies. 
            This is about doing the work, not feeling good about thinking about doing the work.
          </p>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          3. Your Responsibilities
        </h2>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white mb-3">Account & Information</h3>
          <ul className="space-y-2 text-base text-gray-300 list-disc list-inside">
            <li>Provide accurate email information when subscribing</li>
            <li>Keep your login credentials secure (if applicable)</li>
            <li>Notify us of any unauthorized access</li>
            <li>Use the service for personal development, not commercial exploitation</li>
          </ul>
          
          <h3 className="text-lg font-semibold text-white mb-3 mt-6">Conduct Standards</h3>
          <ul className="space-y-2 text-base text-gray-300 list-disc list-inside">
            <li>No harassment, hate speech, or toxic behavior in community spaces</li>
            <li>Respect others' journeys - everyone starts somewhere</li>
            <li>Don't share or redistribute our content without permission</li>
            <li>Report abuse or violations when you see them</li>
          </ul>
        </div>
      </section>

      {/* Privacy & Data */}
      <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          4. Privacy & Data Usage
        </h2>
        <div className="mt-4 space-y-3 text-base text-gray-300">
          <p>
            <span className="font-semibold text-white">Email Collection:</span> We collect your email to send 
            weekly content. That's it. No tracking pixels, no behavioral analysis, no selling your data.
          </p>
          <p>
            <span className="font-semibold text-white">Analytics:</span> Basic website analytics to understand 
            traffic and improve user experience. Nothing invasive.
          </p>
          <p>
            <span className="font-semibold text-white">Third Parties:</span> We don't share your information 
            with advertisers, data brokers, or anyone trying to manipulate your attention.
          </p>
          <p className="text-sm text-gray-400 italic">
            Unlike most of the internet, we're not trying to hack your brain for profit.
          </p>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          5. Content & Intellectual Property
        </h2>
        <div className="mt-4 space-y-3 text-base text-gray-300">
          <p>
            All content on this platform - emails, articles, design, code - belongs to Zero Dopamine Movement 
            unless otherwise stated. You can read it, learn from it, apply it to your life.
          </p>
          <p>
            <span className="font-semibold text-white">What you CAN do:</span> Share quotes with attribution, 
            discuss concepts with friends, apply principles to your own discipline practice.
          </p>
          <p>
            <span className="font-semibold text-white">What you CAN'T do:</span> Copy our content for your own 
            platform, sell our materials, or claim our work as your own.
          </p>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          6. Disclaimers & Limitations
        </h2>
        <div className="mt-4 p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10">
          <h3 className="text-lg font-semibold text-yellow-300 mb-3">Medical & Health Disclaimer</h3>
          <p className="text-sm text-yellow-200">
            Our content is educational, not medical advice. If you have mental health concerns, eating disorders, 
            or other medical conditions, consult qualified professionals. We promote discipline, not dangerous extremes.
          </p>
        </div>
        
        <div className="mt-4 space-y-3 text-base text-gray-300">
          <p>
            <span className="font-semibold text-white">No Guarantees:</span> We can't guarantee specific results. 
            Success depends on your effort, consistency, and circumstances. We provide tools and motivation - 
            you provide the work.
          </p>
          <p>
            <span className="font-semibold text-white">Service Availability:</span> We aim for reliable service 
            but can't guarantee 100% uptime. Technical issues happen. We'll fix them as quickly as possible.
          </p>
          <p>
            <span className="font-semibold text-white">Limitation of Liability:</span> We're not liable for 
            indirect damages, lost opportunities, or consequences of your actions based on our content.
          </p>
        </div>
      </section>

      {/* Termination */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          7. Account Termination
        </h2>
        <div className="mt-4 space-y-3 text-base text-gray-300">
          <p>
            <span className="font-semibold text-white">Your Rights:</span> Unsubscribe anytime. Delete your 
            account anytime. No guilt trips, no "are you sure?" manipulation.
          </p>
          <p>
            <span className="font-semibold text-white">Our Rights:</span> We can terminate accounts for violations 
            of these terms, abusive behavior, or illegal activity. We'll be fair but firm.
          </p>
          <p>
            <span className="font-semibold text-white">Data After Termination:</span> We'll delete your personal 
            data within 30 days of account closure, except what's required by law to retain.
          </p>
        </div>
      </section>

      {/* Changes to Terms */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          8. Changes to These Terms
        </h2>
        <p className="mt-3 text-base text-gray-300">
          We may update these terms as we grow and improve. Major changes will be communicated via email. 
          Minor updates will be posted here with updated dates.
        </p>
        <p className="mt-3 text-base text-gray-400">
          Continued use after changes means acceptance. If you disagree with updates, you're free to leave.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          9. Legal Jurisdiction
        </h2>
        <p className="mt-3 text-base text-gray-300">
          These terms are governed by the laws of [Your Jurisdiction]. Disputes will be resolved through 
          binding arbitration or local courts, depending on the nature and scale of the issue.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <h2 className="text-xl font-bold text-white uppercase tracking-wide">
          10. Questions & Contact
        </h2>
        <p className="mt-3 text-base text-gray-300">
          Have questions about these terms? Need clarification? Contact us directly instead of assuming.
        </p>
        <p className="mt-3 text-base text-gray-400">
          Email: luis@zerodopamine.com<br />
          Response time: 48-72 hours (we're building discipline, not running a 24/7 support circus)
        </p>
      </section>

      {/* Closing Quote */}
      <section className="mt-12">
        <blockquote className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 text-base italic text-gray-300">
          "The cave you fear to enter holds the treasure you seek. These terms aren't obstacles - they're the foundation for building something real."
          <footer className="mt-3 text-sm not-italic font-medium text-gray-500">
            — Zero Dopamine Movement
          </footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="mt-10">
        <p className="text-base text-gray-400 text-center">
          Ready to commit to the harder path?
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/" passHref>
            <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white">
              Join the Movement
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}