'use client';

import { Timer, Menu, X, Zap, Target, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useCountdown } from '@/lib/countdown';
import { useState, useEffect } from 'react';

export function ZeroDopamineHeader({ className }: { className?: string }) {
  const { formatted } = useCountdown();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header backdrop
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on link
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { href: '/', label: 'Home', icon: Zap },
    { href: '/blog', label: 'Blog', icon: BookOpen },
    { href: '/about', label: 'About', icon: Target },
    // { href: '/dashboard', label: 'Dashboard', icon: Target },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'backdrop-blur-xl bg-black/90 border-b border-red-500/20 shadow-lg shadow-red-500/5' 
          : 'backdrop-blur-sm bg-black/80 border-b border-white/10',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Logo Section - Mobile First */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-red-500 group-hover:text-red-400 transition-colors" />
              <div className="absolute inset-0 bg-red-500/20 blur-sm group-hover:bg-red-400/30 transition-all" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-light tracking-wider text-white group-hover:text-red-100 transition-colors">
                zero dopamine
              </h1>
              <span className="text-xs text-red-400/80 font-mono tracking-wide hidden sm:block">
                wake up call
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center space-x-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                <Icon className="h-4 w-4 text-red-500/70 group-hover:text-red-400 transition-colors" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Timer & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            
            {/* Countdown Timer - Enhanced */}
            <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-zinc-900 to-zinc-800 px-3 py-2 rounded-full shadow-lg border border-red-500/20 hover:border-red-500/40 transition-all">
              <Timer className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="tabular-nums font-mono text-white font-medium tracking-wider">
                {formatted}
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-white/10 hover:border-red-500/40 transition-all"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen 
              ? 'max-h-64 opacity-100 pb-4' 
              : 'max-h-0 opacity-0'
          )}
        >
          <nav className="pt-4 space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-zinc-900/50 border border-white/5 hover:border-red-500/30 hover:bg-zinc-800/50 transition-all group"
              >
                <Icon className="h-5 w-5 text-red-500/70 group-hover:text-red-400 transition-colors" />
                <span className="text-white/90 group-hover:text-white font-medium">
                  {label}
                </span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="px-4 py-2 text-center">
                <p className="text-xs text-red-400/80 font-mono tracking-wide">
                  "Stay hard. No excuses."
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
