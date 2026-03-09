import React from 'react';
import { Navbar, Hero, Services, About, Gallery, Reviews, Footer } from './components';

export default function App() {
  return (
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
  );
}
