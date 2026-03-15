import { Link } from 'react-router-dom';
import { Stethoscope, Info, Mail } from 'lucide-react';
import { SITE_INFO, NAV_LINKS } from '../constants';

const iconMap = {
  services: Stethoscope,
  about: Info,
  contact: Mail,
};

export function Footer() {
  return (
    <footer className="mt-auto bg-teal-dark text-white py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto text-center">
        <Link to="/" className="font-heading font-bold text-[1.35rem] text-white [&>span]:text-mint">
          {SITE_INFO.name.replace('Center', '')}<span>Center</span>
        </Link>
        <p className="text-white/85 my-2 mb-4 text-[0.95rem]">{SITE_INFO.tagline}</p>
        <nav className="flex justify-center gap-6 mb-6">
          {NAV_LINKS.map((link) => {
            const Icon = iconMap[link.id as keyof typeof iconMap];
            return (
              <Link key={link.id} to={link.href} className="inline-flex items-center gap-1.5 text-white/90 hover:text-white">
                <Icon size={16} aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <p className="text-sm text-white/60 m-0">© {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
