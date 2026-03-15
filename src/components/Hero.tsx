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
    <section className="relative flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1200px] min-h-[calc(100vh-80px)] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center w-full">
        <motion.div
          className="text-left space-y-4 sm:space-y-5 md:space-y-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.div className="inline-flex items-center gap-2 py-1.5 px-3 sm:py-2 sm:px-4 bg-mint text-teal text-xs sm:text-sm font-semibold rounded-full tracking-wide" variants={fadeUp}>
            <Sparkles size={14} className="sm:w-4 sm:h-4" aria-hidden />
            {HERO_CONTENT.badge.text}
          </motion.div>
          <motion.h1 className="font-heading font-semibold text-text text-[clamp(1.75rem,6vw,3.5rem)] leading-[1.1] sm:leading-tight tracking-tight max-w-[18ch]" variants={fadeUp}>
            {HERO_CONTENT.heading}
          </motion.h1>
          <motion.p className="text-base sm:text-lg leading-[1.6] sm:leading-[1.7] text-text-muted max-w-[42ch]" variants={fadeUp}>
            {HERO_CONTENT.description}
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2" variants={fadeUp}>
            <a href={HERO_CONTENT.buttons.primary.href} className="inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-6 sm:px-7 font-semibold text-sm sm:text-base rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200 w-full sm:w-auto">
              <Calendar size={18} className="sm:w-5 sm:h-5" aria-hidden />
              {HERO_CONTENT.buttons.primary.text}
            </a>
            <a href={HERO_CONTENT.buttons.secondary.href} className="inline-flex items-center justify-center gap-2 py-3 sm:py-4 px-6 sm:px-7 font-semibold text-sm sm:text-base rounded-xl bg-transparent text-teal border-2 border-teal hover:bg-mint transition-all duration-200 w-full sm:w-auto">
              <Play size={18} className="sm:w-5 sm:h-5" aria-hidden />
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
          <div className="relative w-full max-w-[400px] sm:max-w-[480px] rounded-2xl sm:rounded-[20px] overflow-hidden shadow-[0_12px_32px_rgba(13,107,107,0.08)] sm:shadow-[0_16px_48px_rgba(13,107,107,0.1)]">
            <img
              src={heroImage}
              alt={HERO_CONTENT.image.alt}
              className="block w-full h-auto object-cover align-middle"
            />
            <motion.div
              className="absolute inset-[-1px] rounded-2xl sm:rounded-[20px] bg-gradient-to-br from-teal/10 to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              aria-hidden
            />
          </div>
          <motion.div
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 flex items-center gap-2 py-2 sm:py-2.5 px-3 sm:px-4 bg-white text-teal text-xs sm:text-sm font-semibold rounded-lg sm:rounded-xl shadow-[0_8px_24px_rgba(13,107,107,0.08)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sage animate-pulse" />
            {HERO_CONTENT.stats.successRate}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute hidden sm:flex bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 items-center gap-2 text-xs sm:text-sm text-text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>{HERO_CONTENT.scrollText}</span>
        <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px] animate-bounce" aria-hidden />
      </motion.div>
    </section>
  );
}
