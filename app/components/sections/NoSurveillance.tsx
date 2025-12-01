export default function NoSurveillance() {
  return (
    <section
      id="no-surveillance"
      className="relative py-24 md:py-48 px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage: "url('/images/baseline1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container max-w-[1200px] mx-auto px-4 md:px-8 relative">
        <div className="text-center md:text-right max-w-full md:max-w-[600px] mx-auto md:ml-auto md:mr-0 md:pl-16">
          {/* Main Heading */}
          <h2 className="text-[#333] text-3xl md:text-6xl font-bold mb-6 md:mb-12 uppercase tracking-tight leading-[1.1]">
            UNDERSTAND WITHOUT{' '}
            <span className="text-[#666]">SURVEILLANCE</span>
          </h2>

          {/* Subheading */}
          <p className="text-[#555] text-lg md:text-2xl leading-[1.7] font-normal">
            Share your personal problems and confidential information in an airtight
            environment that only you can access
          </p>
        </div>
      </div>
    </section>
  );
}
