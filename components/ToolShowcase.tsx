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
        "Expertise on demand",
        "Corporate Wording",
        "Prompt Management"
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
        "Performance & Accessibility Checks"
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
      title: "Mini Apps",
      description: "Sammlung technischer Hilfswerkzeuge für Sprache, Datenkonvertierung und Transkription in einer zentralen Toolbox.",
      benefits: [
        "Transkription & Scraping",
        "Audio Tools",
        "Übersetzung"
      ]
    }
  ];

  return (
    <section className="py-20 sm:py-28 md:py-40 bg-gray-900 text-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
           Profitiere von unserer <span className="text-gradient-brand">KI-Toolbox</span>
          </h2>
          
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="text-lg text-gray-300 max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Im Rahmen Deiner KI-Transformation erhältst Du Zugang zu einer sorgfältig kuratierten Auswahl erprobter Marketing-Werkzeuge – mit vereinfachten Lizenzmodellen und ohne technische Hürden. Alle Tools sind sofort einsatzbereit und ermöglichen  einen unkomplizierten Einstieg in die KI.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
              <FaCheck className="text-primary" />
              <span>Vereinfachte Lizenzmodelle</span>
            </div>
            <div className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
              <FaCheck className="text-primary" />
              <span>Sofort einsatzbereit</span>
            </div>
            <div className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
              <FaCheck className="text-primary" />
              <span>Erprobte Marketing-Tools</span>
            </div>
            <div className="bg-gray-800/50 px-4 py-2 rounded-full border border-gray-700 flex items-center gap-2">
              <FaCheck className="text-primary" />
              <span>Zentrale Orchestrierung</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Tool Categories Grid - First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
