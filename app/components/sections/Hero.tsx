'use client';

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
          <div className="group relative p-8 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex flex-col">
            <div className="mb-6 relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/offline_software_2.png"
                alt="Offline Software Interface"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Software Only</h3>
              <p className="text-white/60 text-sm mb-4">
                Windows / MacOS / Linux / Android
              </p>
            </div>
            <div className="mb-6 flex-grow">
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Tens of millions of articles, journals
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Global maps with multiple layers down to the street
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Our proprietary application to make accessing the information easy and intuitive
                </li>
              </ul>
            </div>
            
            {/* Minimal requirements/warning */}
            <div className="mb-6 p-4 rounded bg-orange-500/10 border border-orange-500/20 text-xs">
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
              <div className="text-3xl font-bold text-white mb-4">$99</div>
              <button className="w-full py-3 px-6 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
                Download Installer
              </button>
            </div>
          </div>

          {/* Option 2: EMP Hardened Drive */}
          <div className="group relative p-8 rounded-xl border border-primary/50 bg-gradient-to-b from-primary/10 to-transparent hover:from-primary/20 transition-all duration-300 flex flex-col shadow-[0_0_30px_rgba(255,71,29,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full z-10">
              Most Popular
            </div>
            
            <div className="mb-6 relative w-full h-48 rounded-lg overflow-hidden">
              <Image
                src="/images/offline_hardware_design.png"
                alt="Offline Hardware Design"
                fill
                className="object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2">Software + EMP Hardened Drive</h3>
              <p className="text-white/60 text-sm">Everything pre-installed & ready to use</p>
            </div>
            <div className="mb-8 flex-grow">
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Military-grade EMP protection
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Pre-installed & configured
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Plug & Play (USB-C / USB-A)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  Water & shock resistant
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="text-3xl font-bold text-white mb-4">$237</div>
              <button className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-lg shadow-primary/25">
                Order Hardened Drive
              </button>
            </div>
          </div>
        </div>

        {/* Product Video Window (scrolls with content) */}
        <div className="w-[90vw] md:w-[80vw] max-w-[1000px] aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20 mx-auto mb-12 md:mb-16">
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
