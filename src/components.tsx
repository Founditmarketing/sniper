import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useTransform } from 'motion/react';
import {
  Menu, X, MapPin, Phone, Clock,
  ArrowRight, Crosshair, Instagram, Facebook, Youtube, Star, Quote, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Magnetic } from './components/Magnetic';
import { Hero } from './components/Hero';

const IMAGES = {
  hero: "/images/real_gallery_1.jpg",
  about: "/images/real_gallery_8.jpg",
  services: [
    "/images/real_services_1.png",
    "/images/real_services_2.png",
    "/images/real_services_3.png",
    "/images/real_gallery_6.jpg",
    "/images/real_gallery_7.jpg",
    "/images/real_gallery_5.jpg"
  ],
  gallery: [
    "/images/real_gallery_2.jpg",
    "/images/real_gallery_3.jpg",
    "/images/real_gallery_4.jpg",
    "/images/real_gallery_5.jpg",
    "/images/real_gallery_7.jpg",
    "/images/real_gallery_8.jpg"
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

        <nav className="hidden md:flex items-center gap-4 font-sans font-bold text-sm uppercase tracking-widest">
          <Magnetic strength={10}><a href="#services" className="px-4 py-2 hover:text-crimson transition-colors inline-block">Services</a></Magnetic>
          <Magnetic strength={10}><a href="#about" className="px-4 py-2 hover:text-crimson transition-colors inline-block">About</a></Magnetic>
          <Magnetic strength={10}><a href="#gallery" className="px-4 py-2 hover:text-crimson transition-colors inline-block">Gallery</a></Magnetic>
          <Magnetic strength={10}><a href="#reviews" className="px-4 py-2 hover:text-crimson transition-colors inline-block">Reviews</a></Magnetic>
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
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-display text-5xl sm:text-6xl uppercase tracking-wider hover:text-crimson transition-colors">Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-display text-5xl sm:text-6xl uppercase tracking-wider hover:text-crimson transition-colors">About</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-display text-5xl sm:text-6xl uppercase tracking-wider hover:text-crimson transition-colors">Gallery</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="font-display text-5xl sm:text-6xl uppercase tracking-wider hover:text-crimson transition-colors">Reviews</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-crimson text-white px-12 py-5 font-display text-3xl uppercase tracking-wider mt-12 skew-x-[-10deg]">
              <div className="skew-x-[10deg]">Get a Quote</div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



function Services() {
  const services = [
    { title: "Lift Kits", desc: "Raise the height of your vehicle's suspension. Clear greater ground and fit larger tires!", image: IMAGES.services[0] },
    { title: "Leveling Kits", desc: "Modify the front end of your vehicle by raising it for a more balanced and level stance!", image: IMAGES.services[1] },
    { title: "Wheels & Tires", desc: "Unparalleled performance, durability, and traction in all conditions!", image: IMAGES.services[2] },
    { title: "Auto Accessories", desc: "Call to learn about all of our vehicle accessories. LED lights and more!", image: IMAGES.services[3] }
  ];

  return (
    <section id="services" className="py-32 bg-gunmetal relative clip-diagonal-top -mt-10 z-20 bg-brushed-metal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Our <span className="text-crimson text-stroke-none opacity-100">Services</span></h2>
            <p className="font-sans text-gray-400 max-w-xl text-xl font-medium">We specialize in various customization services for off-road vehicles. Quality, Expertise, Customer Service, and Reputation you can trust.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden bg-ink border-2 border-ink/20 hover:border-crimson transition-colors duration-500 rounded-lg"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"></div>
              </div>
              <div className="p-8 relative z-10">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-display text-3xl uppercase tracking-wide group-hover:text-crimson transition-colors">{service.title}</h3>
                  <span className="font-display text-2xl text-ink/40 group-hover:text-ink/10">0{idx + 1}</span>
                </div>
                <p className="font-sans text-gray-400 text-sm font-medium leading-relaxed mb-6">{service.desc}</p>
                <Magnetic strength={10}>
                  <a href="tel:3372633717" className="inline-flex items-center gap-2 text-crimson hover:text-white font-sans font-black text-xs uppercase tracking-widest transition-colors">
                    Call For More Info <ArrowRight className="w-4 h-4" />
                  </a>
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
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-8 leading-[0.9] flex flex-col gap-1 md:gap-2">
              <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} className="block">Why</motion.span></div>
              <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.33, 1, 0.68, 1] }} className="block text-crimson">Choose Us?</motion.span></div>
            </h2>

            <div className="space-y-6 font-sans text-gray-300 text-lg leading-relaxed font-medium">
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
                Sniper Off Road is an automotive customization shop located at 510 S Martin Luther King Hwy in Lake Charles, Louisiana. The shop is known for providing high-quality work and excellent customer service. We have received positive reviews from customers, highlighting the professionalism and expertise of our team.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
                For more details or to inquire about our services, you can contact us at (337) 263-3717. Our operating hours are Monday to Friday from 9:00 AM to 5:00 PM (Closed Weekends).
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t-2 border-gunmetal"
            >
              <div>
                <div className="font-display text-3xl text-white mb-2">Quality & Expertise</div>
                <div className="font-sans text-xs font-black text-gray-400 uppercase tracking-widest leading-relaxed">We deliver top-tier craftsmanship on every single build.</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white mb-2">Reputation</div>
                <div className="font-sans text-xs font-black text-gray-400 uppercase tracking-widest leading-relaxed">Our customer service and stellar reviews speak for themselves.</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-32 bg-gunmetal relative clip-diagonal bg-brushed-metal z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Confirmed <span className="text-crimson text-stroke-none opacity-100">Kills</span></h2>
              <p className="font-sans text-gray-400 text-xl font-medium">A showcase of our most recent builds.</p>
            </div>
            <div className="flex flex-wrap gap-4 font-sans font-black text-xs sm:text-sm uppercase tracking-widest mt-6 md:mt-0">
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
                onClick={() => setSelectedImage(img)}
                className={`group relative overflow-hidden bg-ink border-4 border-transparent hover:border-crimson transition-all duration-500 cursor-pointer ${idx === 0 || idx === 3 ? 'md:col-span-2 lg:col-span-2 aspect-video' : 'aspect-square'}`}
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
              className="max-w-[90vw] max-h-[90vh] object-contain border-4 border-ink shadow-2xl skew-x-[-1deg]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Reviews() {
  const reviews = [
    { name: "Mike T.", vehicle: "2023 F-250 Tremor", text: "Sniper Off Road absolutely nailed the stance on my Tremor. The attention to detail on the suspension geometry is next level. Drives better than stock." },
    { name: "Sarah J.", vehicle: "Jeep Wrangler JL", text: "Took my stock JL in for a complete overhaul. Lift, tires, bumpers, winch. They communicated every step of the way and the final product is a beast on the trails." },
    { name: "David R.", vehicle: "Chevy Silverado 1500", text: "Best shop in Lake Charles hands down. They don't cut corners. If you want it done right the first time, bring it to Sniper." },
    { name: "James L.", vehicle: "Toyota Tacoma TRD Pro", text: "Called for advice on leveling my Taco. They were super honest, didn't try to upsell me, and the installation was flawless. Highly recommend!" },
    { name: "Chris B.", vehicle: "Ford Bronco Badlands", text: "What an amazing experience. They turned my fairly stock Bronco into a complete trail beast. The new wheels and tires are perfect." },
  ];

  return (
    <section id="reviews" className="py-32 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight mb-4 text-stroke-thick opacity-80">Field <span className="text-crimson text-stroke-none opacity-100">Reports</span></h2>
          <div className="flex justify-center gap-2 text-crimson mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 fill-current" />)}
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-y-4 border-gunmetal bg-ink py-10 group cursor-grab active:cursor-grabbing">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee group-hover:[animation-play-state:paused]" style={{ width: 'max-content', animationDuration: '40s' }}>
          {/* First Half */}
          <div className="flex gap-10 px-5">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gunmetal p-10 relative border-l-8 border-crimson hover:bg-white hover:text-ink transition-colors duration-500 group w-[350px] md:w-[450px] shrink-0"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-ink/5 transition-colors" />
                <p className="font-sans text-lg md:text-xl font-medium italic mb-8 relative z-10 leading-relaxed text-gray-300 group-hover:text-ink/80 transition-colors">"{review.text}"</p>
                <div>
                  <div className="font-display text-2xl md:text-3xl uppercase tracking-wide group-hover:text-ink">{review.name}</div>
                  <div className="font-sans text-crimson font-black text-sm uppercase tracking-widest mt-1">{review.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Second Half (Exact Duplicate) */}
          <div className="flex gap-10 px-5">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gunmetal p-10 relative border-l-8 border-crimson hover:bg-white hover:text-ink transition-colors duration-500 group w-[350px] md:w-[450px] shrink-0"
              >
                <Quote className="absolute top-6 right-6 w-16 h-16 text-white/5 group-hover:text-ink/5 transition-colors" />
                <p className="font-sans text-lg md:text-xl font-medium italic mb-8 relative z-10 leading-relaxed text-gray-300 group-hover:text-ink/80 transition-colors">"{review.text}"</p>
                <div>
                  <div className="font-display text-2xl md:text-3xl uppercase tracking-wide group-hover:text-ink">{review.name}</div>
                  <div className="font-sans text-crimson font-black text-sm uppercase tracking-widest mt-1">{review.vehicle}</div>
                </div>
              </div>
            ))}
          </div>
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
                <span>510 S Martin Luther King Hwy<br />Lake Charles, LA 70601</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-crimson shrink-0" />
                <a href="tel:3372633717" className="text-xl text-white font-bold hover:text-crimson transition-colors">(337) 263-3717</a>
              </li>
              <li className="flex items-center gap-4 font-bold">
                <span className="text-crimson shrink-0 text-2xl leading-none">@</span>
                <a href="mailto:robbiesutphin@yahoo.com" className="text-white hover:text-crimson transition-colors">robbiesutphin@yahoo.com</a>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-crimson shrink-0 mt-1" />
                <span>Mon - Fri: 9:00 AM - 5:00 PM<br />Sat & Sun: Closed</span>
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



