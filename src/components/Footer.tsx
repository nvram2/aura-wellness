import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-16 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif text-white mb-6 tracking-widest uppercase" style={{ fontFamily: '"Playfair Display", serif' }}>Aura Wellness</h2>
            <p className="max-w-md text-white/70 leading-relaxed mb-8">
              Curating deeply transformative wellness experiences in the world's most breathtaking sanctuaries. Elevate your existence.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Experiences</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">Group Retreats</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">Solo Immersions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#our-story" onClick={(e) => { e.preventDefault(); document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">Our Story</a></li>
              <li><a href="#coaches" onClick={(e) => { e.preventDefault(); document.getElementById('coaches')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">The Coaches</a></li>
              <li><a href="#locations" onClick={(e) => { e.preventDefault(); document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">Locations</a></li>
              <li><a href="#book" onClick={(e) => { e.preventDefault(); document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white text-white/70 transition-colors">Book Now</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dark-border text-[10px] uppercase tracking-[0.3em] font-light text-white/50">
          <p>&copy; {new Date().getFullYear()} Aura Wellness. Elevate your consciousness.</p>
        </div>
      </div>
    </footer>
  );
}
