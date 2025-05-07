
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
