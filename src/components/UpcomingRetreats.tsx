import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';
import BookingModal from './BookingModal';

const upcoming = [
  {
    id: 1,
    title: 'The Awakening Immersive',
    date: 'August 12 - 18, 2026',
    location: 'Goa, India',
    description: 'A deeply restorative journey combining ancient yogic traditions with modern somatic therapy to awaken your true potential.',
    status: 'Available',
    image: '/images/upcoming-1.jpg',
    benefits: ['Daily guided meditation', 'Somatic healing sessions', 'Nourishing plant-based cuisine', '1-on-1 coaching'],
    bestFor: 'Those seeking a profound reset and deeper connection to self.'
  },
  {
    id: 2,
    title: 'Alpine Stillness',
    date: 'Nov 05 - 10, 2026',
    location: 'Zermatt, Switzerland',
    description: 'Find unparalleled clarity in the crisp mountain air. A quiet, contemplative space designed for deep introspection.',
    status: 'Sold Out',
    image: '/images/upcoming-2.jpg',
    benefits: ['Silent guided hikes', 'Breathwork mastery', 'High-altitude wellness', 'Thermal spa access'],
    bestFor: 'Individuals needing to step away from digital noise and find pure focus.'
  },
  {
    id: 3,
    title: 'Oceanic Reset',
    date: 'Dec 01 - 07, 2026',
    location: 'Bali, Indonesia',
    description: 'Harness the healing energy of the ocean and ancient south-east asian healing practices for a total physical and energetic cleanse.',
    status: 'Sold Out',
    image: '/images/upcoming-3.jpg',
    benefits: ['Oceanfront yoga', 'Cacao ceremonies', 'Sound bath healing', 'Wisdom talks'],
    bestFor: 'Anyone looking to release emotional blockages and embrace renewal.'
  }
];

export default function UpcomingRetreats() {
  const [selectedRetreat, setSelectedRetreat] = useState<typeof upcoming[0] | null>(null);

  return (
    <section className="py-24 bg-dark-bg" id="schedule">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Upcoming Retreats
          </motion.h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Secure your place in our upcoming transformative experiences. Space is intentionally limited to preserve intimacy.
          </p>
        </div>

        <div className="space-y-6">
          {upcoming.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-dark-surface rounded-3xl overflow-hidden border border-dark-border flex flex-col md:flex-row group ${item.status === 'Sold Out' ? 'opacity-70 grayscale-[0.5]' : ''}`}
            >
              <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden bg-dark-bg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute top-4 left-4 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full 
                  ${item.status === 'Sold Out' ? 'bg-black text-white border border-dark-border' : 
                    item.status === 'Limited Spots' ? 'bg-white/10 backdrop-blur text-gold border border-gold/30' : 
                    'bg-white/10 backdrop-blur text-white border border-white/20'}`}
                >
                  {item.status}
                </div>
              </div>
              
              <div className="p-8 md:p-10 flex flex-col justify-center flex-grow">
                <div className="flex flex-wrap gap-4 text-[10px] text-white/50 mb-4 uppercase tracking-[0.2em] font-bold">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {item.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {item.location}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {item.title}
                </h3>
                
                <p className="text-sm text-white/70 mb-8 max-w-2xl leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-auto flex justify-between items-center">
                  <button 
                    onClick={() => setSelectedRetreat(item)}
                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold border-b pb-1 transition-colors text-white border-white/50 hover:text-white/70 hover:border-white/30"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => setSelectedRetreat({ id: 0, title: '', date: '', location: '', description: '', status: '', image: '', benefits: [], bestFor: '' })}
            className="bg-white text-dark-bg px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/90 transition-colors inline-block"
          >
            Book Now
          </button>
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedRetreat} 
        onClose={() => setSelectedRetreat(null)} 
        retreatName={selectedRetreat?.title}
        location={selectedRetreat?.location}
        date={selectedRetreat?.date}
        description={selectedRetreat?.description}
        benefits={selectedRetreat?.benefits}
        bestFor={selectedRetreat?.bestFor}
      />
    </section>
  );
}
