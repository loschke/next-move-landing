import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Journey from '../components/Journey';
import Team from '../components/Team';
import Cta from '../components/Cta';
import ToolShowcase from '../components/ToolShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Journey />
      <Team />
      <Cta />
      <ToolShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
