import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 max-w-[1200px] mx-auto w-full"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
          },
        },
      }}
    >
      <div className="text-center mb-10">
        <motion.h2 className="font-heading font-semibold text-[clamp(1.75rem,3vw,2.25rem)] text-text mb-2" variants={item}>
          Ready to Start Your Recovery Journey?
        </motion.h2>
        <motion.p className="max-w-[600px] mx-auto text-text-muted mb-0" variants={item}>
          Contact us today to schedule your consultation and take the first step towards a healthier, more active you.
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="bg-white p-8 rounded-[20px] shadow-[0_8px_24px_rgba(13,107,107,0.08)] border border-border"
          variants={item}
        >
          <h3 className="font-heading font-semibold text-xl text-text mb-6">Send us a Message</h3>
          {submitted ? (
            <motion.p
              className="py-8 text-center text-teal font-semibold"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              Thank you! We'll be in touch soon.
            </motion.p>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="first" className="block font-semibold text-sm mb-1.5 text-text">
                  First Name
                </label>
                <input id="first" name="first" type="text" required className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" />
              </div>
              <div>
                <label htmlFor="last" className="block font-semibold text-sm mb-1.5 text-text">
                  Last Name
                </label>
                <input id="last" name="last" type="text" required className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-sm mb-1.5 text-text">
                  Email
                </label>
                <input id="email" name="email" type="email" required className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" />
              </div>
              <div>
                <label htmlFor="phone" className="block font-semibold text-sm mb-1.5 text-text">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-sm mb-1.5 text-text">
                  How can we help you?
                </label>
                <textarea id="message" name="message" rows={4} required className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors resize-y" />
              </div>
              <button type="submit" className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 px-7 font-semibold text-base rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200">
                <Send size={20} aria-hidden />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
        <motion.div className="flex flex-col gap-6" variants={item}>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">Visit Us</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                123 Health Street<br />Medical District<br />City, ST 12345
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">Call Us</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                (555) 123-4567<br />Emergency: (555) 999-0000
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">Email Us</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                info@physiocenter.com<br />appointments@physiocenter.com
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">Hours</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                Mon-Fri: 7AM - 8PM<br />Sat: 8AM - 5PM<br />Sun: Closed
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={item}>
        <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark transition-all duration-200">
          Book Appointment
        </a>
        <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-transparent text-teal border-2 border-teal hover:bg-mint transition-all duration-200">
          Call Now
        </a>
      </motion.div>
    </motion.section>
  );
}
