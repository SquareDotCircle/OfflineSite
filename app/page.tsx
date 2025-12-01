'use client';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import VideoBackground from './components/ui/VideoBackground';
import ScrollFadeOverlay from './components/ui/ScrollFadeOverlay';
import Hero from './components/sections/Hero';
import HowItWorks from './components/sections/HowItWorks';
import NoConnectivity from './components/sections/NoConnectivity';
import NoSurveillance from './components/sections/NoSurveillance';
import PersonalizeAgent from './components/sections/PersonalizeAgent';
import ProductBrief from './components/sections/ProductBrief';

export default function Home() {
  return (
    <>
      {/* Video Background */}
      <VideoBackground />
      
      {/* Scroll Fade Overlay */}
      <ScrollFadeOverlay />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main" className="relative">
        <Hero />
        <ProductBrief />
        <HowItWorks />
        <NoConnectivity />
        <NoSurveillance />
        <PersonalizeAgent />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
