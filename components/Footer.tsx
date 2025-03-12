import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-queonext/10 to-moveelevator/10 rounded-tl-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-4 text-gradient-brand">NEXT MOVE AI</h3>
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
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} NEXT MOVE AI. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
