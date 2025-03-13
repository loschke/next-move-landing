'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Animated background dots */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24 flex flex-col items-center justify-center text-center">
        {/* Text Content */}
        <motion.div 
          className="max-w-3xl z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 font-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gradient-brand block mb-2">NEXT MOVE AI</span>
              <span className="leading-tight">Dein leichter Einstieg in die KI-Transformation</span>
            </motion.h1>
          </motion.div>
          
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-primary font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            KI verändert alles. Doch wo fängst Du an?
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Künstliche Intelligenz kann Prozesse optimieren, den Arbeitsalltag erleichtern und völlig neue Möglichkeiten schaffen. Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 sm:gap-3 group shadow-lg shadow-primary/20 hover:shadow-primary/30 text-base sm:text-lg"
            >
              Starte deine KI-Reise
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-queonext/10 rounded-bl-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-moveelevator/10 rounded-tr-full blur-3xl opacity-30"></div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.5, duration: 1 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, repeatType: "loop" }
        }}
      >
        <span className="text-sm text-gray-400 mb-2">Mehr entdecken</span>
        <FaChevronDown className="text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}
