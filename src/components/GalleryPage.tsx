import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: "/images/real_gallery_2.jpg", title: "Project Alpha", subtitle: "6\" Lift / 35s / Armor" },
  { src: "/images/real_gallery_3.jpg", title: "Project Bravo", subtitle: "4\" Lift / 33s / Wheels" },
  { src: "/images/real_gallery_4.jpg", title: "Project Charlie", subtitle: "Leveling Kit / Custom Wheels" },
  { src: "/images/real_gallery_5.jpg", title: "Project Delta", subtitle: "8\" Lift / 37s / Full Build" },
  { src: "/images/real_gallery_7.jpg", title: "Project Echo", subtitle: "3\" Lift / LED Package" },
  { src: "/images/real_gallery_8.jpg", title: "Project Foxtrot", subtitle: "Complete Overhaul" },
  { src: "/images/real_gallery_1.jpg", title: "Project Golf", subtitle: "Suspension & Tires" },
  { src: "/images/real_services_1.png", title: "Project Hotel", subtitle: "Lift Kit Showcase" },
  { src: "/images/real_services_2.png", title: "Project India", subtitle: "Leveling & Wheels" },
  { src: "/images/real_services_3.png", title: "Project Juliet", subtitle: "Wheel & Tire Package" },
  { src: "/images/real_gallery_6.jpg", title: "Project Kilo", subtitle: "Accessories Build" },
  { src: "/images/real_services_3.png", title: "Project Lima", subtitle: "Full Custom Build" },
];

const FILTERS = ["All Builds", "Trucks", "Jeeps", "Broncos", "Leveling"];

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState("All Builds");

  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Hero */}
      <div className="relative py-40 bg-gunmetal overflow-hidden">
        <div className="absolute inset-0 bg-brushed-metal opacity-30" />
        <div className="absolute top-0 left-0 font-display text-[18vw] leading-none text-stroke opacity-5 pointer-events-none select-none">GALLERY</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6 origin-left">
            <div className="h-1 w-16 bg-crimson" />
            <span className="font-sans font-black uppercase tracking-[0.3em] text-sm text-crimson">Our Work</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-6xl md:text-9xl uppercase tracking-tight mb-6">
            Confirmed <span className="text-crimson">Kills</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-sans text-gray-400 max-w-2xl text-xl font-medium leading-relaxed border-l-4 border-crimson pl-6">
            A full showcase of our most recent and most notable builds. Every rig tells a story.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="border-b-2 border-gunmetal">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-6">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans font-black text-sm uppercase tracking-widest pb-2 transition-colors border-b-4 ${activeFilter === filter ? 'text-crimson border-crimson' : 'text-gray-500 border-transparent hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setSelectedImage(img.src)}
              className={`group relative overflow-hidden border-4 border-transparent hover:border-crimson transition-all duration-500 cursor-pointer bg-gunmetal ${idx === 0 || idx === 4 || idx === 8 ? 'md:col-span-2 aspect-video' : 'aspect-square'}`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-display text-3xl uppercase tracking-wide text-white mb-1">{img.title}</h4>
                  <p className="font-sans text-crimson font-black text-sm uppercase tracking-widest">{img.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-crimson transition-colors z-[110]" onClick={() => setSelectedImage(null)}>
              <X className="w-12 h-12" />
            </button>
            <motion.img
              src={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-[90vw] max-h-[90vh] object-contain border-4 border-ink shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
