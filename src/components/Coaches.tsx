import { motion } from 'motion/react';

const coaches = [
  {
    name: 'Elena Rostova',
    role: 'Lead Yoga Instructor',
    image: '/images/coach-1.jpg',
    description: '15+ years of experience in Ashtanga and Vinyasa flow, guiding practitioners to their edge with grace.'
  },
  {
    name: 'Yogi Prabhu',
    role: 'Meditation & Breathwork',
    image: '/images/coach-2.jpg',
    description: 'Former monk turned modern mindfulness guide, specializing in deeply restorative somatic practices.'
  },
  {
    name: 'Sara Nali',
    role: 'Holistic Nutritionist',
    image: '/images/coach-3.jpg',
    description: 'Designing nourishing, plant-forward culinary experiences that elevate both body and spirit.'
  }
];

export default function Coaches() {
  return (
    <section className="py-24 bg-dark-surface" id="coaches">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Coaches
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            World-class luminaries dedicated to guiding your transformative journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 bg-dark-bg">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">{coach.name}</h3>
              <p className="text-xs uppercase tracking-widest text-gold font-bold mb-4">{coach.role}</p>
              <p className="text-white/70 text-sm leading-relaxed">{coach.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
