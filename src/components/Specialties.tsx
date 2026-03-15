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
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 max-w-[1200px] mx-auto w-full"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      variants={container}
    >
      <motion.h2 className="text-center mb-2 font-heading font-semibold text-[clamp(1.75rem,3vw,2.25rem)] text-text" variants={cardItem}>
        {SPECIALTIES_CONTENT.heading}
      </motion.h2>
      <motion.p className="text-center text-xl text-teal font-semibold mb-2" variants={cardItem}>
        {SPECIALTIES_CONTENT.subheading}
      </motion.p>
      <motion.p className="text-center max-w-[600px] mx-auto mb-10 text-text-muted" variants={cardItem}>
        {SPECIALTIES_CONTENT.description}
      </motion.p>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mb-8">
        {SPECIALTIES_LIST.map(({ title, description, icon: Icon }) => (
          <motion.article
            key={title}
            className="bg-white p-7 rounded-[20px] border border-border transition-shadow transition-transform duration-200 hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] hover:-translate-y-0.5"
            variants={cardItem}
          >
            <span className="inline-flex mb-4 py-2.5 px-3 bg-mint text-teal rounded-xl">
              <Icon size={24} aria-hidden />
            </span>
            <h4 className="font-heading font-semibold text-lg text-teal mb-2">{title}</h4>
            <p className="text-[0.95rem] text-text-muted mb-4">{description}</p>
            <a href="#contact" className="inline-flex items-center gap-1.5 font-semibold text-[0.95rem] text-teal hover:text-teal-dark">
              Learn More
              <ArrowRight size={16} aria-hidden />
            </a>
          </motion.article>
        ))}
      </div>
      <motion.div className="text-center" variants={cardItem}>
        <a href={SPECIALTIES_CONTENT.ctaButton.href} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200">
          {SPECIALTIES_CONTENT.ctaButton.text}
        </a>
      </motion.div>
    </motion.section>
  );
}
