'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import { FaRocket, FaUserFriends, FaLightbulb, FaChartLine } from 'react-icons/fa';

export default function FeaturesGrid() {
  // Benefits content from Benefits.tsx
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
      title: "Praxis statt Theorie",
      description: "Unser Ansatz basiert auf Erfahrungen aus der KI-Transformation von fast zwei Dutzend Unternehmen."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      <div className="absolute -top-20 right-20 w-80 h-80 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">
        {/* Hero Image */}
        <motion.div 
          className="aspect-w-16 aspect-h-7 mb-16 sm:mb-20 md:mb-28 relative h-[300px] sm:h-[400px] md:h-[500px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image 
            className="w-full object-cover rounded-xl" 
            src="/img/zielgruppe-team.webp" 
            alt="Features Hero Image"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
            style={{ objectFit: 'cover' }}
            priority
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-20 items-center">
          {/* Heading */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              KI verstehen, einsetzen und produktiv nutzen
            </h2>
            
            <motion.div 
              className="w-24 h-1 bg-primary my-8"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
              Mit NEXT MOVE AI erhältst Du einen strukturierten Weg in die KI-Transformation – ohne Fachjargon, aber mit konkreten Ergebnissen von Tag eins an.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="lg:col-span-3">
            <div className="grid sm:grid-cols-2 gap-10">
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
          </div>
        </div>
      </div>
    </section>
  )
}
