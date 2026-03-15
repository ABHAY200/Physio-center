import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SPECIALTIES_CONTENT, SPECIALTIES_LIST } from '../constants';

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export function Specialties() {
  return (
    <motion.section
      id="specialties"
      className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1200px] mx-auto w-full"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <motion.h2 className="text-center mb-2 font-heading font-semibold text-[clamp(1.5rem,4vw,2.25rem)] text-text px-4" variants={cardItem}>
        {SPECIALTIES_CONTENT.heading}
      </motion.h2>
      <motion.p className="text-center text-base sm:text-lg md:text-xl text-teal font-semibold mb-2 px-4" variants={cardItem}>
        {SPECIALTIES_CONTENT.subheading}
      </motion.p>
      <motion.p className="text-center text-sm sm:text-base max-w-[600px] mx-auto mb-8 sm:mb-10 text-text-muted px-4" variants={cardItem}>
        {SPECIALTIES_CONTENT.description}
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
        {SPECIALTIES_LIST.map(({ title, description, icon: Icon }) => (
          <motion.article
            key={title}
            className="bg-white p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-[20px] border border-border transition-shadow transition-transform duration-200 hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] hover:-translate-y-0.5"
            variants={cardItem}
          >
            <span className="inline-flex mb-3 sm:mb-4 py-2 sm:py-2.5 px-2.5 sm:px-3 bg-mint text-teal rounded-lg sm:rounded-xl">
              <Icon size={20} className="sm:w-6 sm:h-6" aria-hidden />
            </span>
            <h4 className="font-heading font-semibold text-base sm:text-lg text-teal mb-2">{title}</h4>
            <p className="text-sm sm:text-[0.95rem] text-text-muted mb-3 sm:mb-4 leading-relaxed">{description}</p>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-semibold text-sm sm:text-[0.95rem] text-teal hover:text-teal-dark">
              Learn More
              <ArrowRight size={14} className="sm:w-4 sm:h-4" aria-hidden />
            </a>
          </motion.article>
        ))}
      </div>
      <motion.div className="text-center" variants={cardItem}>
        <a href={SPECIALTIES_CONTENT.ctaButton.href} className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm sm:text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200 w-full sm:w-auto max-w-xs sm:max-w-none">
          {SPECIALTIES_CONTENT.ctaButton.text}
        </a>
      </motion.div>
    </motion.section>
  );
}
