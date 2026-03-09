import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, MapPin, Phone, Clock, 
  ArrowRight, Crosshair, Instagram, Facebook, Youtube, Star, Quote
} from 'lucide-react';
import { Magnetic } from './components/Magnetic';
import { Hero } from './components/Hero';

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1583122622483-34b82711685e?auto=format&fit=crop&q=80&w=2000",
  about: "https://images.unsplash.com/photo-1620065050968-1501c606af88?auto=format&fit=crop&q=80&w=1000",
  services: [
    "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1605810730445-56502be15082?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1559311648-d46f5d8593d6?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000",
    "https://images.unsplash.com/photo-1506015391300-415214d24a28?auto=format&fit=crop&q=80&w=1000"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1506015391300-415214d24a28?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1625833538435-0259b3400511?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1566310218151-872f23246416?auto=format&fit=crop&q=80&w=800"
  ]
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-ink/95 backdrop-blur-md py-4 shadow-lg shadow-black/50 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Crosshair className="w-8 h-8 text-crimson" />
          <span className="font-display text-3xl tracking-wide uppercase mt-1">Sniper <span className="text-crimson">Off Road</span></span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-sans font-bold text-sm uppercase tracking-widest">
          <a href="#services" className="hover:text-crimson transition-colors">Services</a>
          <a href="#about" className="hover:text-crimson transition-colors">About</a>
          <a href="#gallery" className="hover:text-crimson transition-colors">Gallery</a>
          <a href="#reviews" className="hover:text-crimson transition-colors">Reviews</a>
        </nav>

        <div className="hidden md:block">
          <Magnetic>
            <a href="#contact" className="bg-crimson hover:bg-white hover:text-ink text-white px-8 py-3 font-display text-xl tracking-wider uppercase transition-all transform skew-x-[-10deg] inline-block">
              <div className="skew-x-[10deg]">Get a Quote</div>
            </a>
          </Magnetic>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-ink border-t border-gunmetal p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-wider hover:text-crimson">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-wider hover:text-crimson">About</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-wider hover:text-crimson">Gallery</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="font-display text-3xl uppercase tracking-wider hover:text-crimson">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-crimson text-center py-4 font-display text-2xl uppercase tracking-wider mt-4">Get a Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



