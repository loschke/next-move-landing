'use client';

import { motion } from 'framer-motion';
import { FaComments, FaTasks, FaImage, FaChartLine, FaSearch, FaTools, FaCheck } from 'react-icons/fa';

export default function ToolShowcase() {
  // Tool categories data
  const toolCategories = [
    {
      icon: FaComments,
      title: "Expert Chat",
      description: "Dialogbasierte KI-Interaktion mit spezialisierten Marketing-Experten-Profilen. Multi-LLM-Strategie für optimale Antworten.",
      benefits: [
        "Marketing-Expertise on demand",
        "Strategische Beratung durch KI",
        "Flexible Problemlösung"
      ]
    },
    {
      icon: FaTasks,
      title: "Quicktask Assistenten",
      description: "Vorlagenbasierte KI-Assistenten für wiederkehrende Marketing-Aufgaben. Die Assistenten nutzen strukturierte Formulare für optimale Ergebnisse.",
      benefits: [
        "Spart Zeit bei Standard-Marketing-Tasks",
        "Garantiert konsistente Qualität",
        "Nutzt bewährte Best Practices"
      ]
    },
    {
      icon: FaImage,
      title: "KI-Bildgenerierung",
      description: "Marketing-optimierte Bildgenerierung mit Custom Training für Corporate Design und Prompt-Formeln System.",
      benefits: [
        "Auswahl der besten Bild-KIs",
        "Konsistente Bildsprache",
        "Effiziente Asset-Produktion"
      ]
    },
    {
      icon: FaChartLine,
      title: "Website Analyse",
      description: "Detaillierte Analyse und Optimierung Ihrer Website mit KI-gestützten Insights.",
      benefits: [
        "SEO-Analyse und Optimierung",
        "Content-Bewertung und Verbesserung",
        "Performance-Optimierung"
      ]
    },
    {
      icon: FaSearch,
      title: "Smart Research",
      description: "Nutze KI-gestützte Recherche für tiefgreifende Antworten mit verifizierbaren Quellen.",
      benefits: [
        "Umfassende Recherche mit Quellen",
        "Domain-Filter für zuverlässige Ergebnisse",
        "Projektbasierte Organisation"
      ]
    },
    {
      icon: FaTools,
      title: "Utility Tools",
      description: "Sammlung technischer Hilfswerkzeuge für Sprache, Datenkonvertierung und Transkription in einer zentralen Toolbox.",
      benefits: [
        "YouTube Transkription",
        "Website Scraping",
        "Daten Operationen"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-50"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-ultra">
            Alle KI-Tools zentral orchestriert
          </h2>
          
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Von ChatGPT und Claude für Texte bis zu Midjourney für Bilder - die besten KI-Provider in einer Suite, plus umfassende Beratung für Ihre erfolgreiche KI-Transformation
          </motion.p>
        </motion.div>
        
        {/* Tool Categories Grid - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {toolCategories.slice(0, 3).map((tool, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-primary text-4xl mb-4">
                <tool.icon />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
              <p className="text-gray-300 mb-6">{tool.description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Warum wichtig?</h4>
                <ul className="space-y-2">
                  {tool.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Tool Categories Grid - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toolCategories.slice(3).map((tool, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-primary text-4xl mb-4">
                <tool.icon />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
              <p className="text-gray-300 mb-6">{tool.description}</p>
              
              <div>
                <h4 className="font-semibold mb-3">Warum wichtig?</h4>
                <ul className="space-y-2">
                  {tool.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
