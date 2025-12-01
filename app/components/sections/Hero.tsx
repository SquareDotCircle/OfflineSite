'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const filterItems = [
    { href: '#how-it-works', label: 'How it Works' },
    { href: '#no-connectivity', label: 'No Connectivity' },
    { href: '#no-surveillance', label: 'No Surveillance' },
    { href: '#build-it', label: 'Build it for you' },
  ];

  return (
    <section className="min-h-screen relative pt-24 md:pt-32 pb-16 px-4 md:px-10">
      <div className="w-full relative z-0">
        {/* Title Section */}
        <div className="flex items-start gap-8 md:gap-20 mb-8 max-w-[80%] mx-auto md:ml-4">
          <h1 className="text-3xl md:text-[2.5rem] font-medium tracking-[-2px] uppercase relative mb-5 w-max leading-[100%]">
            OFFLINE
            <span className="absolute -top-2 md:-top-4 -right-8 md:-right-14 text-xl md:text-[1.8rem] text-gray-500 tracking-tight">
              (.IO)
            </span>
          </h1>
        </div>

        {/* Filter List */}
        <ul className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 scrollbar-hide max-w-[80%] mx-auto md:ml-4">
          {filterItems.map((item, index) => (
            <li
              key={item.href}
              className={`text-gray-500 text-xs md:text-sm font-medium border border-gray-500 px-2 md:px-3 py-2 whitespace-nowrap cursor-pointer transition-all hover:text-white hover:border-white/80 hover:bg-white/5 ${
                index === 0 ? 'text-white border-white' : ''
              }`}
            >
              <a href={item.href} className="block">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Main Tagline */}
        <div className="w-full text-center mb-48 md:mb-96 px-4">
          <h2 className="text-white text-xl md:text-[2.2rem] font-bold leading-[1.2] uppercase tracking-[-0.03em] inline-block mb-6">
            Backing up humanity&apos;s knowledge on a hard drive
          </h2>
          
          {/* Supporting text */}
          <p className="text-white/80 text-base md:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Plug it in to any computer - ask and search anything about anything without being connected to internet - 100g of complete self reliance
          </p>
        </div>

        {/* Purchase Options */}
        <div className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Option 1: Software Only */}
          <div className="group relative p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col backdrop-blur-sm">
            <div className="mb-6 relative w-full h-48 overflow-hidden bg-transparent">
              <Image
                src="/images/offline_software_2.png"
                alt="Offline Software Interface"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Software Only</h3>
              <p className="text-white/60 text-xs font-mono mb-4">
                WINDOWS / MACOS / LINUX / ANDROID
              </p>
            </div>
            <div className="mb-6 flex-grow border-t border-white/10 pt-4">
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Tens of millions of articles, journals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Global maps with multiple layers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Proprietary intuitive application
                </li>
              </ul>
            </div>
            
            {/* Minimal requirements/warning */}
            <div className="mb-6 p-4 rounded-sm bg-orange-500/10 border border-orange-500/20 text-xs">
              <div className="flex items-center gap-2 font-semibold mb-2 text-orange-200">
                <span className="text-lg">⚠️</span> Important Requirement
              </div>
              <p className="text-white/70 mb-3 leading-relaxed">
                This is a massive offline database. Please check your device has enough free space before purchasing.
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-white/60">
                <li><span className="text-white/90 font-medium">~1TB</span> free storage required</li>
                <li>Download time: <span className="text-white/90 font-medium">10-24 hours</span> (avg)</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="flex items-baseline gap-3 mb-4 font-mono">
                <div className="text-3xl text-white">$99</div>
                <div className="text-white/40 text-sm line-through">$149</div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                NO MONTHLY FEES. OWN IT FOREVER.
              </div>
              <Link href="/software" className="block w-full">
                <button className="w-full py-4 px-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-mono text-xs uppercase tracking-widest transition-colors">
                  Download Installer
                </button>
              </Link>
              <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
                <div className="w-1 h-1 bg-green-500"></div>
                Instant Delivery
              </div>
            </div>
          </div>

          {/* Option 2: EMP Hardened Drive */}
          <div className="group relative p-8 bg-gradient-to-b from-primary/10 to-transparent border border-primary/50 hover:from-primary/20 transition-all duration-300 flex flex-col backdrop-blur-sm shadow-[0_0_30px_rgba(255,71,29,0.1)]">
            <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-black text-[10px] font-mono uppercase tracking-widest font-bold">
              Best Seller
            </div>
            
            <div className="mb-6 relative w-full h-48 overflow-hidden bg-transparent">
              <Image
                src="/images/offline_hardware_design.png"
                alt="Offline Hardware Design"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">EMP Hardened Drive</h3>
              <p className="text-white/60 text-xs font-mono mb-4">HARDWARE + SOFTWARE BUNDLE</p>
            </div>
            <div className="mb-8 flex-grow border-t border-white/10 pt-4">
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Military-grade EMP protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Pre-installed & configured
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Plug & Play (USB-C / USB-A)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-mono text-xs mt-1">[+]</span>
                  Water & shock resistant
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="flex items-baseline gap-3 mb-4 font-mono">
                <div className="text-3xl text-white">$237</div>
                <div className="text-white/40 text-sm line-through">$399</div>
              </div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mb-3">
                SAVE 40+ HOURS SETUP. PLUG & PLAY.
              </div>
              <Link href="/hardware" className="block w-full">
                <button className="w-full py-4 px-6 bg-primary text-white hover:bg-primary-hover font-mono text-xs uppercase tracking-widest transition-colors shadow-[0_0_15px_rgba(255,71,29,0.4)]">
                  Order Hardened Drive
                </button>
              </Link>
              <div className="mt-3 text-center text-[10px] uppercase tracking-widest text-white/40 font-mono">
                <span className="text-primary">///</span> 8 UNITS REMAINING (BATCH 1)
              </div>
            </div>
          </div>
        </div>

        {/* Trust/Risk Reversal - Subtle Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-24 text-xs md:text-sm text-white/40">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Military-grade Encryption Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M12 12c-2-2.97-4-3.5-6-3.5S2 9.03 2 12s2 3.5 6 3.5 4-.53 6-3.5z"/>
              <path d="M12 12c2 2.97 4 3.5 6 3.5s4-.53 4-3.5-2-3.5-6-3.5-4 .53-6 3.5z"/>
            </svg>
            <span>Lifetime Hardware Warranty</span>
          </div>
        </div>

        {/* Product Video Window (scrolls with content) */}
        <div className="w-[90vw] md:w-[80vw] max-w-[1000px] aspect-video rounded-sm overflow-hidden shadow-2xl border border-white/20 mx-auto mb-12 md:mb-16">
          <video
            id="product-video"
            className="w-full h-full object-contain bg-black"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="absolute top-0 left-0 w-full h-full bg-[#2a4a3a]" />
          </video>
        </div>
      </div>
    </section>
  );
}
