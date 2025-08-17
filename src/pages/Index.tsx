import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import AppointmentForm from '@/components/AppointmentForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
