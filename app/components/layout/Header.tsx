'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollPosition } from '@/app/lib/hooks';
import { cn } from '@/app/lib/utils';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 100;

  const navLinks = [
    { href: '#home', label: 'Home.' },
    { href: '#about', label: 'About us.' },
    { href: '#roadmap', label: 'Roadmap.' },
    { href: '#tech', label: 'Tech.' },
    { href: '#blog', label: 'Blog.' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[500] transition-all duration-300',
          'border-b py-2',
          isScrolled
            ? 'bg-gradient-to-r from-[rgba(14,14,14,0.8)] via-[rgba(14,14,14,0.9)] to-[rgba(14,14,14,0.98)] backdrop-blur-[25px] border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.2)]'
            : 'bg-gradient-to-r from-[rgba(14,14,14,0.6)] via-[rgba(14,14,14,0.8)] to-[rgba(14,14,14,0.95)] backdrop-blur-[20px] border-white/5'
        )}
      >
        <div className="container mx-auto px-10">
          <div className="flex items-center justify-between relative">
            {/* Left: Menu Button (Mobile) */}
            <button
              className="lg:hidden border border-white/50 px-2 py-1 text-xs uppercase tracking-wide text-white hover:bg-white hover:text-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="flex items-center gap-1">
                <div className="flex flex-col gap-[2px]">
                  <span className="block w-2 h-[1px] bg-white" />
                </div>
                <span>MENU</span>
              </div>
            </button>

            {/* Center: Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <Link href="/" className="text-xl font-bold tracking-tight text-white">
                OFFLINE
              </Link>
            </div>

            {/* Desktop Navigation - Collapsible */}
            <div
              className={cn(
                'hidden lg:grid justify-items-end transition-all duration-400 group relative ml-auto',
                isScrolled && 'bg-white/5 rounded'
              )}
            >
              <div
                className={cn(
                  'flex items-center gap-7 px-3 py-2 transition-all duration-400 overflow-hidden relative z-10',
                  isScrolled ? 'max-w-[4rem] group-hover:max-w-[45rem]' : 'max-w-[45rem]'
              )}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                    className={cn(
                      'text-white/70 text-sm tracking-tight hover:text-white transition-all duration-400 whitespace-nowrap',
                      isScrolled && 'opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0'
                    )}
                >
                  {link.label}
                </Link>
              ))}
              </div>

              {/* Toggle Lines (visible when scrolled) */}
              {isScrolled && (
                <div className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-400 z-0">
                  <div className="flex flex-col gap-[3px] items-end">
                    <span className="block w-6 h-[1px] bg-white origin-right transition-transform duration-400" />
                    <span className="block w-6 h-[1px] bg-white origin-right transition-transform duration-400" />
                    <span className="block w-3 h-[1px] bg-white origin-right transition-transform duration-400" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}

