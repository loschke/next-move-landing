import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Journey from '../components/Journey';
import FeaturesGrid from '../components/FeaturesGrid';
import Team from '../components/Team';
import Cta from '../components/Cta';
import ToolShowcase from '../components/ToolShowcase';
import Conclusion from '../components/Conclusion';
import ExpertTeam from '../components/ExpertTeam';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesGrid />
      <Journey />
      <Team />
      <Cta />
      <ToolShowcase />
      <Conclusion />  
      <ExpertTeam />    
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
