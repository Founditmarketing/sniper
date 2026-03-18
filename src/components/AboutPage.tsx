import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, MapPin, Clock, Star, Award, Shield, Users } from 'lucide-react';

const STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Builds Completed" },
  { value: "5★", label: "Average Rating" },
  { value: "4", label: "Core Services" },
];

const VALUES = [
  { icon: Award, title: "Quality First", desc: "We use only the best parts from trusted brands. Every install is done right, not just done fast." },
  { icon: Shield, title: "Safety Guaranteed", desc: "Every build includes a full alignment check and geometry inspection. Your safety is non-negotiable." },
  { icon: Users, title: "Customer Service", desc: "We communicate every step of the way. No surprises — just clarity and results you can be proud of." },
  { icon: Star, title: "Proven Reputation", desc: "Our 5-star reviews speak for themselves. Lake Charles trusts Sniper Off Road because we've earned it." },
];

const REVIEWS = [
  { name: "J P", vehicle: "3 months ago", text: "Great service! Very knowledgeable. Highly recommend." },
  { name: "Safety Station", vehicle: "Cameron, LA · 2 months ago", text: "Friendly, knowledgeable, and most importantly, the quality of their work is amazing!" },
  { name: "Ryan Arendt", vehicle: "5 years ago", text: "Amazing people who know their business. Had a chameleon cerakote and new tires. Great price — tire was $650, normally $800. Chameleon blue cerakote, all together for $1,500 plus tax. Fantastic results!" },
  { name: "Zac Young", vehicle: "3 years ago", text: "Very knowledgeable and honest. Super professional and extremely well-mannered. Only place I trust for servicing oversized tires and aftermarket rims. Highly recommend!" },
  { name: "Richard Baggett", vehicle: "10 months ago", text: "I installed a 2\" lift kit on a Jeep and wanted more. They were more than fair on trade-in. Great work!" },
];


interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-ink text-white">

      {/* Hero */}
      <div className="relative py-40 overflow-hidden bg-gunmetal">
        <div className="absolute inset-0 bg-brushed-metal opacity-30" />
        <div className="absolute top-0 right-0 font-display text-[18vw] leading-none text-stroke opacity-5 pointer-events-none select-none">ABOUT</div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6 origin-left">
            <div className="h-1 w-16 bg-crimson" />
            <span className="font-sans font-black uppercase tracking-[0.3em] text-sm text-crimson">Est. 2014</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-6xl md:text-9xl uppercase tracking-tight mb-6">
            Who We <span className="text-crimson">Are</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-sans text-gray-400 max-w-2xl text-xl font-medium leading-relaxed border-l-4 border-crimson pl-6">
            Sniper Off Road is Lake Charles' most trusted name in off-road vehicle customization — built on quality, expertise, and a relentless commitment to customer satisfaction.
          </motion.p>
        </div>
      </div>

      {/* Stats */}
      <section className="py-20 bg-crimson">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <div className="font-display text-6xl md:text-7xl mb-2">{stat.value}</div>
              <div className="font-sans font-black uppercase tracking-widest text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute -inset-6 border-4 border-gunmetal skew-x-[-2deg] z-0" />
              <img src="/images/real_gallery_8.jpg" alt="Sniper Off Road shop" className="relative z-10 w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute -bottom-8 -right-8 bg-crimson p-8 z-20 border-8 border-ink">
                <div className="font-display text-6xl leading-none text-center">10+</div>
                <div className="font-sans font-black uppercase tracking-widest text-xs mt-1 text-center">Years Strong</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-8">Our <span className="text-crimson">Story</span></h2>
            <div className="space-y-6 text-gray-300 text-lg font-medium leading-relaxed">
              <p>Sniper Off Road was founded with one goal: to be the best off-road shop in Southwest Louisiana. Since 2014, we've been building rigs that turn heads, dominate trails, and hold up for years.</p>
              <p>Located at 510 S Martin Luther King Hwy in Lake Charles, Louisiana, our shop has become a destination for truck and Jeep enthusiasts across the Gulf Coast region. We've built everything from mild daily drivers to full-blown show trucks.</p>
              <p>Owner Robbie Sutphin built this business on honest advice, skilled installs, and genuine relationships with customers. Every vehicle that rolls out of our shop gets the same level of care — whether it's a simple leveling kit or a complete custom build.</p>
              <p>We're not just a parts store — we're builders, mechanics, and off-road enthusiasts ourselves. We understand what you want because we want it too.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gunmetal">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-16 text-center">
            Why <span className="text-crimson">Choose Us?</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map(({ icon: Icon, title, desc }, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="group p-8 border-2 border-white/10 hover:border-crimson transition-colors duration-500">
                <Icon className="w-10 h-10 text-crimson mb-6" />
                <h3 className="font-display text-2xl uppercase tracking-wide mb-4 group-hover:text-crimson transition-colors">{title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-4 text-center">
          Field <span className="text-crimson">Reports</span>
        </motion.h2>
        <div className="flex justify-center gap-2 mb-16">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-7 h-7 fill-current text-crimson" />)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="bg-gunmetal p-8 border-l-8 border-crimson">
              <p className="text-gray-300 font-medium italic leading-relaxed mb-6 text-lg">"{review.text}"</p>
              <div className="font-display text-2xl uppercase tracking-wide">{review.name}</div>
              <div className="text-crimson font-black text-xs uppercase tracking-widest mt-1">{review.vehicle}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-crimson">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-10">Come See Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="flex flex-col items-center gap-3">
              <MapPin className="w-8 h-8" />
              <div className="font-sans font-medium">510 S Martin Luther King Hwy<br />Lake Charles, LA 70601</div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Phone className="w-8 h-8" />
              <a href="tel:3372633717" className="font-display text-3xl hover:underline">(337) 263-3717</a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock className="w-8 h-8" />
              <div className="font-sans font-medium">Mon–Fri: 9AM–5PM<br />Sat & Sun: Closed</div>
            </div>
          </div>
          <a href="tel:3372633717" className="bg-white text-ink px-12 py-5 font-display text-2xl tracking-widest uppercase inline-block hover:bg-ink hover:text-white transition-colors">
            Call Now
          </a>
        </div>
      </section>
    </div>
  );
}
