'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUserFriends, FaLightbulb, FaChartLine } from 'react-icons/fa';

export default function Benefits() {
  const benefits = [
    {
      icon: FaRocket,
      title: "Effizienz steigern",
      description: "Wiederkehrende Aufgaben automatisieren und Zeit für strategische Themen gewinnen."
    },
    {
      icon: FaUserFriends,
      title: "Einstieg ohne Hürden",
      description: "Du brauchst kein Vorwissen – wir holen Dein Team genau da ab, wo es steht."
    },
    {
      icon: FaLightbulb,
      title: "Von den Besten lernen",
      description: "Wir nutzen KI täglich in unseren eigenen Unternehmen und wissen, was wirklich funktioniert."
    },
    {
      icon: FaChartLine,
      title: "Echte Praxis statt Theorie",
      description: "Unser Ansatz basiert auf Erfahrungen aus der KI-Transformation von fast zwei Dutzend Unternehmen."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            KI verstehen, einsetzen und produktiv nutzen
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
            Mit NEXT MOVE AI bekommst Du eine strukturiert begleitete Einführung in die KI-Transformation – mit einem klaren Fahrplan, praxiserprobten Methoden und Lösungen.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary opacity-10 rounded-bl-full -z-10"></div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 gradient-brand rounded-full flex items-center justify-center">
                  <benefit.icon className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
            <span>Jetzt starten</span>
            <FaRocket className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
