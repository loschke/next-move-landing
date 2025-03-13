'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Transformation() {
  const benefits = [
    {
      image: "/img/keine-lernkurve.webp",
      title: "Sofort produktiv ohne lange Einarbeitung",
      description: "Unsere Lösungen sind intuitiv und benötigen keine technischen Vorkenntnisse."
    },
    {
      image: "/img/konstante-qualitaet.webp",
      title: "Gleichbleibend hohe Ergebnisse",
      description: "Unsere KI-Lösungen liefern zuverlässig qualitativ hochwertige Resultate."
    },
    {
      image: "/img/zeit-sparen.webp",
      title: "Effizienzsteigerung vom ersten Tag an",
      description: "Automatisieren Sie wiederkehrende Aufgaben und konzentrieren Sie sich auf strategische Arbeit."
    },
    {
      image: "/img/zielgruppe-team.webp",
      title: "Passgenaue Lösungen für Ihre Anforderungen",
      description: "Wir passen unsere KI-Lösungen an die spezifischen Bedürfnisse Ihres Teams an."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent opacity-50 dark:from-gray-900"></div>
      <div className="absolute -top-20 right-20 w-80 h-80 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-primary font-medium">Warum mit uns?</p>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-800 dark:text-white">
            Transformation leicht gemacht
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
            Mit NEXT MOVE AI wird Ihre KI-Transformation zum Erfolg. Wir sorgen dafür, dass der Einstieg in die KI-Welt reibungslos und effizient verläuft.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-48 w-full">
                <Image 
                  src={benefit.image} 
                  alt={benefit.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="px-8 py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 group shadow-lg shadow-primary/20 hover:shadow-primary/30 inline-flex"
          >
            Starten Sie Ihre Transformation
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
