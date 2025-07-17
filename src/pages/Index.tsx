import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import HeroSection from '../components/HeroSection';
import BusinessIntro from '../components/BusinessIntro';
import GalleryPreview from '../components/GalleryPreview';
import TestimonialsSection from '../components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BusinessIntro />
        <GalleryPreview />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
