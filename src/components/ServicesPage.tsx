import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone } from 'lucide-react';

const SERVICES = [
  {
    title: "Lift Kits",
    desc: "Raise the height of your vehicle's suspension. Clear greater ground and fit larger tires! We carry a full range of suspension lift kits from the industry's best brands including Rough Country, Fabtech, ReadyLIFT, and BDS Suspension.",
    detail: "Whether you want 2\" of extra clearance or a full 12\" lift, we have the expertise to install it right. Proper alignment and geometry are guaranteed on every lift kit install.",
    image: "/images/real_services_1.png",
    tags: ["Rough Country", "Fabtech", "BDS", "ReadyLIFT"]
  },
  {
    title: "Leveling Kits",
    desc: "Modify the front end of your vehicle by raising it for a more balanced and level stance! A leveling kit corrects the factory rake, giving your truck a more aggressive, balanced look.",
    detail: "Great for fitting larger tires up front without rubbing and improving overall stance. Quick installs with a big visual impact — one of our most popular services.",
    image: "/images/real_services_2.png",
    tags: ["Front Leveling", "2\" – 3\"", "Trucks & SUVs"]
  },
  {
    title: "Wheels & Tires",
    desc: "Unparalleled performance, durability, and traction in all conditions! We offer the widest selection of off-road wheels and tires in the Lake Charles area.",
    detail: "From aggressive all-terrain tires to mud-terrain warriors, we'll help you find the perfect setup for your driving style and terrain. Mounted, balanced, and aligned in-house.",
    image: "/images/real_services_3.png",
    tags: ["All-Terrain", "Mud-Terrain", "Custom Wheels", "Full Mount & Balance"]
  },
  {
    title: "Auto Accessories",
    desc: "Call to learn about all of our vehicle accessories. LED lights, bumpers, running boards, bed covers, and more!",
    detail: "We outfit your rig with everything it needs — front and rear bumpers, winches, skid plates, rock sliders, LED light bars, fender flares, tonneau covers, and so much more.",
    image: "/images/real_gallery_6.jpg",
    tags: ["LED Lighting", "Bumpers", "Winches", "Skid Plates", "Fender Flares"]
  },
  {
    title: "Suspension Tuning",
    desc: "Full geometry correction and suspension tuning to ensure your rig handles and rides the way it was built to.",
    detail: "After every lift install, we conduct a full alignment and suspension geometry check. Your safety is our priority — we won't let a truck leave our shop that doesn't drive right.",
    image: "/images/real_gallery_7.jpg",
    tags: ["Alignment", "Geometry Correction", "Ride Quality"]
  },
  {
    title: "Custom Builds",
    desc: "Have a vision? We'll bring it to life. From mild to wild, our team has built some of the most aggressive rigs in Louisiana.",
    detail: "Full vehicle customization from the ground up. Tell us your dream build and we'll map out a plan, source the parts, and execute it flawlessly. Past builds include show trucks, trail rigs, and daily drivers.",
    image: "/images/real_gallery_5.jpg",
    tags: ["Full Builds", "Show Trucks", "Trail Rigs", "Custom Everything"]
  }
];

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-ink text-white">
      {/* Hero */}
      <div className="relative py-40 bg-gunmetal overflow-hidden">
        <div className="absolute inset-0 bg-brushed-metal opacity-30" />
        <div className="absolute top-0 left-0 font-display text-[20vw] leading-none text-stroke opacity-5 pointer-events-none select-none">SERVICES</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6 origin-left">
            <div className="h-1 w-16 bg-crimson" />
            <span className="font-sans font-black uppercase tracking-[0.3em] text-sm text-crimson">What We Do</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-6xl md:text-9xl uppercase tracking-tight mb-6">
            Our <span className="text-crimson">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-sans text-gray-400 max-w-2xl text-xl font-medium leading-relaxed border-l-4 border-crimson pl-6">
            Lake Charles' premier off-road shop. Quality, expertise, and a reputation built on results — every build, every time.
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-gunmetal border-2 border-transparent hover:border-crimson transition-colors duration-500 overflow-hidden"
            >
              <div className="h-52 overflow-hidden relative">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-gunmetal via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-3xl uppercase tracking-wide group-hover:text-crimson transition-colors">{service.title}</h3>
                  <span className="font-display text-xl text-white/20">0{idx + 1}</span>
                </div>
                <p className="text-gray-400 font-medium mb-4 leading-relaxed">{service.desc}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.detail}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-xs font-black uppercase tracking-widest text-crimson border border-crimson/30 px-2 py-1">{tag}</span>
                  ))}
                </div>
                <a href="tel:3372633717" className="inline-flex items-center gap-2 text-crimson hover:text-white font-sans font-black text-xs uppercase tracking-widest transition-colors">
                  <Phone className="w-4 h-4" /> Call For Pricing <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-crimson">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-6">Ready to Build?</h2>
          <p className="font-sans text-white/80 text-xl mb-10 font-medium">Call us at (337) 263-3717 or stop by 510 S Martin Luther King Hwy, Lake Charles, LA.</p>
          <a href="tel:3372633717" className="bg-white text-ink px-12 py-5 font-display text-2xl tracking-widest uppercase inline-block hover:bg-ink hover:text-white transition-colors">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
