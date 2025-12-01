'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VideoBackground from '../components/ui/VideoBackground';
import ScrollFadeOverlay from '../components/ui/ScrollFadeOverlay';

export default function HardwarePage() {
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
              <div className="relative w-full aspect-[4/3] border border-white/20 bg-transparent">
                <Image
                  src="/images/offline_hardware_design.png"
                  alt="EMP Hardened Drive"
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-0 border border-white/20">
                <div className="p-4 text-center border-r border-white/20 bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">EMP</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">SHIELDED</div>
                </div>
                <div className="p-4 text-center border-r border-white/20 bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">USB-C</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">HIGH SPEED</div>
                </div>
                <div className="p-4 text-center bg-black">
                  <div className="text-xs font-mono font-bold text-primary mb-2">IP67</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/60 font-mono">WATERPROOF</div>
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-primary text-black text-[10px] font-mono font-bold uppercase tracking-widest mb-4">
                  MOST POPULAR
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter">EMP Hardened Drive</h1>
                <p className="text-sm font-mono text-white/60 uppercase tracking-widest">Hardware + Software Bundle</p>
              </div>

              <div className="flex items-baseline gap-4 border-b border-white/20 pb-8 font-mono">
                <span className="text-4xl text-white">$237</span>
                <span className="text-xl text-white/40 line-through">$399</span>
                <span className="ml-auto text-[10px] uppercase tracking-widest text-orange-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 animate-pulse"></span>
                  8 Left in Batch 1
                </span>
              </div>

              <div className="space-y-8">
                <p className="text-white/80 leading-relaxed text-sm">
                  The ultimate survival redundancy. A military-grade, EMP-shielded 1TB solid state drive, pre-loaded with the entire Offline Intelligence Suite. Plug & Play on any computer.
                </p>

                <div className="border border-white/20 p-4 bg-black">
                  <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                    Ready to Deploy
                  </h4>
                  <p className="text-xs font-mono text-white/60">
                    SKIP THE 20+ HOUR DOWNLOAD. PRE-CONFIGURED FOR MACOS, WINDOWS, AND LINUX.
                  </p>
                </div>

                <ul className="space-y-4 font-mono text-xs text-white/90">
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[01]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">Faraday Shielded Enclosure</strong>
                      <span className="text-white/50">Protected against electromagnetic pulses and solar flares.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[02]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">Rugged & Durable</strong>
                      <span className="text-white/50">IP67 Water/Dust resistant. Shockproof up to 2m drops.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary">[03]</span>
                    <div>
                      <strong className="text-white block uppercase tracking-wide mb-1">1TB High-Speed SSD</strong>
                      <span className="text-white/50">Ultra-fast read/write speeds for instant AI responses.</span>
                    </div>
                  </li>
                </ul>

                <button className="w-full py-4 bg-primary text-white hover:bg-primary-hover font-mono font-bold uppercase tracking-widest transition-all">
                  Add to Cart — $237
                </button>
                
                <p className="text-center text-[10px] uppercase tracking-widest text-white/40 font-mono">
                  Free Worldwide Shipping /// Lifetime Hardware Warranty
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