function Services() {
  const services = [
    { title: "Suspension Lifts", desc: "Premium lift kits installed with military precision for maximum clearance and ride quality.", image: IMAGES.services[0] },
    { title: "Wheels & Tires", desc: "Aggressive wheel and tire packages perfectly matched to your build's stance and purpose.", image: IMAGES.services[1] },
    { title: "Armor & Bumpers", desc: "Heavy-duty steel bumpers, rock sliders, and skid plates to protect your investment.", image: IMAGES.services[2] },
    { title: "Lighting & Audio", desc: "High-output LED light bars, rock lights, and premium marine-grade audio systems.", image: IMAGES.services[3] },
    { title: "Performance", desc: "Intakes, exhausts, and tuning to give your rig the power to match its looks.", image: IMAGES.services[4] },
    { title: "Accessories", desc: "Winches, recovery gear, roof racks, and overlanding equipment.", image: IMAGES.services[5] },
  ];

  return (
    <section id="services" className="py-32 bg-gunmetal relative clip-diagonal-top -mt-10 z-20 bg-brushed-metal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Our <span className="text-crimson text-stroke-none opacity-100">Arsenal</span></h2>
            <p className="font-sans text-gray-400 max-w-xl text-xl font-medium">We don't just bolt on parts. We engineer complete systems designed to work together flawlessly.</p>
          </div>
        </div>

        <div className="border-t-4 border-ink">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative border-b border-ink/50 py-10 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-crimson transition-colors duration-500 px-6 cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full md:w-auto">
                <span className="font-display text-5xl md:text-7xl text-ink/20 group-hover:text-ink/40 transition-colors">0{idx + 1}</span>
                <div>
                  <h3 className="font-display text-4xl md:text-6xl uppercase tracking-wide mb-2 group-hover:text-ink transition-colors">{service.title}</h3>
                  <p className="font-sans text-gray-400 group-hover:text-ink/80 max-w-lg text-lg font-medium transition-colors">{service.desc}</p>
                </div>
              </div>
              
              {/* Hover Image Reveal (Hidden on mobile) */}
              <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-[400px] h-[250px] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 pointer-events-none z-0 shadow-2xl skew-x-[-5deg]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 border-4 border-ink mix-blend-overlay"></div>
              </div>

              <div className="mt-6 md:mt-0 relative z-10 text-crimson group-hover:text-ink transition-colors transform group-hover:translate-x-4 duration-300">
                <Magnetic strength={20}>
                  <div className="p-4 bg-ink/10 rounded-full backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-10 h-10 md:w-16 md:h-16" />
                  </div>
                </Magnetic>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-ink relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 right-0 font-display text-[30vw] leading-none text-stroke opacity-10 pointer-events-none select-none">
        EST. 2014
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="absolute -inset-6 border-4 border-gunmetal skew-x-[-2deg] z-0"></div>
            <div className="relative z-10 overflow-hidden">
              <img src={IMAGES.about} alt="Mechanic working on suspension" className="w-full h-[700px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 bg-crimson text-white p-10 z-20 shadow-2xl border-8 border-ink">
              <div className="text-center">
                <div className="font-display text-8xl leading-none">10+</div>
                <div className="font-sans font-black uppercase tracking-widest text-sm mt-2">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-8 leading-[0.9]">
              Precision <br/>
              <span className="text-transparent bg-clip-text stroke-white text-stroke-thick">Meets</span> <br/>
              <span className="text-crimson">Power</span>
            </h2>
            
            <div className="space-y-6 font-sans text-gray-300 text-xl leading-relaxed font-medium">
              <p>
                Located in the heart of Lake Charles, Sniper Off Road was founded on a simple principle: build it right, build it tough, and make it look badass.
              </p>
              <p>
                We are not a quick-lube shop. We are automotive craftsmen specializing in high-end off-road customization. From daily-driven leveled trucks to fully armored trail rigs, we treat every vehicle like it's our own.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-16 pt-12 border-t-4 border-gunmetal">
              <div>
                <div className="font-display text-6xl text-white mb-2">500+</div>
                <div className="font-sans text-sm font-black text-crimson uppercase tracking-widest">Builds Completed</div>
              </div>
              <div>
                <div className="font-display text-6xl text-white mb-2">100%</div>
                <div className="font-sans text-sm font-black text-crimson uppercase tracking-widest">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-gunmetal relative clip-diagonal bg-brushed-metal z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Confirmed <span className="text-crimson text-stroke-none opacity-100">Kills</span></h2>
            <p className="font-sans text-gray-400 text-xl font-medium">A showcase of our most recent builds.</p>
          </div>
          <div className="flex gap-6 font-sans font-black text-sm uppercase tracking-widest">
            <button className="text-crimson border-b-4 border-crimson pb-2">All Builds</button>
            <button className="text-gray-500 hover:text-white transition-colors pb-2">Trucks</button>
            <button className="text-gray-500 hover:text-white transition-colors pb-2">Jeeps</button>
            <button className="text-gray-500 hover:text-white transition-colors pb-2">Broncos</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.gallery.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-ink border-4 border-transparent hover:border-crimson transition-all duration-500 ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'aspect-square'}`}
            >
              <img src={img} alt={`Build ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-white mb-2">Project {['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot'][idx]}</h4>
                  <p className="font-sans text-crimson font-black text-xs md:text-sm uppercase tracking-widest">6" Lift / 35s / Armor</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Magnetic>
            <a href="#" className="bg-transparent border-4 border-white hover:bg-white hover:text-ink text-white px-10 py-5 font-display text-2xl tracking-widest uppercase transition-all skew-x-[-10deg] inline-block">
              <div className="skew-x-[10deg] flex items-center gap-3">
                View Full Gallery <ArrowRight className="w-6 h-6" />
              </div>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-ink relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Field <span className="text-crimson text-stroke-none opacity-100">Reports</span></h2>
          <div className="flex justify-center gap-2 text-crimson mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { name: "Mike T.", vehicle: "2023 F-250 Tremor", text: "Sniper Off Road absolutely nailed the stance on my Tremor. The attention to detail on the suspension geometry is next level. Drives better than stock." },
            { name: "Sarah J.", vehicle: "Jeep Wrangler JL", text: "Took my stock JL in for a complete overhaul. Lift, tires, bumpers, winch. They communicated every step of the way and the final product is a beast on the trails." },
            { name: "David R.", vehicle: "Chevy Silverado 1500", text: "Best shop in Lake Charles hands down. They don't cut corners. If you want it done right the first time, bring it to Sniper." }
          ].map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-gunmetal p-10 relative border-l-8 border-crimson hover:bg-white hover:text-ink transition-colors duration-500 group"
            >
              <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-ink/5 transition-colors" />
              <p className="font-sans text-xl font-medium italic mb-8 relative z-10 leading-relaxed text-gray-300 group-hover:text-ink/80 transition-colors">"{review.text}"</p>
              <div>
                <div className="font-display text-3xl uppercase tracking-wide group-hover:text-ink">{review.name}</div>
                <div className="font-sans text-crimson font-black text-sm uppercase tracking-widest mt-1">{review.vehicle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-ink border-t-8 border-crimson pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Crosshair className="w-12 h-12 text-crimson" />
              <span className="font-display text-5xl tracking-wide uppercase mt-1">Sniper <span className="text-crimson">Off Road</span></span>
            </div>
            <p className="font-sans text-gray-400 max-w-md mb-10 text-xl font-medium leading-relaxed">
              Lake Charles' premier destination for high-performance off-road customization. We build rigs that command respect.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-gunmetal flex items-center justify-center hover:bg-crimson hover:text-white transition-colors"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="w-14 h-14 bg-gunmetal flex items-center justify-center hover:bg-crimson hover:text-white transition-colors"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="w-14 h-14 bg-gunmetal flex items-center justify-center hover:bg-crimson hover:text-white transition-colors"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-3xl uppercase tracking-widest mb-8 text-white">HQ</h4>
            <ul className="space-y-6 font-sans text-gray-400 font-medium">
              <li className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-crimson shrink-0 mt-1" />
                <span>510 S Martin Luther King Hwy<br/>Lake Charles, LA 70601</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-crimson shrink-0" />
                <span className="text-xl text-white font-bold">(337) 555-0198</span>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-crimson shrink-0 mt-1" />
                <span>Mon-Fri: 8am - 6pm<br/>Sat: By Appointment<br/>Sun: Out on the trails</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-3xl uppercase tracking-widest mb-8 text-white">Ready to Build?</h4>
            <p className="font-sans text-gray-400 mb-8 font-medium">Contact us today to discuss your vision and get a quote.</p>
            <Magnetic>
              <a href="#" className="bg-crimson hover:bg-white hover:text-ink text-white px-8 py-5 font-display text-2xl tracking-widest uppercase transition-all skew-x-[-10deg] inline-block w-full text-center">
                <div className="skew-x-[10deg]">Book Your Build</div>
              </a>
            </Magnetic>
          </div>

        </div>

        <div className="border-t-2 border-gunmetal pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-sans text-sm font-bold tracking-widest uppercase text-gray-600">
          <p>&copy; {new Date().getFullYear()} Sniper Off Road. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.parentElement?.tagName.toLowerCase() === 'a' ||
        target.parentElement?.tagName.toLowerCase() === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-crimson rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block select-none"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-crimson rounded-full pointer-events-none z-[99] hidden md:block select-none"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 0.6
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
      />
    </>
  );
}

function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return p + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-brushed-metal opacity-20" />
      <div className="relative z-10 w-full max-w-sm px-6">
        <div className="flex items-center gap-3 justify-center mb-8">
          <Crosshair className="w-12 h-12 text-crimson animate-pulse" />
          <span className="font-display text-5xl tracking-wide uppercase text-white">Sniper</span>
        </div>
        <div className="h-1 w-full bg-gunmetal relative overflow-hidden mt-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-crimson"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mt-4 flex justify-between font-sans text-sm font-black uppercase tracking-widest text-crimson">
          <span>Ignition Sequence</span>
          <span>{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
}

export { Navbar, Hero, Services, About, Gallery, Reviews, Footer, Preloader, CustomCursor };
