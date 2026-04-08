import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import WhatsappCommunity from './components/WhatsappCommunity';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp Community Floating Icon */}
      <WhatsappCommunity />
    </div>
  );
}
