import React from 'react';
import { motion } from 'motion/react';
import { Code, Palette, Zap, GraduationCap, CheckCircle2, ArrowRight, ExternalLink, Globe, Smartphone, Layout, Search, Shield } from 'lucide-react';
import { cn } from '../utils/cn';

const detailedServices = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Custom, high-performance websites built with modern technologies like React, Frontend Development, and Tailwind CSS. We focus on speed, scalability, and user experience.',
    icon: Code,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    deliverables: [
      'Custom React/TypeScript Development',
      'Responsive Design for all devices',
      'Fully Functional Frontend',
      'Performance Tuning',
      'Content Management System (CMS) Integration',
      'User Friendly UI/UX',
    ],
  },
  {
    id: 'refurbishing',
    title: 'Website Refurbishing',
    description: 'Give your outdated website a fresh, modern look and improved performance. We analyze your current site and rebuild it using the latest industry standards.',
    icon: Zap,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    deliverables: [
      'UI/UX Audit & Redesign',
      'Modern Tech Stack Migration',
      'Mobile Responsiveness Fixes',
      'Page Speed Optimization',
      'Accessibility Improvements',
      'SEO Content Updates',
    ],
  },
  {
    id: 'branding',
    title: 'Branding & Logo Design',
    description: 'Create a unique and memorable brand identity with professional logo design and comprehensive brand guidelines that resonate with your target audience.',
    icon: Palette,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    deliverables: [
      'Custom Logo Design',
      'Brand Color Palette & Typography',
      'Brand Style Guidelines',
      'Social Media Assets',
      'Business Card & Stationery Design',
      'Brand Voice & Messaging',
    ],
  },
  {
    id: 'student-portfolios',
    title: 'Student Portfolios',
    description: 'Stand out in the job market with a professional portfolio website. We help students showcase their projects, skills, and achievements effectively.',
    icon: GraduationCap,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    deliverables: [
      'Personal Branding',
      'Project Showcase Grid',
      'Interactive Resume Section',
      'Contact Form Integration',
      'GitHub/Vercel Integration',
      'One Free Application',
    ],
  },
];

const projects = [
  {
    title: 'Personal Portfolio Website',
    description: 'A modern, responsive personal portfolio designed to showcase skills, projects, and achievements.',
    image: '/portfolio.png',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://portfolio-3-wine-one.vercel.app/',
    target: '_blank'
  },
  {
    title: 'Nova Tech Company Website',
    description: 'A modern, high-performance IT solutions company website designed to showcase UI',
    image: 'public/company.png',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://project-5-nt.vercel.app/',
    target: '_blank'
  },
  {
    title: 'EtherNote Web App',
    description: 'A modern note-taking web application that allows users to create, manage, and organize notes efficiently with a clean UI and smooth user experience.',
    image: '/app.png',
    tech: ['React', 'JavaScript', 'Local Storage'],
    link: 'https://ethernote.vercel.app/',
    target: '_blank'
  },
  {
    title: 'T-Strike Web Game',
    description: 'An interactive browser-based game featuring smooth controls, engaging gameplay, and responsive design for an immersive user experience.',
    image: '/game.png',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://game-t-strike.vercel.app/',
    target: '_blank'
  }
];

