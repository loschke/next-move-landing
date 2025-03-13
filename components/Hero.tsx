'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import FloatingShapes from './FloatingShapes';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Floating Shapes Background */}
      <FloatingShapes count={12} />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div 
          className="flex-1 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-gradient-brand">NEXT MOVE AI</span> – Dein leichter Einstieg in die KI-Transformation
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-6 text-primary dark:text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            KI verändert alles. Doch wo fängst Du an?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Künstliche Intelligenz kann Prozesse optimieren, den Arbeitsalltag erleichtern und völlig neue Möglichkeiten schaffen. Wir begleiten Unternehmen am Anfang ihrer KI-Reise mit erprobten Prozessen und praxisnahen Lösungen.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30"
            >
              Starte deine KI-Reise
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 border border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10 font-medium rounded-lg transition-colors flex items-center justify-center backdrop-blur-sm"
            >
              Mehr erfahren
            </a>
          </motion.div>
        </motion.div>
        
        {/* Visual Element (3D-like stacked cards) */}
        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-[400px] md:h-[500px] perspective-1000">
            {/* Stacked Cards Effect */}
            <motion.div 
              className="absolute inset-0 gradient-brand rounded-2xl shadow-2xl flex items-center justify-center transform rotate-6 translate-x-4 translate-y-4"
              animate={{ 
                rotate: [6, 2, 6],
                translateX: [16, 8, 16],
                translateY: [16, 12, 16],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 bg-moveelevator rounded-2xl shadow-2xl flex items-center justify-center transform rotate-3 translate-x-2 translate-y-2"
              animate={{ 
                rotate: [3, 0, 3],
                translateX: [8, 4, 8],
                translateY: [8, 4, 8],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 bg-queonext rounded-2xl shadow-2xl flex items-center justify-center"
              animate={{ 
                rotate: [0, 1, 0],
                translateX: [0, 2, 0],
                translateY: [0, 2, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-center p-8">
                <motion.div
                  className="text-white text-4xl font-bold mb-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  KI-Transformation
                </motion.div>
                <p className="text-white/80 text-lg">
                  Verständlich. Anwendbar. Wirksam.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-queonext/5 dark:bg-queonext/10 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-moveelevator/5 dark:bg-moveelevator/10 rounded-tr-full opacity-50"></div>
      
      {/* No wave divider for cleaner section transition */}
    </section>
  );
}
