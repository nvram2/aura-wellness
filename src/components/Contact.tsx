import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kevin@madlabs.digital", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-dark-bg border-t border-dark-border" id="book">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-[1px] bg-white mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Reserve Your Sanctuary
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Take the first step toward profound transformation. Select your preferred retreat and dates.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-dark-surface p-8 md:p-12 rounded-3xl border border-dark-border relative"
        >
          <AnimatePresence>
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute -top-16 left-0 right-0 mx-auto w-max bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl"
              >
                <CheckCircle2 className="text-white w-5 h-5" />
                <span className="text-sm font-medium tracking-wide">Request submitted successfully. We will be in touch shortly.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/70 font-bold">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/70 font-bold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="hello@example.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="text-xs uppercase tracking-widest text-white/70 font-bold">Preferred Location</label>
                <select 
                  id="location" 
                  name="location" 
                  required
                  defaultValue=""
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none"
                >
                  <option value="" disabled>Select a destination</option>
                  <option value="Bali, Indonesia">Bali, Indonesia</option>
                  <option value="Zermatt, Switzerland">Zermatt, Switzerland</option>
                  <option value="Goa, India">Goa, India</option>
                  <option value="Kyoto, Japan">Kyoto, Japan</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="dates" className="text-xs uppercase tracking-widest text-white/70 font-bold">Preferred Dates</label>
                <input 
                  type="text" 
                  id="dates" 
                  name="dates" 
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="e.g. October 2026"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/70 font-bold">Additional Notes (Optional)</label>
              <textarea 
                id="message" 
                name="message" 
                rows={3}
                className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                placeholder="Any dietary requirements or specific goals?"
              ></textarea>
            </div>
            {/* Honeypot for FormSubmit */}
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-white text-dark-bg hover:bg-white/90 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Request Booking'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
