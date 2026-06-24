import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex flex-col overflow-hidden pt-32 pb-24 md:pt-40 md:pb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Serene wellness retreat"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-dark-bg" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-4xl leading-[1.1]"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Find your center in the world's most <span className="italic text-gold">breathtaking</span> spaces.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="text-base md:text-xl text-white mb-10 max-w-2xl font-light opacity-80"
        >
          Aura Wellness curates bespoke retreats in exclusive global locations, guided by world-class trainers and coaches to transform your mind, body, and spirit.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="#book" 
            onClick={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-white text-dark-bg px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group"
          >
            Book Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#schedule" 
            onClick={(e) => { e.preventDefault(); document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-transparent border border-white/40 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center"
          >
            Explore Retreats
          </a>
        </motion.div>
      </div>
    </div>
  );
}
