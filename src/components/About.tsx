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
      className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 max-w-[1200px] mx-auto w-full shadow-[0_2px_8px_rgba(13,107,107,0.06)]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <div>
        <motion.span className="inline-block text-sm font-semibold text-teal uppercase tracking-widest mb-2" variants={item}>
          {ABOUT_CONTENT.badge}
        </motion.span>
        <motion.h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.25rem)] text-text text-left mb-4" variants={item}>
          {ABOUT_CONTENT.heading}
        </motion.h2>
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p key={index} className="max-w-[68ch] text-text-muted mb-4" variants={item}>
            {paragraph}
          </motion.p>
        ))}
        <motion.ul className="flex flex-wrap gap-4 mt-6 p-0 list-none" variants={item}>
          {ABOUT_CONTENT.highlights.map((highlight) => (
            <li key={highlight} className="inline-flex items-center gap-2 py-2 px-4 bg-mint text-teal font-semibold text-sm rounded-xl">
              <CheckCircle2 size={18} aria-hidden />
              {highlight}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="mt-12 pt-12 border-t border-border">
        <motion.h3 className="text-center mb-6 font-heading font-semibold text-xl text-text" variants={item}>
          {ABOUT_CONTENT.teamSection.heading}
        </motion.h3>
        <div className="grid grid-cols-1 min-[300px]:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
          {TEAM_FEATURES.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              className="p-6 bg-cream rounded-xl border border-border"
              variants={item}
            >
              <span className="inline-flex mb-3 text-teal">
                <Icon size={22} aria-hidden />
              </span>
              <h4 className="font-heading font-semibold text-teal mb-2">{title}</h4>
              <p className="text-sm text-text-muted m-0">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
