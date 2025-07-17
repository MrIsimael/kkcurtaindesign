import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroCurtains from '../assets/hero-curtains.jpg';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-accent py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroCurtains}
          alt="Beautiful custom curtains"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">KK Curtain Design</span>
            <br />
            <span className="text-foreground">Made to Perfection</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your home with bespoke curtains crafted by skilled artisans. 
            Premium fabrics, perfect fit, delivered nationwide across South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/gallery"
              className="btn-outline"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;