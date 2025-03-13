'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaArrowRight, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa'

interface ExpertProps {
  name: string
  title: string
  company: string
  quote: string
  imagePath: string
  linkedInUrl: string
}

const Expert = ({ name, title, company, quote, imagePath, linkedInUrl }: ExpertProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ translateY: -5 }}
    transition={{ duration: 0.3 }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
  >
    <div className="aspect-square relative">
      <Image
        src={imagePath}
        alt={name}
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
    </div>
    <div className="p-6 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-queonext/10 to-moveelevator/10 rounded-bl-full -z-10"></div>
      
      <h3 className="text-2xl text-white mb-2 font-bold">{name}</h3>
      <div className="text-primary font-bold text-base mb-3">{title} bei {company}</div>
      
      <div className="mb-4 italic text-gray-300 border-l-2 border-primary pl-4">
        &quot;{quote}&quot;
      </div>
      
      <a 
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
        LinkedIn Profil
      </a>
    </div>
  </motion.div>
)

interface ValueProps {
  icon: React.ReactNode
  title: string
  description: string
}

const Value = ({ icon, title, description }: ValueProps) => (
  <motion.div 
    className="bg-gray-800 p-6 rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    <div className="text-primary text-2xl mb-4">{icon}</div>
    <h4 className="text-white text-xl font-bold mb-2">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function ExpertTeam() {
  const values = [
    {
      icon: <FaHandshake />,
      title: "Partnerschaftliche Zusammenarbeit",
      description: "Wir verstehen uns als langfristiger Partner auf Augenhöhe und begleiten Dich durch den gesamten Transformationsprozess."
    },
    {
      icon: <FaLightbulb />,
      title: "Praxisorientierte Innovation",
      description: "Wir setzen auf bewährte Methoden und innovative Ansätze, die in der Praxis funktionieren und echten Mehrwert schaffen."
    },
    {
      icon: <FaUsers />,
      title: "Menschenzentrierte Technologie",
      description: "Bei uns steht der Mensch im Mittelpunkt – wir entwickeln Lösungen, die Teams befähigen und nicht ersetzen."
    }
  ];

  const experts = [
    {
      name: "André Pinkert",
      title: "CEO",
      company: "queonext",
      quote: "KI ist kein Selbstzweck, sondern ein Werkzeug, das Menschen befähigen soll, ihr volles Potenzial zu entfalten.",
      imagePath: "/img/andre-pinkert-queonext.jpg",
      linkedInUrl: "https://www.linkedin.com/in/andrepinkert/"
    },
    {
      name: "Hans Piechatzek",
      title: "CEO",
      company: "Move Elevator",
      quote: "Die erfolgreiche KI-Transformation beginnt mit dem richtigen Mindset und der Bereitschaft, neue Wege zu gehen.",
      imagePath: "/img/hans_piechatzek_move-elevator.webp",
      linkedInUrl: "https://www.linkedin.com/in/hans-piechatzek-95044932/"
    }
  ];

  return (
    <section className="py-40 bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-50"></div>
      <div className="absolute -top-20 right-20 w-80 h-80 bg-queonext/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-80 h-80 bg-moveelevator/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 dark:text-white mb-4">
              Unser gemeinsames Versprechen
            </h2>
            
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              &quot;Wir bringen nicht nur technisches Know-how mit, sondern auch ein tiefes Verständnis für die Herausforderungen von Unternehmen im digitalen Wandel. Unser Ziel ist es, KI nicht als abstraktes Konzept, sondern als praktisches Werkzeug zu vermitteln, das echten Mehrwert schafft und Menschen in ihrer Arbeit unterstützt.&quot;
            </motion.p>
          </div>
          
          {/* Expert Profiles - First */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {experts.map((expert, index) => (
              <Expert
                key={index}
                name={expert.name}
                title={expert.title}
                company={expert.company}
                quote={expert.quote}
                imagePath={expert.imagePath}
                linkedInUrl={expert.linkedInUrl}
              />
            ))}
          </div>
          
          {/* Spacer */}
          <div className="mb-16"></div>
          
          {/* Values - Second */}
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Unsere Werte
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Value 
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-10 py-4 gradient-brand hover:opacity-90 text-white font-medium rounded-lg transition-all shadow-xl text-lg group"
            >
              <span>Jetzt persönliches Gespräch vereinbaren</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
