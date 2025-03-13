'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaComments } from 'react-icons/fa';

export default function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 -z-10"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
      <div className="absolute -top-20 right-20 w-96 h-96 bg-queonext/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-moveelevator/20 rounded-full blur-3xl opacity-40"></div>
      
      {/* Content container with subtle border */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center p-10 rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Spotlight effect behind heading */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-2xl"></div>
          
          <motion.div
            className="relative"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white font-ultra"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Starte jetzt – mit einem kostenfreien Beratungsgespräch
            </motion.h2>
            
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Lass uns gemeinsam herausfinden, wie Du KI in Deinem Unternehmen produktiv nutzen kannst.
            </motion.p>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-queonext via-primary to-moveelevator rounded-lg blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-10 py-5 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 text-lg group relative"
              >
                <FaComments className="text-xl" />
                <span>Jetzt kostenfreies Beratungsgespräch vereinbaren</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
