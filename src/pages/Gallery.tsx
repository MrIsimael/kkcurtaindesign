import { MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import LazyImage from '../components/LazyImage';
import bedroomCurtains from '../assets/bedroom-curtains.jpg';
import diningCurtains from '../assets/dining-curtains.jpg';
import officeBlinds from '../assets/office-blinds.jpg';
import RoomElegance from '../assets/HomeGallery/RoomElegance.jpg';
import ModernBedroom from '../assets/HomeGallery/ModernBedroom.jpg';
import DinningRoomElegance from '../assets/HomeGallery/DinningRoomElegance.jpg';
import ElegantLivingRoom from '../assets/HomeGallery/ElegantLivingRoom.jpg';
import OfficeSpace from '../assets/HomeGallery/OfficeSpace.jpg';
import SEO from '../components/SEO';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Living Room Curtains",
      description: "Luxurious sage green curtains with white lace trim",
      image: ModernBedroom,
      tags: ["Living Room", "Sage Green", "Lace Trim"],
      altText: "Elegant sage green custom curtains with white lace trim in a sophisticated living room, showcasing premium fabric quality and expert craftsmanship by KK Curtain Design"
    },
    {
      id: 2,
      title: "Modern Bedroom Blackout",
      description: "Blackout curtains in charcoal with thermal lining",
      image: DinningRoomElegance,
      tags: ["Bedroom", "Blackout", "Thermal"],
      altText: "Modern charcoal blackout curtains with thermal lining in contemporary bedroom, providing complete light control and energy efficiency for better sleep"
    },
    {
      id: 3,
      title: "Dining Room Elegance",
      description: "Cream voile curtains with decorative tiebacks",
      image: RoomElegance,
      tags: ["Dining Room", "Lace", "Cream"],
      altText: "Elegant cream voile curtains with decorative tiebacks in formal dining room, creating soft light filtering and sophisticated dining ambiance"
    },
    {
      id: 4,
      title: "Office Space Vertical Blinds",
      description: "Vertical blinds in neutral beige tones",
      image: ElegantLivingRoom,
      tags: ["Office", "Vertical Blinds", "Beige"],
      altText: "Professional vertical blinds in neutral beige tones for modern office space, providing privacy and adjustable light control for productive work environment"
    },
    {
      id: 5,
      title: "Kitchen Window Treatment",
      description: "Water-resistant curtains with tie-up styling",
      image: OfficeSpace,
      tags: ["Kitchen", "Water-resistant", "Tie-up"],
      altText: "Water-resistant kitchen curtains with tie-up styling, designed for high-humidity environments while maintaining style and functionality"
    },
    {
      id: 6,
      title: "Master Bedroom Luxury",
      description: "Silk curtains with matching valance",
      image: bedroomCurtains,
      tags: ["Master Bedroom", "Silk", "Valance"],
      altText: "Luxurious silk curtains with matching valance in master bedroom, featuring premium materials and elegant design for ultimate comfort and style"
    },
    {
      id: 7,
      title: "Children's Room Fun",
      description: "Colorful themed curtains with blackout lining",
      image: diningCurtains,
      tags: ["Children's Room", "Colorful", "Blackout"],
      altText: "Colorful themed curtains with blackout lining for children's room, combining fun designs with practical light control for better sleep"
    },
    {
      id: 8,
      title: "Patio Door Panels",
      description: "Large panel curtains for sliding doors",
      image: officeBlinds,
      tags: ["Patio", "Panel", "Sliding Doors"],
      altText: "Large panel curtains for patio sliding doors, providing seamless indoor-outdoor transition with style and privacy control"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Curtain Gallery - KK Curtain Design | Custom Curtain Showcase"
        description="Browse our stunning gallery of custom curtains and window treatments. See examples of our premium craftsmanship and design expertise across South Africa."
        keywords="curtain gallery, custom curtain examples, curtain designs, window treatment ideas, South Africa curtains, curtain inspiration"
        url="https://kkcurtaindesign.co.za/gallery"
      />
      <Header />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of custom curtains installed in homes across South Africa. 
              Each piece showcases our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="card-soft overflow-hidden hover-lift">
                <div className="relative group">
                  <LazyImage
                    src={item.image}
                    alt={item.altText}
                    className="w-full h-64 hover-scale"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-accent px-2 py-1 rounded-full text-xs text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Love What You See?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Ready to transform your space with custom curtains? Get a personalized quote 
                and let our experts help you choose the perfect style for your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/quote" 
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <span>Get Your Quote</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a 
                  href="/fabric-samples" 
                  className="btn-secondary"
                >
                  View Fabric Samples
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Gallery;