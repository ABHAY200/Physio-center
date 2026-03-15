import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { CONTACT_CONTENT, CONTACT_INFO } from '../constants';

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
          {CONTACT_CONTENT.heading}
        </motion.h2>
        <motion.p className="max-w-[600px] mx-auto text-text-muted mb-0" variants={item}>
          {CONTACT_CONTENT.description}
        </motion.p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          className="bg-white p-8 rounded-[20px] shadow-[0_8px_24px_rgba(13,107,107,0.08)] border border-border"
          variants={item}
        >
          <h3 className="font-heading font-semibold text-xl text-text mb-6">{CONTACT_CONTENT.form.title}</h3>
          {submitted ? (
            <motion.p
              className="py-8 text-center text-teal font-semibold"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {CONTACT_CONTENT.form.successMessage}
            </motion.p>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor={CONTACT_CONTENT.form.fields.firstName.id} className="block font-semibold text-sm mb-1.5 text-text">
                  {CONTACT_CONTENT.form.fields.firstName.label}
                </label>
                <input 
                  id={CONTACT_CONTENT.form.fields.firstName.id} 
                  name={CONTACT_CONTENT.form.fields.firstName.name} 
                  type={CONTACT_CONTENT.form.fields.firstName.type} 
                  required={CONTACT_CONTENT.form.fields.firstName.required} 
                  className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" 
                />
              </div>
              <div>
                <label htmlFor={CONTACT_CONTENT.form.fields.lastName.id} className="block font-semibold text-sm mb-1.5 text-text">
                  {CONTACT_CONTENT.form.fields.lastName.label}
                </label>
                <input 
                  id={CONTACT_CONTENT.form.fields.lastName.id} 
                  name={CONTACT_CONTENT.form.fields.lastName.name} 
                  type={CONTACT_CONTENT.form.fields.lastName.type} 
                  required={CONTACT_CONTENT.form.fields.lastName.required} 
                  className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" 
                />
              </div>
              <div>
                <label htmlFor={CONTACT_CONTENT.form.fields.email.id} className="block font-semibold text-sm mb-1.5 text-text">
                  {CONTACT_CONTENT.form.fields.email.label}
                </label>
                <input 
                  id={CONTACT_CONTENT.form.fields.email.id} 
                  name={CONTACT_CONTENT.form.fields.email.name} 
                  type={CONTACT_CONTENT.form.fields.email.type} 
                  required={CONTACT_CONTENT.form.fields.email.required} 
                  className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" 
                />
              </div>
              <div>
                <label htmlFor={CONTACT_CONTENT.form.fields.phone.id} className="block font-semibold text-sm mb-1.5 text-text">
                  {CONTACT_CONTENT.form.fields.phone.label}
                </label>
                <input 
                  id={CONTACT_CONTENT.form.fields.phone.id} 
                  name={CONTACT_CONTENT.form.fields.phone.name} 
                  type={CONTACT_CONTENT.form.fields.phone.type} 
                  required={CONTACT_CONTENT.form.fields.phone.required} 
                  className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors" 
                />
              </div>
              <div>
                <label htmlFor={CONTACT_CONTENT.form.fields.message.id} className="block font-semibold text-sm mb-1.5 text-text">
                  {CONTACT_CONTENT.form.fields.message.label}
                </label>
                <textarea 
                  id={CONTACT_CONTENT.form.fields.message.id} 
                  name={CONTACT_CONTENT.form.fields.message.name} 
                  rows={CONTACT_CONTENT.form.fields.message.rows} 
                  required={CONTACT_CONTENT.form.fields.message.required} 
                  className="w-full py-3 px-4 font-body text-base border border-border rounded-xl bg-cream focus:outline-none focus:border-teal transition-colors resize-y" 
                />
              </div>
              <button type="submit" className="w-full mt-2 inline-flex items-center justify-center gap-2 py-4 px-7 font-semibold text-base rounded-xl bg-teal text-white hover:bg-teal-dark hover:shadow-[0_8px_24px_rgba(13,107,107,0.08)] transition-all duration-200">
                <Send size={20} aria-hidden />
                {CONTACT_CONTENT.form.submitButton}
              </button>
            </form>
          )}
        </motion.div>
        <motion.div className="flex flex-col gap-6" variants={item}>
          <div className="flex items-start gap-4">
            <MapPin size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">{CONTACT_INFO.address.title}</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                {CONTACT_INFO.address.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < CONTACT_INFO.address.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">{CONTACT_INFO.phone.title}</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                {CONTACT_INFO.phone.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < CONTACT_INFO.phone.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">{CONTACT_INFO.email.title}</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                {CONTACT_INFO.email.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < CONTACT_INFO.email.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock size={20} className="flex-shrink-0 mt-0.5 text-teal opacity-90" aria-hidden />
            <div>
              <h4 className="font-heading font-semibold text-base text-teal mb-1">{CONTACT_INFO.hours.title}</h4>
              <p className="text-[0.95rem] text-text-muted leading-relaxed m-0">
                {CONTACT_INFO.hours.lines.map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < CONTACT_INFO.hours.lines.length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={item}>
        <a href={CONTACT_CONTENT.buttons.primary.href} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-teal text-white hover:bg-teal-dark transition-all duration-200">
          {CONTACT_CONTENT.buttons.primary.text}
        </a>
        <a href={CONTACT_CONTENT.buttons.secondary.href} className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-[0.95rem] rounded-xl bg-transparent text-teal border-2 border-teal hover:bg-mint transition-all duration-200">
          {CONTACT_CONTENT.buttons.secondary.text}
        </a>
      </motion.div>
    </motion.section>
  );
}
