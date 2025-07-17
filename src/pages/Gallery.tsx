import { MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import heroCurtains from '../assets/hero-curtains.jpg';
import bedroomCurtains from '../assets/bedroom-curtains.jpg';
import diningCurtains from '../assets/dining-curtains.jpg';
import officeBlinds from '../assets/office-blinds.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Elegant Living Room Curtains",
      description: "Luxurious sage green curtains with white lace trim",
      image: heroCurtains,
      tags: ["Living Room", "Sage Green", "Lace Trim"]
    },
    {
      id: 2,
      title: "Modern Bedroom Blackout",
      description: "Blackout curtains in charcoal with thermal lining",
      image: bedroomCurtains,
      tags: ["Bedroom", "Blackout", "Thermal"]
    },
    {
      id: 3,
      title: "Dining Room Elegance",
      description: "Cream voile curtains with decorative tiebacks",
      image: diningCurtains,
      tags: ["Dining Room", "Voile", "Cream"]
    },
    {
      id: 4,
      title: "Office Space Vertical Blinds",
      description: "Vertical blinds in neutral beige tones",
      image: officeBlinds,
      tags: ["Office", "Vertical Blinds", "Beige"]
    },
    {
      id: 5,
      title: "Kitchen Window Treatment",
      description: "Water-resistant curtains with tie-up styling",
      image: heroCurtains,
      tags: ["Kitchen", "Water-resistant", "Tie-up"]
    },
    {
      id: 6,
      title: "Master Bedroom Luxury",
      description: "Silk curtains with matching valance",
      image: bedroomCurtains,
      tags: ["Master Bedroom", "Silk", "Valance"]
    },
    {
      id: 7,
      title: "Children's Room Fun",
      description: "Colorful themed curtains with blackout lining",
      image: diningCurtains,
      tags: ["Children's Room", "Colorful", "Blackout"]
    },
    {
      id: 8,
      title: "Patio Door Panels",
      description: "Large panel curtains for sliding doors",
      image: officeBlinds,
      tags: ["Patio", "Panel", "Sliding Doors"]
    }
  ];

  return (
    <div className="min-h-screen">
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
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover-scale"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center">
                    <a
                      href={`https://wa.me/27722659132?text=Hi! I'm interested in curtains like "${item.title}". Can you provide more details?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Enquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-accent px-3 py-1 rounded-full text-sm text-accent-foreground"
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
            <div className="bg-accent rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Love What You See?</h2>
              <p className="text-muted-foreground mb-6">
                Get a personalized quote for similar curtains in your home.
              </p>
              <a
                href="https://wa.me/27722659132?text=Hi! I'd like to get a quote for custom curtains after viewing your gallery."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for Quote</span>
              </a>
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