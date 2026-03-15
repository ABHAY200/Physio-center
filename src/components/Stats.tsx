import { motion } from 'framer-motion';
import { STATS_LIST } from '../constants';

const container = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export function Stats() {
  return (
    <motion.section
      className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 shadow-[0_2px_8px_rgba(13,107,107,0.06)]"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-80px' }}
      variants={container}
    >
      <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {STATS_LIST.map(({ value, label, icon: Icon }) => (
          <motion.div key={label} className="text-center py-4 sm:py-6" variants={item}>
            <span className="flex justify-center mb-2 sm:mb-3 text-teal opacity-90">
              <Icon size={24} className="sm:w-7 sm:h-7" aria-hidden />
            </span>
            <span className="block font-heading text-[clamp(1.75rem,5vw,2.75rem)] font-bold text-teal mb-1">{value}</span>
            <span className="text-sm sm:text-[0.95rem] text-text-muted">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
