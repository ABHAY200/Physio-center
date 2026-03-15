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
    <>
      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-[100] bg-cream/95 backdrop-blur-[10px] border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="font-heading font-bold text-lg sm:text-xl md:text-[1.35rem] text-text [&>span]:text-teal">
            {SITE_INFO.name.replace('Center', '')}<span>Center</span>
          </Link>
          <nav
          className={`flex items-center gap-6 md:gap-8 max-md:fixed max-md:top-0 max-md:right-0 max-md:h-screen max-md:w-[280px] max-md:z-[95] max-md:bg-white max-md:flex-col max-md:items-start max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:shadow-[0_16px_48px_rgba(13,107,107,0.1)] max-md:transition-transform max-md:duration-300 max-md:ease-out ${
            menuOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
          }`}
        >
          {/* Close button for mobile sidebar */}
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="md:hidden absolute top-5 right-5 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg hover:bg-cream transition-colors"
            aria-label="Close menu"
          >
            <X size={24} className="text-text" />
          </button>

          {NAV_LINKS.map((link) => {
            const Icon = iconMap[link.id as keyof typeof iconMap];
            return (
              <Link 
                key={link.id} 
                to={link.href} 
                onClick={() => setMenuOpen(false)} 
                className="inline-flex items-center gap-1.5 text-sm md:text-base text-text-muted font-medium hover:text-teal transition-colors"
              >
                <Icon size={16} className="md:w-[18px] md:h-[18px]" aria-hidden />
                {link.label}
              </Link>
            );
          })}
          <Link 
            to={CTA_BUTTON.href} 
            onClick={() => setMenuOpen(false)} 
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 font-semibold text-sm md:text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200 max-md:w-full"
          >
            <Calendar size={16} className="md:w-[18px] md:h-[18px]" aria-hidden />
            {CTA_BUTTON.text}
          </Link>
        </nav>
        <button
          type="button"
          className="flex md:hidden min-w-[44px] min-h-[44px] flex-col justify-center items-center gap-1.5 p-2 bg-transparent"
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
    </>
  );
}
