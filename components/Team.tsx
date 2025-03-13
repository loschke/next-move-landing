'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaRocket, FaTools, FaBullseye, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

export default function Team() {
  // Expertise cards data
  const expertiseCards = [
    {
      title: "Know-how aus Top-Agenturen",
      description: "Jahrelange Erfahrung in der Entwicklung und Umsetzung von Marketing-Strategien für führende Unternehmen"
    },
    {
      title: "Marketing-First Ansatz",
      description: "Wir denken von der Marketing-Strategie her und entwickeln KI-Lösungen, die echte Marketing-Herausforderungen lösen"
    },
    {
      title: "Enterprise-Ready",
      description: "Maßgeschneiderte Anpassung an Corporate-Anforderungen ist bei uns kein Extra, sondern integraler Bestandteil"
    }
  ];

  // Highlights data with icons
  const highlights = [
    {
      icon: FaLightbulb,
      title: "Erprobte Expertise",
      description: "Fast zwei Dutzend Unternehmen haben wir bereits auf ihrer KI-Reise begleitet – wir wissen, was funktioniert."
    },
    {
      icon: FaBullseye,
      title: "Sinnvolle Integration",
      description: "Wir setzen KI nicht nur ein, sondern wissen, wie sie sich sinnvoll in Unternehmen integrieren lässt."
    },
    {
      icon: FaRocket,
      title: "Echte Mehrwerte",
      description: "Wir helfen Dir, aus KI echte Mehrwerte zu ziehen – ohne Tech-Overload oder endlose Theorieschleifen."
    },
    {
      icon: FaTools,
      title: "Eigene Tools",
      description: "Wir haben eigene Tools entwickelt, die die Arbeit mit KI kinderleicht für alle machen."
    }
  ];

  return (
    <>
      {/* Team Intro Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-queonext/10 to-moveelevator/10 rounded-tl-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-ultra">
              Die Köpfe hinter NEXT MOVE AI
            </h2>
            
            <motion.div 
              className="w-20 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              NEXT MOVE AI ist ein Zusammenschluss zweier führender Digitalagenturen.
            </motion.p>
          </motion.div>
          
          {/* Agency Logos */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <motion.div
              className="relative w-56 h-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/img/queonext_logo.svg" 
                alt="queo next Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
            
            <motion.div
              className="text-3xl font-bold text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              +
            </motion.div>
            
            <motion.div
              className="relative w-52 h-18"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image 
                src="/img/move_elevator_logo.svg" 
                alt="move:elevator Logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </div>
          
          {/* Three-card layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 ${index === 0 ? 'bg-queonext' : index === 1 ? 'bg-primary' : 'bg-moveelevator'} opacity-10 rounded-bl-full`}></div>
                
                <h3 className="text-xl font-bold mb-4 relative z-10">{card.title}</h3>
                <p className="text-gray-300 relative z-10">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Highlights Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent opacity-30"></div>
        <div className="absolute -top-20 right-20 w-80 h-80 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -bottom-20 left-20 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white font-ultra">
                KI-Expertise aus der täglichen Praxis
              </h2>
              
              <motion.div 
                className="w-20 h-1 bg-primary mx-auto mb-6"
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>
              
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Wir setzen KI täglich in unseren eigenen Unternehmen ein. <br />Als TOP30-Digitalagenturen sind wir selbst mitten in der KI-Transformation.
              </motion.p>
            </motion.div>
            
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 gradient-brand rounded-full flex items-center justify-center">
                      <item.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all inline-flex items-center gap-2 shadow-lg group"
              >
                <span>Jetzt Kontakt aufnehmen</span>
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
