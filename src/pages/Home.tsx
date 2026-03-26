import React, { useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { ArrowRight, Code, Palette, Rocket, GraduationCap, Building2, Zap, Shield, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import { Logo } from '../components/Logo';

const services = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites built with modern technologies like React, Next.js, and Tailwind CSS.',
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Website Refurbishing',
    description: 'Give your outdated website a fresh, modern look and improved performance with our redesign services.',
    icon: Zap,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
  },
  {
    title: 'Branding & Logo',
    description: 'Create a unique and memorable brand identity with professional logo design and brand guidelines.',
    icon: Palette,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
  },
];

const targetAudience = [
  {
    title: 'Students',
    description: 'Stand out from the crowd with professional portfolio websites, resume showcases, and project displays.',
    icon: GraduationCap,
  },
  {
    title: 'Startups',
    description: 'Launch your digital presence quickly with scalable, high-conversion websites and strong branding.',
    icon: Rocket,
  },
  {
    title: 'Small Businesses',
    description: 'Modernize your business with professional websites that build trust and drive more customers.',
    icon: Building2,
  },
];

const stats = [
  { label: 'Projects Completed', value: '30+' },
  { label: 'Happy Clients', value: '20+' },
  { label: 'Student Portfolios', value: '50+' },
  { label: 'Startup Launches', value: '10+' },
];

const StudentOfferPopup: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-bg/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="bg-brand-card border border-cyan-500/30 p-8 rounded-[2.5rem] max-w-md w-full relative shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -ml-16 -mb-16" />

            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-brand-text/5 hover:bg-brand-text/10 transition-colors group"
            >
              <X className="w-5 h-5 text-brand-text/50 group-hover:text-brand-text" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>

              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs mb-3">Special Offer for Students</span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Portfolio Website <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Starting at ₹999</span></h3>
              <p className="text-brand-text/70 mb-8">
                Boost your career with a professional portfolio. Includes 1-year free deployment and custom domain setup.
              </p>

              <div className="flex flex-col w-full gap-3">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-lg hover:scale-[1.02] transition-all"
                >
                  View Plans
                </Link>
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-xl bg-brand-text/5 hover:bg-brand-text/10 text-brand-text font-bold transition-all"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const showTimer = setTimeout(() => {
      setShowPopup(true);
      window.history.pushState({ popup: true }, "");
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      // Auto-close after 2 seconds as requested
      const autoCloseTimer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      const handlePopState = () => {
        setShowPopup(false);
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        clearTimeout(autoCloseTimer);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [showPopup]);

  const closePopup = () => {
    setShowPopup(false);
    // If user closes manually, we should ideally go back in history if we pushed state
    // but just closing is safer to avoid accidental navigation
  };

  return (
    <div className="overflow-hidden">
      <StudentOfferPopup isOpen={showPopup} onClose={closePopup} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 md:px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/25 blur-[130px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/25 blur-[130px] rounded-full"
          />

          {/* Hero Logo Focus */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07] scale-150">
            <Logo height={600} showText={false} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
            >
              Next-Gen Digital Agency
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight mb-8 leading-[1.1]">
              Elevate Your <br />
              <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">Digital Presence</span>
            </h1>
            <p className="text-brand-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Vings Tech builds premium websites for students, startups, and small businesses. From portfolios to enterprise solutions, we bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="relative w-full sm:w-auto group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-80 transition-opacity duration-300 animate-pulse-slow" />
                <span className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto bg-brand-card/60 backdrop-blur-md border border-brand-border/50 text-brand-text px-8 py-4 rounded-full font-bold text-lg hover:border-blue-500/30 hover:bg-brand-card transition-all flex items-center justify-center"
              >
                View Services
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl bg-brand-card/40 border border-brand-border/30 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 will-change-transform"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-brand-text/50 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-24 bg-brand-bg relative px-4 md:px-6">
        {/* Section glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Who We Help</h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto text-lg">
              Tailored solutions for every stage of your digital journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {targetAudience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-brand-card border border-brand-border/50 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] hover:-translate-y-2 transition-all duration-300 group overflow-hidden will-change-transform"
              >
                {/* Card shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-brand-text/70 leading-relaxed mb-6 relative z-10">
                  {item.description}
                </p>
                <Link to="/services" className="relative z-10 text-blue-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-[0.06] pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] border border-blue-500/30 rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-cyan-500/30 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Services</h2>
              <p className="text-brand-text/70 text-lg">
                We combine creative design with robust engineering to deliver exceptional digital experiences.
              </p>
            </div>
            <Link to="/services" className="group text-cyan-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-brand-card border border-brand-border/50 hover:-translate-y-2 hover:border-opacity-60 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden will-change-transform"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top left, ${service.bg.includes('blue') ? 'rgba(59,130,246,0.07)' : service.bg.includes('cyan') ? 'rgba(34,211,238,0.07)' : 'rgba(99,102,241,0.07)'}, transparent 60%)` }} />
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", service.bg)}>
                  <service.icon className={cn("w-7 h-7", service.color)} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-brand-text/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-bg px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose <br /> Vings Tech?</h2>
            <div className="space-y-6">
              {[
                { title: 'Modern Tech Stack', desc: 'We use the latest technologies like React, Next.js, and Tailwind CSS for speed and scalability.', icon: Zap },
                { title: 'Responsive Design', desc: 'Your website will look stunning on every device, from mobile phones to ultra-wide monitors.', icon: Globe },
                { title: 'Security First', desc: 'We implement industry-standard security practices to keep your data and users safe.', icon: Shield },
                { title: 'Fast Delivery', desc: 'Our streamlined process ensures your project is delivered on time without compromising quality.', icon: Rocket },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-brand-text/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/20 p-6 md:p-8 flex items-center justify-center overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 text-center"
              >
                <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">100%</div>
                <div className="text-xl md:text-2xl font-semibold text-brand-text">Client Satisfaction</div>
              </motion.div>
            </div>
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/30 blur-3xl rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="py-24 px-4 md:px-6"
      >
        <div className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 p-8 md:p-20 text-center relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.3)]">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          {/* Animated glow within CTA */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-8">Ready to start your digital journey?</h2>
            <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-12">
              Join 100+ satisfied clients and let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg md:text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
