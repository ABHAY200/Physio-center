import { Link } from 'react-router-dom';
import { Stethoscope, Info, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-auto bg-teal-dark text-white py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto text-center">
        <Link to="/" className="font-heading font-bold text-[1.35rem] text-white [&>span]:text-mint">
          Physio<span>Center</span>
        </Link>
        <p className="text-white/85 my-2 mb-4 text-[0.95rem]">Your partner in recovery.</p>
        <nav className="flex justify-center gap-6 mb-6">
          <Link to="/#specialties" className="inline-flex items-center gap-1.5 text-white/90 hover:text-white">
            <Stethoscope size={16} aria-hidden />
            Services
          </Link>
          <Link to="/#about" className="inline-flex items-center gap-1.5 text-white/90 hover:text-white">
            <Info size={16} aria-hidden />
            About
          </Link>
          <Link to="/#contact" className="inline-flex items-center gap-1.5 text-white/90 hover:text-white">
            <Mail size={16} aria-hidden />
            Contact
          </Link>
        </nav>
        <p className="text-sm text-white/60 m-0">© {new Date().getFullYear()} PhysioCenter. All rights reserved.</p>
      </div>
    </footer>
  );
}
