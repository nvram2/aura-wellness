import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, User } from 'lucide-react';
import BookingModal from './BookingModal';

const types = [
  {
    id: 'group',
    title: 'Group Retreats',
    description: 'Connect with like-minded individuals in a shared journey of growth. Experience the collective energy of daily group sessions, communal dining, and shared workshops.',
    icon: Users,
    image: '/images/retreat-group.jpg',
    features: ['Daily group fitness & yoga', 'Community workshops', 'Shared dining experiences', 'Built-in support network']
  },
  {
    id: 'solo',
    title: 'Solo Immersions',
    description: 'A deeply personal journey tailored entirely to your needs. Disconnect from the noise and reconnect with yourself through 1-on-1 coaching, private meditation, and customized itineraries.',
    icon: User,
    image: '/images/retreat-solo.jpg',
    features: ['1-on-1 personalized coaching', 'Private wellness sessions', 'Custom nutrition plans', 'Complete solitude & privacy']
  }
];

export default function RetreatTypes() {
  const [selectedType, setSelectedType] = useState<typeof types[0] | null>(null);

  return (
    <section className="py-24 bg-dark-bg" id="experience">
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
            Your Path, Your Pace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/70 max-w-2xl mx-auto"
          >
            Choose how you want to experience your transformation. Whether you seek the energy of a group or the quiet focus of solitude, we have a path for you.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {types.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-dark-border bg-dark-surface">
                <img
                  src={type.image}
                  alt={type.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center text-white">
                  <type.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-white" style={{ fontFamily: '"Playfair Display", serif' }}>
                  {type.title}
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                {type.description}
              </p>
              <ul className="space-y-3 mb-8">
                {type.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-white/90 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => setSelectedType(type)}
                className="self-start text-[10px] uppercase tracking-widest font-bold text-white border-b border-white/50 pb-1 hover:text-white/70 hover:border-white/30 transition-colors"
              >
                Learn more
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal 
        isOpen={!!selectedType} 
        onClose={() => setSelectedType(null)} 
        typeData={selectedType ? {
          title: selectedType.title,
          description: selectedType.description,
          features: selectedType.features
        } : undefined}
      />
    </section>
  );
}