function Preloader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Total animation: circle ~1.4s + 4 lines ~1.6s + hold ~0.4s = ~3.4s then exit
    const timer = setTimeout(onComplete, 3800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // SVG viewport: 200x200, center at 100,100, radius 60
  // Circle circumference = 2 * PI * 60 ≈ 376.99
  // Start from bottom (270deg) going clockwise means rotate(-90deg) with dashoffset trick
  const R = 60;
  const C = 2 * Math.PI * R; // 376.99

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center overflow-hidden"
    >
      <style>{`
        /* Circle: draws from bottom clockwise */
        @keyframes drawCircle {
          from { stroke-dashoffset: ${C}; }
          to   { stroke-dashoffset: 0; }
        }
        /* Lines slide in from their outside edge */
        @keyframes slideInTop {
          from { stroke-dashoffset: 62; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes slideInRight {
          from { stroke-dashoffset: 62; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes slideInBottom {
          from { stroke-dashoffset: 62; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes slideInLeft {
          from { stroke-dashoffset: 62; }
          to   { stroke-dashoffset: 0; }
        }

        .sniper-circle {
          stroke-dasharray: ${C};
          stroke-dashoffset: ${C};
          /* rotate so stroke-start = bottom (270deg) going clockwise */
          transform-origin: 100px 100px;
          transform: rotate(90deg);
          animation: drawCircle 1.4s cubic-bezier(0.33,1,0.68,1) 0.2s forwards;
        }
        /* Each line: 22px outside circle + cross circle + 20px gap from dot = 62px total */
        .sniper-line-top {
          stroke-dasharray: 62;
          stroke-dashoffset: 62;
          animation: slideInTop 0.35s ease-out 1.7s forwards;
        }
        .sniper-line-right {
          stroke-dasharray: 62;
          stroke-dashoffset: 62;
          animation: slideInRight 0.35s ease-out 2.05s forwards;
        }
        .sniper-line-bottom {
          stroke-dasharray: 62;
          stroke-dashoffset: 62;
          animation: slideInBottom 0.35s ease-out 2.4s forwards;
        }
        .sniper-line-left {
          stroke-dasharray: 62;
          stroke-dashoffset: 62;
          animation: slideInLeft 0.35s ease-out 2.75s forwards;
        }
      `}</style>

      <div className="flex flex-col items-center gap-10">
        {/* Crosshair SVG */}
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Center dot */}
          <circle cx="100" cy="100" r="5" fill="#e11d48" />

          {/* Animated circle — starts drawing from bottom, goes clockwise */}
          <circle
            className="sniper-circle"
            cx="100"
            cy="100"
            r={R}
            stroke="#e11d48"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Top: tip at y=18 (22px outside circle top at y=40), stops at y=80 (20px from center) */}
          <line
            className="sniper-line-top"
            x1="100" y1="18" x2="100" y2="80"
            stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"
          />

          {/* Right: tip at x=182 (22px outside circle right at x=160), stops at x=120 (20px from center) */}
          <line
            className="sniper-line-right"
            x1="182" y1="100" x2="120" y2="100"
            stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"
          />

          {/* Bottom: tip at y=182 (22px outside circle bottom at y=160), stops at y=120 (20px from center) */}
          <line
            className="sniper-line-bottom"
            x1="100" y1="182" x2="100" y2="120"
            stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"
          />

          {/* Left: tip at x=18 (22px outside circle left at x=40), stops at x=80 (20px from center) */}
          <line
            className="sniper-line-left"
            x1="18" y1="100" x2="80" y2="100"
            stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round"
          />
        </svg>

        {/* Brand text */}
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl tracking-widest uppercase text-white">
            Sniper <span style={{ color: '#e11d48' }}>Off Road</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export { Navbar, Hero, Services, About, Gallery, Reviews, Footer, Preloader };
