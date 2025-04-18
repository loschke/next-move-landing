'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';
import Modal from './Modal';
import Datenschutz from './Datenschutz';
import { getReferralSource } from '../app/utils/referral';

type FormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
  consent: boolean;
  referralSource?: string;
};

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);
  const [referralSource, setReferralSource] = useState<string | null>(null);
  
  // Get referral source from cookie when component mounts
  useEffect(() => {
    setReferralSource(getReferralSource());
  }, []);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      // Include referral source in form submission if available
      const formData = {
        ...data,
        referralSource
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Ein Fehler ist aufgetreten');
      }
      
      // Form submitted successfully
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Ein Fehler ist aufgetreten. Bitte versuche es später erneut.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900 dark:to-transparent -z-10"></div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white font-ultra"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Schreib uns eine Nachricht
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Bist Du bereit, Deine KI-Reise zu starten? Kontaktiere unser Team noch heute.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Vielen Dank für Deine Nachricht! Wir melden uns in Kürze bei Dir.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="Max Mustermann"
                      {...register('name', { required: 'Name ist erforderlich' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      E-Mail-Adresse *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                      placeholder="max@beispiel.de"
                      {...register('email', { 
                        required: 'E-Mail ist erforderlich',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Ungültige E-Mail-Adresse'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Unternehmen (Optional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Dein Unternehmen"
                    {...register('company')}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Wie können wir Dir helfen?"
                    {...register('message', { required: 'Nachricht ist erforderlich' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                  )}
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      type="checkbox"
                      className={`w-4 h-4 border ${errors.consent ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary`}
                      {...register('consent', { required: 'Zustimmung ist erforderlich' })}
                    />
                  </div>
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                    Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage gespeichert und verwendet werden. Weitere Informationen finden Sie in unserer <button type="button" onClick={() => setDatenschutzOpen(true)} className="text-primary hover:underline bg-transparent border-none p-0 cursor-pointer">Datenschutzerklärung</button>. *
                  </label>
                </div>
                {errors.consent && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 mb-4">{errors.consent.message}</p>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-6 sm:px-8 py-2 sm:py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg text-sm sm:text-base"
                  >
                    {isSubmitting ? 'Wird gesendet...' : (
                      <>
                        Nachricht senden
                        <FaPaperPlane />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Datenschutz Modal */}
      <Modal 
        isOpen={datenschutzOpen} 
        onClose={() => setDatenschutzOpen(false)} 
        title="Datenschutzerklärung"
      >
        <Datenschutz />
      </Modal>
    </section>
  );
}
