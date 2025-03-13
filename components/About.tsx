'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
  const benefits = [
    "Data-driven insights to guide your business decisions",
    "Customized solutions tailored to your specific needs",
    "Ongoing support and maintenance for all implementations",
    "Scalable architecture that grows with your business",
    "Expert team with years of industry experience",
    "Proven methodologies for consistent results"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image/Illustration */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] bg-indigo-100 dark:bg-indigo-900/20 rounded-lg flex items-center justify-center">
              <p className="text-indigo-600 dark:text-indigo-200 text-lg font-medium">About Image Placeholder</p>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-gray-800 dark:text-white">
              Why Choose <span className="text-indigo-600 dark:text-indigo-400">NextMove</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              With years of experience in the industry, we&apos;ve helped countless businesses transform their operations and achieve sustainable growth. Our approach combines strategic consulting with cutting-edge technology to deliver solutions that make a real difference.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <FaCheckCircle className="text-indigo-600 dark:text-indigo-400 text-xl flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors inline-block"
              >
                Get Started Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
