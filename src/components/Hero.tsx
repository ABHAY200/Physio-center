import { motion } from 'framer-motion';
import { Calendar, Play, Sparkles, ArrowRight } from 'lucide-react';
import heroImage from '../assets/hero-image.png';
import { HERO_CONTENT } from '../constants';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  return (
    <section className="relative py-12 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-16 max-w-[1200px] h-[calc(100vh-80px)] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[min(85vh,640px)]">
        <motion.div
          className="text-left lg:text-left"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inline-flex items-center gap-2 py-2 px-4 bg-mint text-teal text-sm font-semibold rounded-full mb-6 tracking-wide" variants={fadeUp}>
            <Sparkles size={16} aria-hidden />
            {HERO_CONTENT.badge.text}
          </motion.div>
          <motion.h1 className="font-heading font-semibold text-text text-[clamp(2.25rem,5vw,3.5rem)] leading-tight tracking-tight mb-5 max-w-[18ch]" variants={fadeUp}>
            {HERO_CONTENT.heading}
          </motion.h1>
          <motion.p className="text-lg leading-[1.7] text-text-muted mb-8 max-w-[42ch]" variants={fadeUp}>
            {HERO_CONTENT.description}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={fadeUp}>
            <a href={HERO_CONTENT.buttons.primary.href} className="inline-flex items-center justify-center gap-2 py-4 px-7 font-semibold text-base rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200">
              <Calendar size={20} aria-hidden />
              {HERO_CONTENT.buttons.primary.text}
            </a>
            <a href={HERO_CONTENT.buttons.secondary.href} className="inline-flex items-center justify-center gap-2 py-4 px-7 font-semibold text-base rounded-xl bg-transparent text-teal border-2 border-teal hover:bg-mint transition-all duration-200">
              <Play size={20} aria-hidden />
              {HERO_CONTENT.buttons.secondary.text}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative flex justify-center items-center lg:order-none order-first"
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[480px] rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(13,107,107,0.1)]">
            <img
              src={heroImage}
              alt={HERO_CONTENT.image.alt}
              className="block w-full h-auto object-cover align-middle"
            />
            <motion.div
              className="absolute inset-[-1px] rounded-[20px] bg-gradient-to-br from-teal/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              aria-hidden
            />
          </div>
          <motion.div
            className="absolute bottom-6 left-0 lg:left-0 flex items-center gap-2 py-2.5 px-4 bg-white text-teal text-sm font-semibold rounded-xl shadow-[0_8px_24px_rgba(13,107,107,0.08)] lg:left-0 max-lg:left-1/2 max-lg:-translate-x-1/2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            {HERO_CONTENT.stats.successRate}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>{HERO_CONTENT.scrollText}</span>
        <ArrowRight size={18} className="animate-bounce" aria-hidden />
      </motion.div>
    </section>
  );
}
