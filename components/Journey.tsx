'use client';

import { motion } from 'framer-motion';
import { FaComments, FaUsers, FaToolbox, FaRocket } from 'react-icons/fa';

export default function Journey() {
  const steps = [
    {
      icon: FaComments,
      title: "Individuelles Beratungsgespräch",
      description: "Jedes Unternehmen steht an einem anderen Punkt – deshalb klären wir in einem persönlichen Gespräch, wo Du aktuell stehst und welche KI-Potenziale sich für Dich besonders lohnen."
    },
    {
      icon: FaUsers,
      title: "Workshops & Trainings",
      description: "Unsere praxisnahen Formate vermitteln Dir genau das Wissen, das Du brauchst – von den ersten Schritten bis zur produktiven Anwendung. Wir setzen auf eine Mischung aus interaktiven Sessions, strategischen Deep Dives und Hands-on-Übungen mit konkreten Tools."
    },
    {
      icon: FaToolbox,
      title: "KI-Toolbox & Flat-Rate-Angebot",
      description: "Technologie muss anwendbar sein – deshalb bekommst Du Zugriff auf eine kuratierte Auswahl an KI-Tools, die direkt in Deinen Arbeitsalltag integriert werden können. Unsere Flat-Rate ermöglicht eine flexible Nutzung für Dein gesamtes Team – ohne komplizierte Lizenzmodelle."
    },
    {
      icon: FaRocket,
      title: "Erfahrungsbasierte Umsetzung",
      description: "Wir helfen Dir dabei, die richtigen Use Cases zu identifizieren und umzusetzen. Unser strukturierter Ansatz sorgt dafür, dass Du KI nicht nur testest, sondern in den operativen Alltag überführst."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            So begleiten wir Dich auf Deinem KI-Weg
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Wir haben ein aufeinander abgestimmtes Paket aus Vorträgen, Workshops, Trainingsmaterialien und KI-Tools entwickelt, das Dir einen systematischen und effizienten Einstieg ermöglicht.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-queonext to-moveelevator opacity-10 rounded-bl-full"></div>
              
              {/* Pin icon */}
              <div className="text-primary text-lg font-bold mb-4">📌</div>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{step.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              
              <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-5">
                <step.icon className="w-full h-full" />
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
            className="px-8 py-3 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all inline-block shadow-lg"
          >
            Gespräch vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
}
