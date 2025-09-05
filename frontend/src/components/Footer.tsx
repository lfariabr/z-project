'use client';

import Link from 'next/link';
import { Zap, Mail, Github, Twitter, Instagram, Youtube, ExternalLink, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Footer({ center = false }: { center?: boolean }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      href: 'https://github.com/lfariabr/z-project', 
      icon: Github, 
      label: 'GitHub',
      external: true 
    },
    { 
      href: 'https://www.instagram.com/zerodopamine_motivation/', 
      icon: Instagram, 
      label: 'Instagram',
      external: true 
    },
    { 
      href: 'https://www.youtube.com/@Zerodopaminemotivation', 
      icon: Youtube, 
      label: 'YouTube',
      external: true 
    },
    // { 
    //   href: 'https://twitter.com/zerodopamine', 
    //   icon: Twitter, 
    //   label: 'Twitter',
    //   external: true 
    // },
  ];

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    // { href: '/dashboard', label: 'Dashboard' },
  ];

  // Additional useful links that align with the Zero Dopamine mission
  const resourceLinks = [
    // { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    // { href: '/contact', label: 'Contact' },
    // { href: '/faq', label: 'FAQ' },
  ];

  if (center) {
    return (
      <footer className="mt-16 py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
            {footerLinks.map((link, index) => (
              <div key={link.href} className="flex items-center">
                <Link 
                  href={link.href} 
                  className="hover:text-red-400 transition-colors"
                >
                  {link.label}
                </Link>
                {index < footerLinks.length - 1 && (
                  <span className="mx-3 text-red-500/50">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-20 border-t border-red-500/20 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Section - Enhanced */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Zap className="h-8 w-8 text-red-500" />
                <div className="absolute inset-0 bg-red-500/20 blur-sm" />
              </div>
              <div>
                <h3 className="text-xl font-light tracking-wider text-white">
                  zero dopamine
                </h3>
                <p className="text-sm text-red-400/80 font-mono tracking-wide">
                  wake up call
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              Reclaim focus. Reset your baseline. Earn your dopamine through effort, not shortcuts.
            </p>

            {/* Call to Action */}
            <Link 
              href="/about" 
              className="inline-flex items-center space-x-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors group"
            >
              <span>Learn about the movement</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Future Newsletter Signup - Commented for reuse */}
            {/* <div className="space-y-3 mt-8">
              <h4 className="text-white font-medium text-sm tracking-wide">
                Daily Motivation
              </h4>
              <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-zinc-900 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/25 transition-all text-sm"
                />
                <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Unfiltered motivation. Unsubscribe anytime.
              </p>
            </div> */}
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <h5 className="text-white/70 font-medium text-xs tracking-wide mb-3">
                Legal
              </h5>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social & Connect */}
          <div>
            <h4 className="text-white font-medium text-sm tracking-wide mb-4">
              Connect
            </h4>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-red-500/40 rounded-lg transition-all group"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                  </a>
                ))}
              </div>
              
              {/* Motivational Quote */}
              <div className="p-4 bg-zinc-900/50 border border-red-500/20 rounded-lg">
                <blockquote className="text-xs text-red-400/90 font-mono italic text-center leading-relaxed">
                  "Everybody comes to a point in their life when they want to quit, 
                  but it's what you do at that moment that determines who you are."
                </blockquote>
                <cite className="block text-xs text-gray-500 text-center mt-2">
                  — David Goggins
                </cite>
              </div>

              {/* Future Dashboard Link - Commented for reuse */}
              {/* <div className="mt-4">
                <Link 
                  href="/dashboard" 
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-red-600/10 hover:bg-red-600/20 border border-red-500/30 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 transition-all group"
                >
                  <Target className="h-4 w-4" />
                  <span>Dashboard</span>
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span> {currentYear} Zero Dopamine</span>
              <span className="hidden sm:inline text-red-500/50">•</span>
              <span className="text-gray-600">Built for discipline</span>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Built with</span>
              <Zap className="h-3 w-3 text-red-500" />
              <span>and discipline</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
