import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X, Calendar, Stethoscope, Info, Mail } from 'lucide-react';
import { SITE_INFO, NAV_LINKS, CTA_BUTTON } from '../constants';

const iconMap = {
  services: Stethoscope,
  about: Info,
  contact: Mail,
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] bg-cream/95 backdrop-blur-[10px] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-[1.35rem] text-text [&>span]:text-teal">
          {SITE_INFO.name.replace('Center', '')}<span>Center</span>
        </Link>
        <nav
          className={`flex items-center gap-8 max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen max-md:w-[280px] max-md:bg-white max-md:flex-col max-md:items-start max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:shadow-[0_16px_48px_rgba(13,107,107,0.1)] max-md:transition-transform max-md:duration-300 max-md:ease-out ${
            menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => {
            const Icon = iconMap[link.id as keyof typeof iconMap];
            return (
              <Link key={link.id} to={link.href} onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-1.5 text-text-muted font-medium hover:text-teal">
                <Icon size={18} aria-hidden />
                {link.label}
              </Link>
            );
          })}
          <Link to={CTA_BUTTON.href} onClick={() => setMenuOpen(false)} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200">
            <Calendar size={18} aria-hidden />
            {CTA_BUTTON.text}
          </Link>
        </nav>
        <button
          type="button"
          className="flex md:hidden min-w-[44px] min-h-[44px] flex-col justify-center gap-1.5 p-2 bg-transparent"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} className="text-text" />
            </motion.span>
          ) : (
            <span className="flex flex-col gap-1.5">
              <span className="block w-6 h-0.5 bg-text rounded-[1px]" />
              <span className="block w-6 h-0.5 bg-text rounded-[1px]" />
              <span className="block w-6 h-0.5 bg-text rounded-[1px]" />
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
