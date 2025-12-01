export default function NoConnectivity() {
  return (
    <section
      id="no-connectivity"
      className="relative py-48 md:py-96 px-4 md:px-8 min-h-screen md:min-h-[150vh] overflow-hidden"
      style={{
        backgroundImage: "url('/images/remote/remote_climb.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75 z-10" />

      <div className="container max-w-[1200px] mx-auto px-4 md:px-8 relative z-20">
        <div className="text-center max-w-full md:max-w-[1200px] mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-3xl md:text-[5.5rem] font-bold mb-12 md:mb-28 uppercase tracking-tight leading-tight">
            SEARCH WITHOUT CONNECTIVITY
          </h2>

          {/* Subheading */}
          <p className="text-[#dbdbdb] text-base md:text-[1.7rem] leading-[1.8] md:leading-[2.1] mb-24 md:mb-48 font-normal">
            Whatever you&apos;re searching, wherever you are, plugin to access your own
            personal AI system, backed by verified datasets, adaptable to your input and
            integrated with you.
          </p>
        </div>
      </div>
    </section>
  );
}
