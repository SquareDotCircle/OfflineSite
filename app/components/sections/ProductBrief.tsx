import Image from 'next/image';
import Link from 'next/link';

export default function ProductBrief() {
  return (
    <section className="mt-[100vh] bg-black text-white relative z-10 hidden md:block">
      <div className="demo-section py-10 px-8 relative">
        <div className="container max-w-full mx-auto">
          <div className="max-w-[80%] ml-4">
            <div className="mb-6">
              <h2 className="text-[2.5rem] font-medium tracking-[-2px] uppercase mb-4 leading-[100%]">
                OFFLINE INTELLIGENCE
              </h2>
            </div>
            <p className="text-white/70 text-base font-light tracking-wide lowercase max-w-[32rem] mt-8 mb-6">
              complete access to the world&apos;s knowledge without internet dependency.
            </p>

            <ul className="flex flex-wrap items-center gap-2 mb-6">
              <li className="text-white text-sm font-medium border border-white px-3 py-2 whitespace-nowrap">
                ACCESS
              </li>
              <li className="text-gray-500 text-sm font-medium border border-gray-500 px-3 py-2 whitespace-nowrap cursor-pointer hover:text-white hover:border-white/80 transition-all">
                NAVIGATION
              </li>
              <li className="text-gray-500 text-sm font-medium border border-gray-500 px-3 py-2 whitespace-nowrap cursor-pointer hover:text-white hover:border-white/80 transition-all">
                PRIVACY
              </li>
              <li className="text-gray-500 text-sm font-medium border border-gray-500 px-3 py-2 whitespace-nowrap cursor-pointer hover:text-white hover:border-white/80 transition-all">
                AVAILABLE
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Access Case */}
              <div className="border-t border-white/20 pt-4 relative">
                <div className="text-white text-base font-semibold uppercase tracking-tight mb-2">
                  INSTANT ACCESS
                </div>
                <div className="text-[#dbdbdb] text-sm font-normal leading-[1.4] tracking-tight relative z-20">
                  Search millions of articles and datasets offline
                </div>
                <div className="absolute bottom-2 right-2 flex gap-2 items-center opacity-15 z-10">
                  <div className="h-[18px] w-auto">
                    <Image
                      src="https://info.arxiv.org/assets/arxiv-logo-one-color-white.svg"
                      alt="arXiv"
                      width={60}
                      height={18}
                      className="h-full w-auto brightness-[1.2]"
                    />
                  </div>
                  <div className="h-[18px] w-auto">
                    <Image
                      src="/images/Wikipedia-logo.png"
                      alt="Wikipedia"
                      width={60}
                      height={18}
                      className="h-full w-auto brightness-[1.2] contrast-[1.1]"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Case */}
              <div className="border-t border-white/20 pt-4 relative overflow-hidden bg-white/[0.02] rounded px-4 pb-4">
                <div className="text-white text-base font-semibold uppercase tracking-tight mb-2 relative z-20">
                  GLOBAL NAVIGATION
                </div>
                <div className="text-[#dbdbdb] text-sm font-normal leading-[1.4] tracking-tight relative z-20">
                  Complete offline maps with turn-by-turn directions
                </div>
              </div>

              {/* Privacy Case */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-white text-base font-semibold uppercase tracking-tight mb-2">
                  COMPLETE PRIVACY
                </div>
                <div className="text-[#dbdbdb] text-sm font-normal leading-[1.4] tracking-tight">
                  No tracking, logging, or data collection
                </div>
              </div>

              {/* Available Case */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-white text-base font-semibold uppercase tracking-tight mb-2">
                  ALWAYS AVAILABLE
                </div>
                <div className="text-[#dbdbdb] text-sm font-normal leading-[1.4] tracking-tight">
                  Remote locations, flights, secure environments, blackouts and conflicts
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 flex justify-between items-center">
              <div className="text-white/80">Ready to go offline?</div>
              <div>
                <Link href="#waitlist" className="text-white/80 hover:text-white transition-colors">
                  Request early access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

