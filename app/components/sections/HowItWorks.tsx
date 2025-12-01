import Image from 'next/image';

export default function HowItWorks() {
  const socialIcons = [
    { src: '/images/social/discord.png', alt: 'Discord', color: '#5865F2' },
    { src: '/images/social/reddit.png', alt: 'Reddit', color: '#FF4500' },
    { src: '/images/social/X.png', alt: 'X', color: '#000000' },
    { src: '/images/social/mastadon.png', alt: 'Mastodon', color: '#6364FF' },
    { src: '/images/social/youtube.png', alt: 'YouTube', color: '#FF0000' },
    { src: '/images/social/telegram.png', alt: 'Telegram', color: '#0088CC' },
  ];

  const steps = [
    { 
      number: 1, 
      title: 'Plug In', 
      action: 'Connect via USB to any computer',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      )
    },
    { 
      number: 2, 
      title: 'Launch', 
      action: 'Runs instantly, no install needed',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="m17 5-5-3-5 3"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      )
    },
    { 
      number: 3, 
      title: 'Search', 
      action: 'Ask anything, completely offline',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-[rgba(0,0,0,0.95)] to-[rgba(10,10,15,0.95)] py-12"
    >
      <div className="container max-w-[1200px] mx-auto px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-6 mb-12 flex-wrap">
          {socialIcons.map((icon) => (
            <div
              key={icon.alt}
              className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Container Label & Title */}
        <div className="text-center mb-12">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-[0.1em] mb-2">
            Simple Setup
          </p>
          <h2 className="text-white text-3xl font-bold uppercase tracking-tight">
            How to Use
          </h2>
        </div>

        {/* Three Steps */}
        <div className="flex justify-center items-stretch gap-6 flex-wrap max-w-[1000px] mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center gap-4 px-8 py-8 bg-white/[0.03] rounded-xl border border-white/10 flex-1 min-w-[250px] hover:bg-white/[0.06] transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <div>
                <div className="text-white text-lg font-bold mb-2">{step.title}</div>
                <div className="text-white/60 text-sm">{step.action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

