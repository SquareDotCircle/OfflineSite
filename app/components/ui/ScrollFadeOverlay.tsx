'use client';

import { useScrollFade } from '@/app/lib/hooks';

export default function ScrollFadeOverlay() {
  const fadeProgress = useScrollFade();

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen -z-[1] pointer-events-none transition-opacity duration-100"
      style={{
        opacity: fadeProgress,
        backgroundColor: `rgba(0, 0, 0, ${fadeProgress})`,
      }}
    />
  );
}

