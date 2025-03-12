'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function Cta() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute -top-20 right-20 w-80 h-80 bg-queonext/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-moveelevator/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Starte jetzt – mit einem kostenfreien Beratungsgespräch
          </motion.h2>
          
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Lass uns gemeinsam herausfinden, wie Du KI in Deinem Unternehmen produktiv nutzen kannst.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-10 py-4 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-xl text-lg group"
            >
              <span>Jetzt kostenfreies Beratungsgespräch vereinbaren</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* No bottom wave - clean transition to next section */}
    </section>
  );
}
