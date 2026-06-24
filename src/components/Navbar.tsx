import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-sm border-b border-dark-border py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className={`font-serif text-xl md:text-2xl tracking-widest uppercase text-white`} style={{ fontFamily: '"Playfair Display", serif' }}>
            Aura Wellness
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            <a 
              href="#our-story" 
              onClick={(e) => { e.preventDefault(); document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:opacity-100 text-white opacity-80`}
            >
              Our Story
            </a>
            <a 
              href="#experience" 
              onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:opacity-100 text-white opacity-80`}
            >
              Experience
            </a>
            <a 
              href="#locations" 
              onClick={(e) => { e.preventDefault(); document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:opacity-100 text-white opacity-80`}
            >
              Locations
            </a>
            <a 
              href="#coaches" 
              onClick={(e) => { e.preventDefault(); document.getElementById('coaches')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:opacity-100 text-white opacity-80`}
            >
              The Coaches
            </a>
          </div>
          
          <div className="hidden lg:block">
            <a 
              href="#book" 
              onClick={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }}
              className={`px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest transition-colors ${
              isScrolled 
                ? 'bg-white text-dark-bg hover:bg-white/90' 
                : 'bg-white text-dark-bg hover:bg-white/90'
            }`}>
              Book Now
            </a>
          </div>

          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-dark-bg flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-dark-border">
              <div className="font-serif text-xl tracking-widest uppercase text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                Aura Wellness
              </div>
              <button 
                className="text-white p-2 hover:text-white/70 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col p-8 gap-8 text-center flex-grow justify-center">
              <a 
                href="#our-story" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold text-white block"
              >
                Our Story
              </a>
              <a 
                href="#experience" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold text-white block"
              >
                Experience
              </a>
              <a 
                href="#locations" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold text-white block"
              >
                Locations
              </a>
              <a 
                href="#coaches" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('coaches')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="text-sm font-medium uppercase tracking-[0.2em] transition-colors hover:text-gold text-white block"
              >
                The Coaches
              </a>
              
              <a 
                href="#book" 
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="mt-8 mx-auto px-8 py-4 bg-white text-dark-bg rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/90 transition-colors w-full max-w-xs block"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
