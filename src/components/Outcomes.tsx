import { motion } from 'motion/react';

const stats = [
  { value: '10k+', label: 'Lives Transformed' },
  { value: '15+', label: 'Bespoke Locations' },
  { value: '50+', label: 'World-Class Coaches' },
  { value: '4.9/5', label: 'Average Rating' },
];

export default function Outcomes() {
  return (
    <section className="bg-dark-bg text-white py-16 border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl md:text-5xl font-serif text-white mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                {stat.value}
              </span>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-white/70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
