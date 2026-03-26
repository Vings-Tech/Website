import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Plus, Minus, Instagram } from 'lucide-react';
import { cn } from '../utils/cn';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline depends on the complexity of the project. A simple portfolio can take 1-2 weeks, while a more complex business website or startup platform can take 4-8 weeks.',
  },
  {
    question: 'Can you help with branding and logo design?',
    answer: 'Absolutely! We offer comprehensive branding services, including logo design, color palette selection, and brand guidelines.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Pricing varies based on project requirements. We offer competitive rates for students and flexible packages for startups and small businesses. Contact us for a free quote!',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes, every website we build is fully responsive and optimized for all devices, including mobile phones, tablets, and desktops.',
  },
];

const planOptions = [
  { value: 'Standard Business Website', label: 'Standard Business Website', price: '₹3999' },
  { value: 'Website Refurbishing', label: 'Website Refurbishing', price: '₹1999' },
  { value: 'Branding & Logo Design', label: 'Branding & Logo Design', price: '₹1499' },
  { value: 'Student Portfolio Basic', label: 'Student Portfolio Basic', price: '₹999' },
  { value: 'Student Portfolio Pro', label: 'Student Portfolio Pro', price: '₹1499' },
  { value: 'Other Inquiry', label: 'Other Inquiry', price: 'Variable' },
];

export const Contact: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  // Read initial plan from URL if available
  const initialPlan = typeof window !== 'undefined' 
    ? new URLSearchParams(window.location.search).get('plan') 
    : null;

  const [formData, setFormData] = useState({
    name: '',
    subject: initialPlan || 'Standard Business Website',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(
      `hi vings tech I'm ${formData.name}\ni visited your website and need to know more about the ${formData.subject} plan what time should you available to discuss these `
    );
    window.open(`https://wa.me/+918778264166?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-4 md:px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            Contact Us
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Amazing</span> Together
          </h1>
          <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Have a project in mind? Reach out to us today and let's discuss how we can help you achieve your digital goals.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="space-y-12 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.a
                  href="mailto:hellovingstech@gmail.com?subject=Project%20Inquiry%20-%20Vings%20Tech&body=Hello%20Vings%20Tech%20team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20project.%20Please%20let%20me%20know%20when%20you%20are%20available%20for%20a%20quick%20chat.%0D%0A%0D%0AThank%20you."
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative flex flex-col items-center text-center gap-4 p-8 rounded-[2rem] bg-brand-card/60 backdrop-blur-sm border border-brand-border/50 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)] transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all relative z-10">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Email Us</h4>
                    <span className="text-brand-text/70 block text-sm">hellovingstech@gmail.com</span>
                  </div>
                </motion.a>

                <motion.a
                  href="https://ig.me/m/vingstech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative flex flex-col items-center text-center gap-4 p-8 rounded-[2rem] bg-brand-card/60 backdrop-blur-sm border border-brand-border/50 hover:border-pink-500/40 hover:shadow-[0_0_50px_rgba(236,72,153,0.15)] transition-all group cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500/20 group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all relative z-10">
                    <Instagram className="w-8 h-8 text-pink-500" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2 group-hover:text-pink-500 transition-colors">Instagram</h4>
                    <span className="text-brand-text/70 block text-sm">@vingstech.in</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="relative p-10 rounded-[2.5rem] bg-brand-card/60 backdrop-blur-sm border border-brand-border/50 hover:border-blue-500/30 transition-all overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Send us a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text/60 ml-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border border-brand-border focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2 relative">
                    <label className="text-sm font-bold text-brand-text/60 ml-1">Subject / Website Plan</label>
                    
                    <div 
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border border-brand-border hover:border-blue-500/50 cursor-pointer flex items-center justify-between transition-all group"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-brand-text group-hover:text-blue-400 transition-colors">
                          {planOptions.find(p => p.value === formData.subject)?.label || 'Select a Plan'}
                        </span>
                        <span className="text-xs text-brand-text/50">
                          {planOptions.find(p => p.value === formData.subject)?.price}
                        </span>
                      </div>
                      <div className={cn("w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center transition-transform duration-300", isDropdownOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : "text-brand-text/50 group-hover:text-blue-400 group-hover:bg-blue-500/20")}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 py-2 rounded-2xl bg-brand-card/90 backdrop-blur-xl border border-brand-border shadow-xl overflow-hidden"
                        >
                          <div className="max-h-[240px] overflow-y-auto scrollbar-thin scrollbar-thumb-brand-border scrollbar-track-transparent">
                            {planOptions.map((plan) => (
                              <div
                                key={plan.value}
                                onClick={() => {
                                  setFormData({ ...formData, subject: plan.value });
                                  setIsDropdownOpen(false);
                                }}
                                className={cn(
                                  "px-6 py-3 cursor-pointer transition-all flex items-center justify-between group",
                                  formData.subject === plan.value 
                                    ? "bg-blue-500/10 border-l-2 border-blue-500" 
                                    : "hover:bg-brand-text/5 border-l-2 border-transparent hover:border-brand-text/20"
                                )}
                              >
                                <span className={cn(
                                  "font-medium transition-colors",
                                  formData.subject === plan.value ? "text-blue-400" : "text-brand-text group-hover:text-brand-text/80"
                                )}>
                                  {plan.label}
                                </span>
                                <span className={cn(
                                  "text-sm",
                                  formData.subject === plan.value ? "text-blue-400/80" : "text-brand-text/40 group-hover:text-brand-text/60"
                                )}>
                                  {plan.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-text/60 ml-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-4 rounded-2xl bg-brand-bg/50 border border-brand-border focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-[#25D366] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(37,211,102,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center gap-3 mt-8"
                  >
                    <MessageSquare className="w-6 h-6" />
                    Send via WhatsApp
                  </button>

                  <p className="text-center text-brand-text/40 text-xs">
                    By clicking send, you'll be redirected to WhatsApp to complete your message.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-brand-text/70 text-lg">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={cn(
                "rounded-3xl border transition-all duration-300 overflow-hidden",
                activeFaq === idx
                  ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/5 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]"
                  : "bg-brand-card/60 backdrop-blur-sm border-brand-border/50 hover:border-brand-text/20"
              )}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className={cn("text-xl font-bold transition-colors", activeFaq === idx ? "text-blue-400" : "")}>{faq.question}</span>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center transition-all shrink-0", activeFaq === idx ? "bg-blue-500/20 text-blue-400" : "bg-brand-text/10 text-brand-text/40")}>
                  {activeFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-brand-text/70 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
