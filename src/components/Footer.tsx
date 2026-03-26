import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from './Logo';
import { Modal } from './Modal';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from '../constants/legal';

export const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="relative bg-brand-bg/80 backdrop-blur-xl border-t border-brand-border/20 pt-16 pb-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo height={70} />
            <p className="text-brand-text/70 text-sm leading-relaxed">
              Empowering students, startups, and small businesses with cutting-edge digital solutions. From portfolios to enterprise-grade websites.
            </p>
            <div className="flex items-center gap-4">

              <a
                href="https://vings-tech-project-hub.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text/50 hover:text-[#000] dark:hover:text-[#fff] hover:bg-brand-text/10 hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all hover:-translate-y-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 22.525H0l12-21.05 12 21.05z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/vings-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text/50 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/vingstech.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-text/5 flex items-center justify-center text-brand-text/50 hover:text-[#E4405F] hover:bg-[#E4405F]/10 hover:shadow-[0_0_15px_rgba(228,64,95,0.3)] transition-all hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-brand-text font-bold mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="group relative text-brand-text/70 hover:text-cyan-400 text-sm transition-colors inline-flex overflow-hidden"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="text-center">
            <h4 className="text-brand-text font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'Website Refurbishing', 'Branding & Logo', 'Student Portfolios'].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="group relative text-brand-text/70 hover:text-cyan-400 text-sm transition-colors inline-flex overflow-hidden"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-text font-bold mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hellovingstech@gmail.com"
                  className="group flex items-center gap-4 w-full p-4 rounded-xl bg-brand-card/50 hover:bg-brand-card border border-brand-border/30 hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-brand-text/80 text-sm font-medium z-10 group-hover:text-brand-text transition-colors">hellovingstech@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/+918778264166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full p-4 rounded-xl bg-brand-card/50 hover:bg-brand-card border border-brand-border/30 hover:border-[#25D366]/30 hover:shadow-[0_0_20px_rgba(37,211,102,0.15)] transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <span className="text-brand-text/80 text-sm font-medium z-10 group-hover:text-brand-text transition-colors">+91 877 826 4166</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vingstech.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 w-full p-4 rounded-xl bg-brand-card/50 hover:bg-brand-card border border-brand-border/30 hover:border-[#E4405F]/30 hover:shadow-[0_0_20px_rgba(228,64,95,0.15)] transition-all relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4405F]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="w-10 h-10 rounded-lg bg-[#E4405F]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-5 h-5 text-[#E4405F]" />
                  </div>
                  <span className="text-brand-text/80 text-sm font-medium z-10 group-hover:text-brand-text transition-colors">@vingstech.in</span>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-border/30 flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-brand-text/40 text-xs">
            © {new Date().getFullYear()} Vings Tech. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="relative text-brand-text/40 hover:text-brand-text text-xs transition-colors group"
            >
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-text/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
            <button
              onClick={() => setIsTermsOpen(true)}
              className="relative text-brand-text/40 hover:text-brand-text text-xs transition-colors group"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-brand-text/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="Privacy Policy"
      >
        {PRIVACY_POLICY}
      </Modal>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="Terms of Service"
      >
        {TERMS_OF_SERVICE}
      </Modal>
    </footer>
  );
};
