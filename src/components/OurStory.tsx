import { motion } from 'motion/react';
import { Flower2, Sparkles, Mountain } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="py-24 bg-dark-bg" id="our-story">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="w-16 h-[1px] bg-white"></div>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Philosophy –<br />The Aura Experience
            </h2>
            <div className="space-y-6 text-white/70">
              <p className="text-lg">
                We believe that true transformation happens when we step away from the noise and immerse ourselves in intentional environments.
              </p>
              
              <div className="pt-6 space-y-8">
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-dark-bg transition-colors duration-300">
                    <Flower2 size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-gold transition-colors duration-300">Mindful Integration</h3>
                    <p className="text-sm">Holistic practices designed to align your mind, body, and spirit for lasting well-being.</p>
                  </div>
                </div>

                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-dark-bg transition-colors duration-300">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-gold transition-colors duration-300">World-Class Guidance</h3>
                    <p className="text-sm">Learn from master practitioners, carefully vetted for their expertise and compassionate approach.</p>
                  </div>
                </div>

                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-dark-border flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-dark-bg transition-colors duration-300">
                    <Mountain size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-serif mb-2 group-hover:text-gold transition-colors duration-300">Bespoke Sanctuaries</h3>
                    <p className="text-sm">We carefully select the world's most serene and energetically potent locations for our retreats.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 h-full"
          >
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden bg-dark-surface relative group">
                <img src="/images/story-1.jpg" alt="Wellness gathering" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-3xl overflow-hidden bg-dark-surface relative group">
                <img src="/images/story-2.jpg" alt="Yoga by the sea" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="rounded-3xl overflow-hidden bg-dark-surface relative group">
                <img src="/images/story-3.jpg" alt="Luxury resort pool" className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="rounded-3xl overflow-hidden bg-dark-surface relative group">
                <img src="/images/story-4.jpg" alt="Fine dining" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
