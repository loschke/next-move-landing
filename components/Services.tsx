'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaRobot, FaUsers, FaBrain } from 'react-icons/fa';
import FloatingShapes from './FloatingShapes';

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

// Service card component
const ServiceCard = ({ icon: Icon, title, description, index }: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  index: number
}) => {
  // Alternate colors for cards
  const colors = [
    { border: 'border-queonext', icon: 'bg-queonext' },
    { border: 'border-primary', icon: 'gradient-brand' },
    { border: 'border-moveelevator', icon: 'bg-moveelevator' },
    { border: 'border-queonext', icon: 'bg-queonext' },
  ];
  
  const color = colors[index % colors.length];
  
  return (
    <motion.div 
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 ${color.border} hover:-translate-y-1`}
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`w-14 h-14 ${color.icon} rounded-full flex items-center justify-center mb-6`}>
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: FaLightbulb,
      title: "KI-Strategie & Beratung",
      description: "Wir helfen Dir, die richtigen KI-Tools zu identifizieren und eine maßgeschneiderte Strategie für Dein Unternehmen zu entwickeln."
    },
    {
      icon: FaRobot,
      title: "KI-Implementierung",
      description: "Von der Auswahl bis zur Integration – wir setzen KI-Lösungen praktisch und effizient in Deinem Unternehmen um."
    },
    {
      icon: FaUsers,
      title: "Change Management",
      description: "Wir nehmen Deine Mitarbeitenden mit auf die KI-Reise und sorgen für Akzeptanz und Begeisterung im Team."
    },
    {
      icon: FaBrain,
      title: "KI-Training & Support",
      description: "Kontinuierliche Schulungen und Support, damit Dein Team das volle Potenzial der KI-Tools ausschöpfen kann."
    }
  ];

  return (
    <section id="services" className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Shapes with fewer, more subtle shapes */}
      <FloatingShapes count={6} />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-queonext/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-primary font-medium">Unsere Expertise für Dich</p>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Unsere Leistungen
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
            Wir reduzieren Komplexität, ermöglichen einen schnellen Einstieg und sorgen dafür, dass KI kein abstraktes Konzept bleibt, sondern ein produktiver Bestandteil Deines Unternehmens wird.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-white dark:bg-gray-800 text-primary border border-primary hover:bg-primary hover:text-white font-medium rounded-lg transition-colors shadow-lg"
          >
            Lass uns über Dein Projekt sprechen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
