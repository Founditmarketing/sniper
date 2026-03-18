import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, Hero, Services, About, Gallery, Reviews, Footer, Preloader } from './components';
import { ServicesPage } from './components/ServicesPage';
import { AboutPage } from './components/AboutPage';
import { GalleryPage } from './components/GalleryPage';

export type Page = 'home' | 'services' | 'about' | 'gallery';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<Page>('home');

  const navigate = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-ink text-white font-sans overflow-x-hidden selection:bg-crimson selection:text-white">
        <Navbar currentPage={page} onNavigate={navigate} />
        <main>
          {page === 'home' && (
            <>
              <Hero onNavigate={navigate} />
              <Services onNavigate={navigate} />
              <About onNavigate={navigate} />
              <Gallery onNavigate={navigate} />
              <Reviews />
            </>
          )}
          {page === 'services' && <ServicesPage onNavigate={navigate} />}
          {page === 'about' && <AboutPage onNavigate={navigate} />}
          {page === 'gallery' && <GalleryPage onNavigate={navigate} />}
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </>
  );
}
