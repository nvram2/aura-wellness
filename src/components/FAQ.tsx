import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is included in the retreat cost?",
    answer: "Our retreats are all-inclusive. This covers your luxury accommodation, daily organic meals tailored to your dietary needs, all scheduled activities (yoga, meditation, workshops), airport transfers, and access to all resort amenities."
  },
  {
    question: "Do I need prior experience with yoga or meditation?",
    answer: "Not at all. Our retreats are designed to accommodate all levels, from complete beginners to advanced practitioners. Our world-class coaches will tailor the practices to your individual needs and experience level."
  },
  {
    question: "What should I pack?",
    answer: "Once your booking is confirmed, you will receive a comprehensive welcome packet that includes a detailed packing list specific to your chosen location and the season."
  },
  {
    question: "Are the retreats suitable for solo travelers?",
    answer: "Absolutely. Many of our guests travel solo. Our retreats offer a welcoming and inclusive environment where you can connect with like-minded individuals or enjoy your personal space."
  },
  {
    question: "Can you accommodate specific dietary restrictions?",
    answer: "Yes, our private chefs are experienced in accommodating a wide range of dietary needs, including vegan, gluten-free, dairy-free, and allergies. You can specify your requirements during the booking process."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-dark-bg border-t border-dark-border" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Everything you need to know about our transformative retreat experiences.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-dark-border rounded-2xl overflow-hidden bg-dark-surface"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-white/70 text-sm leading-relaxed border-t border-dark-border pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
