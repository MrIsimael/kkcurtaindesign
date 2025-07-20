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
      title: "Elegant Layered Window Treatment",
      description: "Luxurious beige curtains with decorative tiebacks and delicate lace sheers",
      image: ModernBedroom,
      tags: ["Beige", "Lace Sheers", "Tiebacks", "Layered"],
      altText: "Elegant beige curtains with decorative fabric tiebacks paired with delicate white lace sheer panels, showcasing sophisticated layered window treatment with intricate lace patterns and premium fabric quality"
    },
    {
      id: 2,
      title: "Living Room Elegance",
      description: "Luxurious beige curtains with ornate swag valances and decorative tiebacks",
      image: DinningRoomElegance,
      tags: ["Living Room", "Traditional", "Swag Valance", "Decorative"],
      altText: "Elegant traditional living room featuring luxurious beige curtains with ornate swag valances, decorative tiebacks, and layered sheer panels in a formal interior with polished marble flooring"
    },
    {
      id: 3,
      title: "Master Bedroom Luxury",
      description: "Silk curtains with matching valance",
      image: bedroomCurtains,
      tags: ["Master Bedroom", "Silk", "Valance"],
      altText: "Luxurious silk curtains with matching valance in master bedroom, featuring premium materials and elegant design for ultimate comfort and style"
    },
    {
      id: 4,
      title: "Classic Swag Valance Collection",
      description: "Traditional beige curtains with elaborate swag valances and decorative tiebacks",
      image: ElegantLivingRoom,
      tags: ["Swag Valance", "Traditional", "Beige", "Formal"],
      altText: "Display of traditional beige curtains featuring elaborate multi-layered swag valances with decorative tiebacks in a curtain showroom, showcasing classic formal window treatment styles with premium fabric construction"
    },
    {
      id: 5,
      title: "Children's Room Fun",
      description: "Colorful themed curtains with blackout lining",
      image: diningCurtains,
      tags: ["Children's Room", "Colorful", "Blackout"],
      altText: "Colorful themed curtains with blackout lining for children's room, combining fun designs with practical light control for better sleep"
    },
    {
      id: 6,
      title: "Cream Curtains with Circle Pattern Sheers",
      description: "Cream curtains with tiebacks paired with circle-patterned sheer panels",
      image: RoomElegance,
      tags: ["Cream", "Tiebacks", "Patterned Sheers", "Layered"],
      altText: "Cream-colored curtains with decorative tiebacks paired with white sheer panels featuring circular dot patterns, creating an elegant layered window treatment with soft light filtering"
    },
    {
      id: 7,
      title: "Living Room Bay Window Curtains",
      description: "Golden beige curtains with decorative tiebacks spanning bay window",
      image: OfficeSpace,
      tags: ["Living Room", "Bay Window", "Golden beige", "Tiebacks"],
      altText: "Elegant Golden beige curtains with decorative tiebacks installed across a bay window in a living room, paired with patterned sheer panels and complementing brown leather sectional sofa"
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