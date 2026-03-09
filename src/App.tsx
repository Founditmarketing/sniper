import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, Hero, Services, About, Gallery, Reviews, Footer, Preloader, CustomCursor } from './components';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-ink text-white font-sans overflow-x-hidden selection:bg-crimson selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Reviews />
        </main>
        <Footer />
      </div>
    </>
  );
}
