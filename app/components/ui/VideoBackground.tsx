'use client';

export default function VideoBackground() {
  return (
    <>
      {/* Star background video (full screen, fixed) */}
      <video
        id="star-bg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-100 transition-opacity duration-100 pointer-events-none"
        style={{ width: '100vw', height: '100vh', maxWidth: '100%' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/0823.mp4" type="video/mp4" />
      </video>
    </>
  );
}

