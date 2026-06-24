import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  retreatName?: string;
  location?: string;
  date?: string;
  description?: string;
  benefits?: string[];
  bestFor?: string;
  typeData?: {
    title: string;
    description: string;
    features: string[];
  };
}

export default function BookingModal({ isOpen, onClose, retreatName, location, date, description, benefits, bestFor, typeData }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/kevinseq007@gmail.com", {
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
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed top-[5%] bottom-[5%] left-1/2 -translate-x-1/2 w-full max-w-2xl bg-dark-surface border border-dark-border rounded-3xl z-[101] overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="flex justify-between items-center p-6 border-b border-dark-border shrink-0">
              <h3 className="text-xl font-serif text-white">Retreat Details & Booking</h3>
              <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-2">
                <X size={24} />
              </button>
            </div>
            
            <div className="overflow-y-auto p-6 md:p-8 flex-grow">
              {typeData && (
                <div className="mb-10 bg-dark-bg p-6 rounded-2xl border border-dark-border">
                  <h4 className="text-2xl font-serif text-white mb-4">{typeData.title}</h4>
                  <div className="mt-4 text-sm text-white/70 leading-relaxed mb-6">
                    {typeData.description}
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-xs uppercase tracking-widest font-bold text-white/50">Experience Highlights</h5>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {typeData.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                          <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {retreatName && (
                <div className="mb-10 bg-dark-bg p-6 rounded-2xl border border-dark-border">
                  <h4 className="text-2xl font-serif text-white mb-4">{retreatName}</h4>
                  <div className="flex flex-wrap gap-6 text-sm text-white/70">
                    {location && (
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 block">Destination</span>
                        <span>{location}</span>
                      </div>
                    )}
                    {date && (
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/50 block">Dates</span>
                        <span>{date}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-6 text-sm text-white/60 leading-relaxed">
                    {description || "Immerse yourself in a transformative experience designed to realign your mind, body, and spirit. Expect daily guided practices, profound teachings, and intentional nourishment."}
                  </div>
                  
                  {(benefits || bestFor) && (
                    <div className="mt-8 pt-6 border-t border-dark-border space-y-6">
                      {bestFor && (
                        <div>
                          <h5 className="text-xs uppercase tracking-widest font-bold text-white/50 mb-2">Best For</h5>
                          <p className="text-sm text-white/80">{bestFor}</p>
                        </div>
                      )}
                      {benefits && benefits.length > 0 && (
                        <div>
                          <h5 className="text-xs uppercase tracking-widest font-bold text-white/50 mb-4">Included Benefits</h5>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="relative">
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute -top-16 left-0 right-0 mx-auto w-max bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-2xl z-10"
                    >
                      <CheckCircle2 className="text-white w-5 h-5" />
                      <span className="text-sm font-medium tracking-wide">Request submitted successfully. We will be in touch shortly.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="modal-name" className="text-xs uppercase tracking-widest text-white/70 font-bold">Name</label>
                      <input 
                        type="text" 
                        id="modal-name" 
                        name="name" 
                        required
                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="modal-email" className="text-xs uppercase tracking-widest text-white/70 font-bold">Email</label>
                      <input 
                        type="email" 
                        id="modal-email" 
                        name="email" 
                        required
                        className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>
                  
                  {!retreatName && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="modal-location" className="text-xs uppercase tracking-widest text-white/70 font-bold">Preferred Location</label>
                        <select 
                          id="modal-location" 
                          name="location" 
                          required
                          defaultValue={location || ""}
                          className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none"
                        >
                          <option value="" disabled>Select a destination</option>
                          <option value="Goa, India">Goa, India</option>
                          <option value="Ubud, Bali">Ubud, Bali</option>
                          <option value="Zermatt, Switzerland">Zermatt, Switzerland</option>
                          <option value="Kyoto, Japan">Kyoto, Japan</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="modal-dates" className="text-xs uppercase tracking-widest text-white/70 font-bold">Preferred Dates</label>
                        <input 
                          type="text" 
                          id="modal-dates" 
                          name="dates" 
                          required
                          defaultValue={date || ""}
                          className="w-full bg-dark-bg border border-dark-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                          placeholder="e.g. October 2026"
                        />
                      </div>
                    </div>
                  )}

                  {retreatName && (
                    <>
                      <input type="hidden" name="retreat" value={retreatName} />
                      <input type="hidden" name="location" value={location} />
                      <input type="hidden" name="dates" value={date} />
                    </>
                  )}

                  <div className="space-y-2">
                    <label htmlFor="modal-message" className="text-xs uppercase tracking-widest text-white/70 font-bold">Additional Notes (Optional)</label>
                    <textarea 
                      id="modal-message" 
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
                    className="w-full bg-white text-dark-bg hover:bg-white/90 px-8 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-colors disabled:opacity-50 mt-4"
                  >
                    {isSubmitting ? 'Processing...' : 'Request Booking'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
