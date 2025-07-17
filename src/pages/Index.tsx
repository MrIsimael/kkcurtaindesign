import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import HeroSection from '../components/HeroSection';
import BusinessIntro from '../components/BusinessIntro';
import GalleryPreview from '../components/GalleryPreview';
import TestimonialsSection from '../components/TestimonialsSection';
import SEO from '../components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="KK Curtain Design - Premium Custom Curtains South Africa | Made to Perfection"
        description="Transform your home with bespoke curtains crafted by skilled artisans. Premium fabrics, perfect fit, delivered nationwide across South Africa. Get your custom curtain quote today."
        keywords="custom curtains South Africa, bespoke curtains, premium curtain fabrics, curtain design, window treatments, home decor, curtain installation, KK Curtain Design"
        url="https://your-domain.com"
      />
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
