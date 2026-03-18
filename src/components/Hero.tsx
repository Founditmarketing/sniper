import React from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const IMAGES = {
  hero: "/images/real_gallery_1.jpg"
};

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { scrollY } = useScroll();
  const yBackgroundScroll = useTransform(scrollY, [0, 1000], [0, 400]);
  const yTextScroll = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 500], [0.2, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200, mass: 1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const xBackgroundParallax = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
  const yBackgroundParallax = useTransform(mouseYSpring, [-1, 1], [-20, 20]);

  const xTextParallax = useTransform(mouseXSpring, [-1, 1], [30, -30]);
  const yTextParallax = useTransform(mouseYSpring, [-1, 1], [30, -30]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = (clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section onMouseMove={handleMouseMove} className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* Massive Background Text with Parallax */}
      <motion.div style={{ y: yTextScroll, opacity: opacityText }} className="absolute inset-0 z-0 pointer-events-none">
        <motion.h1
          style={{ x: xTextParallax, y: yTextParallax }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center font-display text-[25vw] leading-[0.75] uppercase text-stroke-thick pointer-events-none select-none whitespace-nowrap"
        >
          SNIPER
        </motion.h1>
      </motion.div>

      <motion.div
        style={{ y: yBackgroundScroll }}
        className="absolute inset-0 z-10 origin-top pointer-events-none"
      >
        <motion.div style={{ x: xBackgroundParallax, y: yBackgroundParallax }} className="relative w-full h-[120%] -mt-[10%] origin-center">
          <div className="absolute inset-0 bg-ink opacity-40 z-20 pointer-events-none"></div>
          <img src={IMAGES.hero} alt="Off-road truck in dust" className="w-full h-full object-cover scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-30 pointer-events-none"></div>
          <div className="absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay z-40 pointer-events-none"></div>
        </motion.div>
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6 origin-left"
          >
            <div className="h-1 w-16 bg-crimson"></div>
            <span className="font-sans font-black uppercase tracking-[0.3em] text-sm text-crimson">Lake Charles, LA</span>
          </motion.div>

          <h2 className="font-display text-[12vw] md:text-[8rem] leading-[0.85] uppercase tracking-tight mb-8 text-white drop-shadow-2xl flex flex-col">
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
                className="block"
              >
                Built
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="block text-crimson"
              >
                Different
              </motion.span>
            </div>
          </h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans font-medium text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed border-l-4 border-crimson pl-6"
          >
            Premium off-road vehicle customization. Lifts, wheels, tires, and accessories engineered for absolute dominance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#contact"
              className="bg-crimson hover:bg-white hover:text-ink text-white px-10 py-5 font-display text-2xl tracking-widest uppercase transition-all skew-x-[-10deg] inline-block hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="skew-x-[10deg] flex items-center gap-3">
                Book Your Build <ArrowRight className="w-6 h-6" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee Tape */}
      <div className="absolute bottom-0 left-0 right-0 bg-crimson text-white py-3 z-30 overflow-hidden border-y-2 border-black transform -rotate-1 origin-bottom-left scale-105 shadow-[0_0_30px_rgba(230,0,0,0.3)] pointer-events-none">
        <div className="animate-marquee font-display text-2xl uppercase tracking-widest whitespace-nowrap">
          <span className="mx-4">Lifts</span> • <span className="mx-4">Wheels</span> • <span className="mx-4">Tires</span> • <span className="mx-4">Armor</span> • <span className="mx-4">Performance</span> • <span className="mx-4">Lighting</span> •
          <span className="mx-4">Lifts</span> • <span className="mx-4">Wheels</span> • <span className="mx-4">Tires</span> • <span className="mx-4">Armor</span> • <span className="mx-4">Performance</span> • <span className="mx-4">Lighting</span> •
          <span className="mx-4">Lifts</span> • <span className="mx-4">Wheels</span> • <span className="mx-4">Tires</span> • <span className="mx-4">Armor</span> • <span className="mx-4">Performance</span> • <span className="mx-4">Lighting</span> •
        </div>
      </div>
    </section>
  );
}
