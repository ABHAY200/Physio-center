import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT, TEAM_FEATURES } from '../constants';

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export function About() {
  return (
    <motion.section
      id="about"
      className="bg-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1200px] mx-auto w-full shadow-[0_2px_8px_rgba(13,107,107,0.06)]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <div>
        <motion.span className="inline-block text-xs sm:text-sm font-semibold text-teal uppercase tracking-widest mb-2" variants={item}>
          {ABOUT_CONTENT.badge}
        </motion.span>
        <motion.h2 className="font-heading font-semibold text-[clamp(1.5rem,4vw,2.25rem)] text-text text-left mb-3 sm:mb-4" variants={item}>
          {ABOUT_CONTENT.heading}
        </motion.h2>
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p key={index} className="max-w-[68ch] text-sm sm:text-base text-text-muted mb-3 sm:mb-4 leading-relaxed" variants={item}>
            {paragraph}
          </motion.p>
        ))}
        <motion.ul className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 p-0 list-none" variants={item}>
          {ABOUT_CONTENT.highlights.map((highlight) => (
            <li key={highlight} className="inline-flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4 bg-mint text-teal font-semibold text-xs sm:text-sm rounded-lg sm:rounded-xl">
              <CheckCircle2 size={16} className="sm:w-[18px] sm:h-[18px]" aria-hidden />
              {highlight}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-8 sm:mt-10 md:mt-12 pt-8 sm:pt-10 md:pt-12 border-t border-border">
        <motion.h3 className="text-center mb-5 sm:mb-6 font-heading font-semibold text-lg sm:text-xl text-text" variants={item}>
          {ABOUT_CONTENT.teamSection.heading}
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {TEAM_FEATURES.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="p-5 sm:p-6 bg-cream rounded-xl border border-border"
              variants={item}
            >
              <span className="inline-flex mb-2 sm:mb-3 text-teal">
                <Icon size={20} className="sm:w-[22px] sm:h-[22px]" aria-hidden />
              </span>
              <h4 className="font-heading font-semibold text-base sm:text-base text-teal mb-1.5 sm:mb-2">{title}</h4>
              <p className="text-xs sm:text-sm text-text-muted m-0 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
