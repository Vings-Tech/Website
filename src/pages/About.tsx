import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Users, Heart, Lightbulb, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your goals, target audience, and project requirements through in-depth consultation.',
    icon: Lightbulb,
  },
  {
    title: 'Design',
    description: 'Our creative team crafts modern, intuitive designs that align with your brand identity and user needs.',
    icon: Eye,
  },
  {
    title: 'Development',
    description: 'We bring the designs to life using cutting-edge technologies, ensuring performance, security, and scalability.',
    icon: Target,
  },
  {
    title: 'Launch',
    description: 'After rigorous testing, we deploy your project and provide ongoing support to ensure long-term success.',
    icon: Rocket,
  },
];

const values = [
  { title: 'Innovation', desc: 'Always pushing boundaries with the latest tech.', icon: Lightbulb },
  { title: 'Integrity', desc: 'Transparent communication and honest advice.', icon: ShieldCheck },
  { title: 'Excellence', desc: 'Delivering only the highest quality results.', icon: Heart },
  { title: 'Collaboration', desc: 'Working closely with you as a dedicated partner.', icon: Users },
];

import { Rocket } from 'lucide-react';
import { Logo } from '../components/Logo';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none -z-10">
        <Logo height={800} showText={false} className="rotate-12" />
      </div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 inline-block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We Build the <span className="text-cyan-400">Future</span> of the Web
            </h1>
            <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed mb-8">
              Founded with a passion for digital excellence, Vings Tech has grown from a small team of enthusiasts into a full-service digital agency. We specialize in creating high-impact websites that help students launch their careers and businesses scale their operations.
            </p>
            <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed">
              Our mission is to democratize high-quality web development, making premium digital solutions accessible to everyone from individual students to growing startups.
            </p>
          </motion.div>
          <div className="relative">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-brand-border overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-transparent opacity-60" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] bg-brand-card border border-brand-border hover:border-blue-500/30 transition-all">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 md:mb-8">
              <Target className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Mission</h2>
            <p className="text-brand-text/70 text-base md:text-lg leading-relaxed">
              To empower individuals and organizations by providing innovative, high-quality, and accessible digital solutions that drive growth and success in the modern world.
            </p>
          </div>
          <div className="p-8 md:p-12 rounded-2xl md:rounded-[2.5rem] bg-brand-card border border-brand-border hover:border-cyan-500/30 transition-all">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 md:mb-8">
              <Eye className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our Vision</h2>
            <p className="text-brand-text/70 text-base md:text-lg leading-relaxed">
              To be the leading digital partner for the next generation of innovators, recognized for our technical excellence, creative design, and commitment to client success.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A streamlined, collaborative approach to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-brand-card border border-brand-border group-hover:bg-brand-text/5 transition-all h-full">
                <div className="text-4xl md:text-5xl font-bold text-brand-text/10 mb-4 md:mb-6 group-hover:text-blue-500/20 transition-colors">0{idx + 1}</div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 md:mb-6">
                  <step.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{step.title}</h3>
                <p className="text-brand-text/70 text-xs md:text-sm leading-relaxed">{step.description}</p>
              </div>
              {idx < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-10">
                  <ArrowRight className="w-8 h-8 text-brand-text/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto">
        <div className="p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] bg-brand-card border border-brand-border relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold mb-8 md:mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="space-y-3 md:space-y-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <value.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold">{value.title}</h4>
                  <p className="text-brand-text/70 text-xs md:text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
