import { motion } from 'motion/react';

const locations = [
  {
    name: 'India',
    image: '/images/loc-india.jpg',
    description: 'Transformational wellness by the Arabian Sea.',
  },
  {
    name: 'Bali',
    image: '/images/loc-bali.jpg',
    description: 'Deep in the jungle canopy.',
  },
  {
    name: 'Switzerland',
    image: '/images/loc-swiss.jpg',
    description: 'Crisp air and high-altitude clarity.',
  },
  {
    name: 'Japan',
    image: '/images/loc-kyoto.jpg',
    description: 'Zen gardens and mindful stillness.',
  }
];

export default function Locations() {
  return (
    <section className="py-24 bg-dark-surface text-white overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="w-16 h-[1px] bg-white mb-6"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Bespoke Destinations
            </h2>
            <p className="text-lg text-white/70">
              We scout the globe for the most awe-inspiring, tranquil, and energetically charged locations to host our transformative experiences.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Horizontal Scroll / Grid for locations */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer bg-dark-bg/50 rounded-3xl p-4 border border-dark-border hover:bg-dark-bg transition-colors"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5">
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                {loc.name}
              </h3>
              <p className="text-white/60 text-sm">
                {loc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
