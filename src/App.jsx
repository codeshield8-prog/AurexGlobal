import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import TelecomSolutions from './sections/TelecomSolutions';
import WhyChooseUs from './sections/WhyChooseUs';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <TelecomSolutions />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