const pricingPlans = [
  {
    title: 'Business Website',
    price: '3999',
    planValue: 'Standard Business Website',
    description: 'Perfect for small to medium businesses looking for a professional online presence.',
    features: [
      'Custom React Design',
      'Mobile Responsive',
      'SEO Optimization',
      'Contact Form',
      '1 Month Support',
    ],
    icon: Globe,
    color: 'text-blue-400',
    highlight: false
  },
  {
    title: 'Website Refurbishing',
    price: '1999',
    planValue: 'Website Refurbishing',
    description: 'Give your existing website a modern makeover and better performance.',
    features: [
      'UI/UX Refresh',
      'Speed Optimization',
      'Mobile Fixes',
      'Security Updates',
      'Content Migration',
    ],
    icon: Zap,
    color: 'text-cyan-400',
    highlight: false
  },
  {
    title: 'Branding & Logo',
    price: '1499',
    planValue: 'Branding & Logo Design',
    description: 'Complete visual identity for your brand to stand out from the competition.',
    features: [
      'Professional Logo',
      'Color Palette',
      'Typography Selection',
      'Business Card Design',
      'Social Media Kit',
    ],
    icon: Palette,
    color: 'text-indigo-400',
    highlight: false
  },
  {
    title: 'Student Portfolio',
    price: '999 / 1499',
    planValue: 'Student Portfolio Basic',
    description: 'Special discounted rates for students to kickstart their professional journey.',
    features: [
      '₹999: 1 Free App Deployment',
      '₹1499: 2 Free App Deployments',
      'Modern Tech Stack',
      'Resume Integration',
      'Priority Support',
    ],
    icon: GraduationCap,
    color: 'text-emerald-400',
    highlight: true,
    tag: 'Best Value'
  }
];

export const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 md:px-6">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 inline-block">Our Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight max-w-4xl mx-auto">
            Comprehensive Digital Solutions for <span className="text-cyan-400">Every Need</span>
          </h1>
          <p className="text-brand-text/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            From initial concept to final launch, we provide the technical expertise and creative vision to help you succeed online.
          </p>
        </motion.div>
      </section>

      {/* Detailed Services Grid */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {detailedServices.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] bg-brand-card border border-brand-border hover:bg-brand-text/5 transition-all flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6 md:mb-8">
                <div className={cn("w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center", service.bg)}>
                  <service.icon className={cn("w-6 h-6 md:w-8 md:h-8", service.color)} />
                </div>
                <div className="text-brand-text/10 font-bold text-2xl md:text-4xl">0{idx + 1}</div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{service.title}</h2>
              <p className="text-brand-text/70 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                {service.description}
              </p>
              <div className="mt-auto">
                <h4 className="text-brand-text font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  What you get:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-brand-text/70 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Showcase */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Project Showcase</h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto text-lg">
            A selection of our recent work across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-brand-card border border-brand-border"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 hidden md:flex">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-brand-text mb-2">{project.title}</h3>
                <p className="text-brand-text/80 text-sm mb-6 line-clamp-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-brand-text transition-colors"
                >
                  Live Preview <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              {/* Mobile details (cleaner layout) */}
              <div className="md:hidden p-5 bg-brand-card">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-brand-text/70 text-xs mb-4 line-clamp-2">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 text-cyan-400 font-bold text-sm"
                >
                  Live Preview <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-brand-text/70 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your needs. No hidden fees, just pure value.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={cn(
                "relative p-8 rounded-[2rem] bg-brand-card border transition-all duration-500 flex flex-col h-full",
                plan.highlight 
                  ? "border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50" 
                  : "border-brand-border hover:border-brand-text/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              <div className="mb-8">
                <div className={cn("w-12 h-12 rounded-xl bg-brand-text/5 flex items-center justify-center mb-6")}>
                  <plan.icon className={cn("w-6 h-6", plan.color)} />
                </div>
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <p className="text-brand-text/60 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-brand-text/60">₹</span>
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 mt-auto">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-brand-text/70">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`/contact?plan=${encodeURIComponent(plan.planValue)}`}
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-center transition-all duration-300",
                  plan.highlight
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:scale-[1.02]"
                    : "bg-brand-text/5 hover:bg-brand-text/10 text-brand-text border border-brand-border"
                )}
              >
                Choose Plan
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto">
        <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-brand-bg to-brand-card border border-brand-border text-center relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 blur-[120px] rounded-full" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Have a specific requirement?</h2>
            <p className="text-brand-text/70 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              We love tackling unique challenges. Tell us about your project and let's find the perfect solution.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Get in Touch
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
