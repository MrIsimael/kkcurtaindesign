import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import heroCurtains from '../assets/hero-curtains.jpg';
import bedroomCurtains from '../assets/bedroom-curtains.jpg';
import diningCurtains from '../assets/dining-curtains.jpg';
import officeBlinds from '../assets/office-blinds.jpg';

const GalleryPreview = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Living Room",
      description: "Luxurious sage green curtains with white lace trim",
      image: heroCurtains,
      altText: "Elegant sage green custom curtains with white lace trim in a sophisticated living room, featuring premium fabric and expert tailoring by KK Curtain Design"
    },
    {
      id: 2,
      title: "Modern Bedroom",
      description: "Blackout curtains in charcoal with thermal lining",
      image: bedroomCurtains,
      altText: "Modern charcoal blackout curtains with thermal lining in a contemporary bedroom, providing complete light control and energy efficiency"
    },
    {
      id: 3,
      title: "Dining Room Elegance",
      description: "Cream voile curtains with decorative tiebacks",
      image: diningCurtains,
      altText: "Elegant cream voile curtains with decorative tiebacks in a formal dining room, creating soft light filtering and sophisticated ambiance"
    },
    {
      id: 4,
      title: "Office Space",
      description: "Vertical blinds in neutral beige tones",
      image: officeBlinds,
      altText: "Professional vertical blinds in neutral beige tones for office space, providing privacy and light control for productive work environment"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom curtains installed in homes across South Africa. 
            Each piece is crafted with precision and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="card-soft overflow-hidden hover-lift">
              <div className="relative group">
                <LazyImage
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-48"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;