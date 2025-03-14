"use client";

import { useState } from 'react';
import Modal from './Modal';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [impressumOpen, setImpressumOpen] = useState(false);
  const [datenschutzOpen, setDatenschutzOpen] = useState(false);
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-queonext/10 to-moveelevator/10 rounded-tl-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-center mb-8">
            <h3 className="text-2xl mb-4"><span className="text-white">next</span><span className="text-primary  font-bold">:</span><span className="text-white">move.ai</span></h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Wir begleiten Unternehmen auf ihrem Weg in die KI-Transformation mit praxisnahen Lösungen und erprobten Methoden.
            </p>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="https://queonext.de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              queonext.de
            </a>
            <a href="https://move-elevator.de" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              move-elevator.de
            </a>
            <button 
              onClick={() => setImpressumOpen(true)} 
              className="text-gray-400 hover:text-primary transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              Impressum
            </button>
            <button 
              onClick={() => setDatenschutzOpen(true)} 
              className="text-gray-400 hover:text-primary transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              Datenschutz
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} next:move.ai. Alle Rechte vorbehalten.</p>
        </div>
      </div>

      {/* Modals */}
      <Modal 
        isOpen={impressumOpen} 
        onClose={() => setImpressumOpen(false)} 
        title="Impressum"
      >
        <Impressum />
      </Modal>

      <Modal 
        isOpen={datenschutzOpen} 
        onClose={() => setDatenschutzOpen(false)} 
        title="Datenschutzerklärung"
      >
        <Datenschutz />
      </Modal>
    </footer>
  );
}
