'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VideoBackground from '../components/ui/VideoBackground';
import ScrollFadeOverlay from '../components/ui/ScrollFadeOverlay';

export default function SoftwarePage() {
  return (
    <>
      <VideoBackground />
      <ScrollFadeOverlay />
      <Header />

      <main className="relative min-h-screen pt-32 pb-20 px-4 md:px-8">
        <div className="container max-w-4xl mx-auto">
          {/* Breadcrumb / Back */}
          <div className="mb-8">
            <Link href="/" className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm">
              ← Back to Overview
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Product Visuals */}
            <div className="space-y-6 sticky top-32">
              <div className="relative w-full aspect-[4/3] border border-white/20 bg-black">
                <Image
                  src="/images/offline_software_2.png"
                  alt="Offline Software Interface"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="grid grid-cols-3 gap-0 border border-white/20">
                <div className="p-4 text-center border-r border-white/20 bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">AI</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">LOCAL MODEL</div>
                </div>
                <div className="p-4 text-center border-r border-white/20 bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">MAPS</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">GLOBAL DATA</div>
                </div>
                <div className="p-4 text-center bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">WIKI</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">LIBRARY</div>
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">Software Only</h1>
                <p className="text-sm font-mono text-primary uppercase tracking-widest">Universal Digital License</p>
              </div>

              <div className="flex items-baseline gap-4 border-b border-white/20 pb-8 font-mono">
                <span className="text-4xl text-white">$99</span>
                <span className="text-xl text-white/40 line-through">$149</span>
                <span className="ml-auto text-[10px] uppercase tracking-widest text-green-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 animate-pulse"></span>
                  Instant Delivery
                </span>
              </div>

              <div className="space-y-8">
                <p className="text-white/80 leading-relaxed text-sm">
                  Transform your existing hardware into a sovereign intelligence hub. Download the complete offline suite, including our proprietary local LLM, global mapping system, and the entire curated survival library.
                </p>

                <div className="border border-orange-500/30 p-4 bg-black">
                  <h4 className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                    System Requirements
                  </h4>
                  <ul className="text-xs font-mono text-white/70 space-y-1">
                    <li>REQ: ~1TB FREE SPACE</li>
                    <li>REQ: 8GB RAM MINIMUM</li>
                    <li>OS: WINDOWS / MACOS / LINUX</li>
                  </ul>
                </div>

                <ul className="space-y-4 font-mono text-xs text-white/90">
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[01]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">Full Offline LLM Agent</strong>
                      <span className="text-white/50">Ask complex questions without internet. No tracking, no logs.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[02]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">Global Navigation</strong>
                      <span className="text-white/50">Street-level maps for the entire world. GPS compatible.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[03]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">Survival Wiki & Library</strong>
                      <span className="text-white/50">Medical, engineering, and tactical guides accessible instantly.</span>
                    </div>
                  </li>
                </ul>

                <button className="w-full py-4 bg-white text-black hover:bg-white/90 font-mono font-bold uppercase tracking-widest transition-all">
                  Add to Cart — $99
                </button>
                
                <p className="text-center text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  Secure checkout via Stripe /// 30-Day Money Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
