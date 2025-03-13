'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight, FaCheck, FaClock, FaGem, FaRocket } from 'react-icons/fa';

export default function Conclusion() {
  const [activeTab, setActiveTab] = useState(0);
  
  const benefits = [
    {
      icon: FaGem,
      title: "Gleichbleibende Qualität",
      description: "Durch unsere Begleitung und erprobte Methoden erreichen Sie zuverlässig hochwertige Ergebnisse.",
      image: "/img/konstante-qualitaet.webp",
      points: [
        "Gemeinsam entwickelte Qualitätsstandards",
        "Kontinuierliche Optimierung durch Feedback",
        "Bewährte Prozesse für konsistente Resultate"
      ]
    },
    {
      icon: FaRocket,
      title: "Sofort produktiv einsetzbar",
      description: "Wir begleiten Sie Schritt für Schritt, damit Sie KI ohne lange Einarbeitungszeit nutzen können.",
      image: "/img/keine-lernkurve.webp",
      points: [
        "Persönliche Einführung in alle Tools",
        "Praxisnahe Workshops für Ihr Team",
        "Kontinuierliche Unterstützung bei Fragen"
      ]
    },
    {
      icon: FaClock,
      title: "Passgenaue Lösungen",
      description: "Wir passen unsere KI-Lösungen exakt an die spezifischen Bedürfnisse Ihres Teams an.",
      image: "/img/zielgruppe-team.webp",
      points: [
        "Individuelle Bedarfsanalyse",
        "Maßgeschneiderte KI-Strategien",
        "Anpassung an bestehende Workflows"
      ]
    }
  ];

  return (
    <section className="py-40 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-950">
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-20 w-96 h-96 bg-queonext/5 rounded-full blur-3xl -z-10 dark:bg-queonext/10"></div>
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-moveelevator/5 rounded-full blur-3xl -z-10 dark:bg-moveelevator/10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >          
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
            Warum du diese KI-Transformation lieben wirst
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
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
            Mit NEXT MOVE AI erhältst Du einen unkomplizierten Einstieg in die KI-Welt – mit sofortigen Ergebnissen, die Dein Unternehmen voranbringen.
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Tabs Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-queonext/10 to-moveelevator/10 rounded-bl-full -z-10"></div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className={`p-4 rounded-xl cursor-pointer transition-all ${activeTab === index ? 'bg-gray-200 dark:bg-gray-700 shadow-md' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ x: activeTab === index ? 0 : 5 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${activeTab === index ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'}`}>
                        <benefit.icon className="text-xl" />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${activeTab === index ? 'text-primary' : 'text-gray-800 dark:text-white'}`}>
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                          {benefit.description}
                        </p>
                        
                        {activeTab === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.3 }}
                            className="space-y-2 mt-4"
                          >
                            {benefit.points.map((point, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <FaCheck className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300">{point}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-3 px-8 py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 group"
                >
                  <span>Jetzt Beratungsgespräch vereinbaren</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{ 
                    opacity: activeTab === index ? 1 : 0,
                    scale: activeTab === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                  style={{ zIndex: activeTab === index ? 10 : 0 }}
                >
                  <Image 
                    src={benefit.image} 
                    alt={benefit.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/80">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
