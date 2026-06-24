import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The most transformative 7 days of my life. Aura creates magic in every detail. The level of care and the sheer beauty of the location created an environment where true transformation was possible.",
    author: "Elena R.",
    retreat: "Wellness Architect",
  },
  {
    id: 2,
    text: "I attended a solo immersion when I was at a crossroads in my career. The targeted coaching helped me find clarity I hadn't felt in years. Aura Wellness operates on another level.",
    author: "James D.",
    retreat: "Solo Immersion, Swiss Alps",
  },
  {
    id: 3,
    text: "Every detail is considered. From the locally-sourced organic cuisine to the deeply spiritual sound baths. It's not just a retreat; it's a recalibration of your entire being.",
    author: "Sarah T.",
    retreat: "Oceanic Reset, Tulum",
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Words from Our Alumni
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-bg p-8 md:p-10 rounded-3xl border border-dark-border"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-bold text-[10px] uppercase tracking-widest text-white mb-1">{review.author}</p>
                <p className="text-[10px] uppercase tracking-wider text-white/50">{review.retreat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
