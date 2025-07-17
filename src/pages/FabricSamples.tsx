import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { Info, Eye, Layers, Palette, Lightbulb } from 'lucide-react';
import SEO from '../components/SEO';

const FabricSamples = () => {
  const fabricCategories = [
    {
      category: "Premium Linens",
      description: "Natural, breathable fabrics perfect for living spaces",
      fabrics: [
        {
          id: 1,
          name: "Natural Linen",
          type: "100% Linen",
          characteristics: ["Breathable", "Natural texture", "Excellent drape", "Wrinkle-prone"],
          bestFor: "Living rooms, dining rooms",
          lightFiltering: "Medium",
          durability: "High",
          maintenance: "Dry clean recommended",
          priceRange: "Premium",
          colors: ["Sage Green", "Natural Beige", "Soft White", "Charcoal"]
        },
        {
          id: 2,
          name: "Belgian Linen",
          type: "European Linen",
          characteristics: ["Luxurious feel", "Superior durability", "Smooth finish", "Less wrinkles"],
          bestFor: "Master bedrooms, formal dining",
          lightFiltering: "Medium",
          durability: "Very High",
          maintenance: "Professional cleaning",
          priceRange: "Luxury",
          colors: ["Cream", "Pearl Grey", "Champagne", "Deep Navy"]
        },
        {
          id: 3,
          name: "Linen Blend",
          type: "Linen/Cotton Mix",
          characteristics: ["Easy care", "Natural appearance", "Less expensive", "Good durability"],
          bestFor: "Casual spaces, children's rooms",
          lightFiltering: "Medium",
          durability: "Good",
          maintenance: "Machine washable",
          priceRange: "Moderate",
          colors: ["Natural", "Soft Blue", "Warm Grey", "Ivory"]
        }
      ]
    },
    {
      category: "Blackout Fabrics",
      description: "Light-blocking fabrics for better sleep and privacy",
      fabrics: [
        {
          id: 4,
          name: "Thermal Blackout",
          type: "Polyester Blend",
          characteristics: ["100% light blocking", "Energy efficient", "Noise reduction", "Easy care"],
          bestFor: "Bedrooms, home theaters",
          lightFiltering: "None (100% blackout)",
          durability: "Very High",
          maintenance: "Machine washable",
          priceRange: "Moderate",
          colors: ["Deep Navy", "Charcoal", "Burgundy", "Forest Green"]
        },
        {
          id: 5,
          name: "Suede Blackout",
          type: "Faux Suede",
          characteristics: ["Soft texture", "Excellent light control", "Luxurious appearance", "Good insulation"],
          bestFor: "Master bedrooms, study rooms",
          lightFiltering: "Minimal",
          durability: "High",
          maintenance: "Dry clean only",
          priceRange: "Premium",
          colors: ["Burgundy", "Chocolate", "Midnight Blue", "Taupe"]
        },
        {
          id: 6,
          name: "Velvet Blackout",
          type: "Cotton Velvet",
          characteristics: ["Luxurious velvet", "Thermal properties", "Rich colors", "Sound dampening"],
          bestFor: "Formal rooms, theaters",
          lightFiltering: "None",
          durability: "High",
          maintenance: "Professional cleaning",
          priceRange: "Luxury",
          colors: ["Forest Green", "Royal Blue", "Wine Red", "Golden Brown"]
        }
      ]
    },
    {
      category: "Sheer & Voile",
      description: "Light, airy fabrics for gentle privacy and soft light",
      fabrics: [
        {
          id: 7,
          name: "Pure Voile",
          type: "100% Cotton",
          characteristics: ["Light and airy", "Gentle privacy", "Soft light filtering", "Easy care"],
          bestFor: "Living rooms, kitchens",
          lightFiltering: "High (soft diffusion)",
          durability: "Good",
          maintenance: "Machine washable",
          priceRange: "Budget-friendly",
          colors: ["White", "Cream", "Soft Pink", "Light Blue"]
        },
        {
          id: 8,
          name: "Lace Voile",
          type: "Cotton/Polyester",
          characteristics: ["Delicate lace pattern", "Decorative", "Soft filtering", "Traditional style"],
          bestFor: "Traditional homes, bedrooms",
          lightFiltering: "High",
          durability: "Moderate",
          maintenance: "Gentle wash",
          priceRange: "Moderate",
          colors: ["Ivory", "Antique White", "Soft Beige", "Pearl"]
        },
        {
          id: 9,
          name: "Embroidered Sheer",
          type: "Polyester",
          characteristics: ["Elegant embroidery", "Light diffusion", "Decorative patterns", "Modern style"],
          bestFor: "Contemporary homes, dining",
          lightFiltering: "High",
          durability: "Good",
          maintenance: "Easy care",
          priceRange: "Moderate",
          colors: ["Beige", "Soft Grey", "Champagne", "White"]
        }
      ]
    }
  ];

  const liningTypes = [
    {
      name: "No Lining",
      description: "Natural fabric drape, maximum light filtering",
      benefits: ["Cost-effective", "Natural drape", "Lightweight"],
      drawbacks: ["Less privacy", "Faster fading", "Less insulation"],
      bestFor: "Decorative curtains, sheers"
    },
    {
      name: "Standard Lining",
      description: "Cotton or polyester backing for improved durability",
      benefits: ["Better privacy", "Protects main fabric", "Improved drape"],
      drawbacks: ["Slightly more expensive", "Heavier"],
      bestFor: "Most residential applications"
    },
    {
      name: "Thermal Lining",
      description: "Insulating layer for energy efficiency",
      benefits: ["Energy savings", "Temperature control", "Noise reduction"],
      drawbacks: ["Higher cost", "Bulkier appearance"],
      bestFor: "Large windows, extreme climates"
    },
    {
      name: "Blackout Lining",
      description: "Complete light blocking for better sleep",
      benefits: ["100% light blocking", "Better sleep", "Privacy"],
      drawbacks: ["Most expensive", "Heaviest option"],
      bestFor: "Bedrooms, home theaters"
    }
  ];

  const curtainStyles = [
    {
      name: "Rod Pocket",
      description: "Fabric sleeve sewn at the top for rod insertion",
      appearance: "Gathered, casual look",
      functionality: "Easy to hang, stationary",
      bestFor: "Casual spaces, lightweight fabrics"
    },
    {
      name: "Grommet Top",
      description: "Metal rings at the top for modern appearance",
      appearance: "Clean, contemporary lines",
      functionality: "Easy to slide, modern look",
      bestFor: "Contemporary homes, heavy fabrics"
    },
    {
      name: "Pleated Heading",
      description: "Formal pleats sewn at the top",
      appearance: "Traditional, elegant",
      functionality: "Professional appearance, structured",
      bestFor: "Formal rooms, traditional decor"
    },
    {
      name: "Tab Top",
      description: "Fabric loops at the top",
      appearance: "Casual, relaxed",
      functionality: "Easy hanging, decorative",
      bestFor: "Casual spaces, country style"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Premium Fabric Samples - KK Curtain Design | Quality Curtain Materials"
        description="Explore our collection of premium curtain fabrics. High-quality materials for custom curtains, from elegant silks to durable cottons. Order samples today."
        keywords="curtain fabrics, premium curtain materials, fabric samples, curtain fabric types, quality curtain textiles, South Africa curtain fabrics"
        url="https://your-domain.com/fabric-samples"
      />
      <Header />
      
      <main className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Fabric & Style Guide</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Explore our comprehensive guide to curtain fabrics, linings, and styles. 
              Learn about different options to make the perfect choice for your home.
            </p>
          </div>

          {/* Educational Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-12">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Educational Resource</h3>
                <p className="text-blue-700 mb-3">
                  This guide helps you understand different fabric types, linings, and curtain styles. 
                  Use this information to make informed decisions when requesting your quote.
                </p>
                <p className="text-sm text-blue-600">
                  💡 Ready to order? <a href="/quote" className="underline font-medium">Get your personalized quote here</a>
                </p>
              </div>
            </div>
          </div>

          {/* Fabric Categories */}
          {fabricCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3">{category.category}</h2>
                <p className="text-muted-foreground text-lg">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.fabrics.map((fabric) => (
                  <div key={fabric.id} className="card-soft overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <Palette className="w-5 h-5 text-primary" />
                        <h3 className="font-bold text-xl">{fabric.name}</h3>
                      </div>
                      <p className="text-primary font-medium mb-4">{fabric.type}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Characteristics:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {fabric.characteristics.map((char, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                {char}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">Best for:</span>
                            <p className="text-muted-foreground">{fabric.bestFor}</p>
                          </div>
                          <div>
                            <span className="font-medium">Light filtering:</span>
                            <p className="text-muted-foreground">{fabric.lightFiltering}</p>
                          </div>
                          <div>
                            <span className="font-medium">Durability:</span>
                            <p className="text-muted-foreground">{fabric.durability}</p>
                          </div>
                          <div>
                            <span className="font-medium">Price range:</span>
                            <p className="text-muted-foreground">{fabric.priceRange}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-sm mb-2">Available Colors:</h4>
                          <div className="flex flex-wrap gap-2">
                            {fabric.colors.map((color, index) => (
                              <span 
                                key={index}
                                className="bg-accent px-2 py-1 rounded-full text-xs text-accent-foreground"
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-border">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Info className="w-4 h-4 mr-1" />
                            <span>Maintenance: {fabric.maintenance}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Lining Guide */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Curtain Lining Guide</h2>
              <p className="text-muted-foreground text-lg">
                Understanding different lining options and their benefits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {liningTypes.map((lining, index) => (
                <div key={index} className="card-soft p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Layers className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg">{lining.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{lining.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-green-700 mb-1">Benefits:</h4>
                      <ul className="text-sm space-y-1">
                        {lining.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-green-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-orange-700 mb-1">Considerations:</h4>
                      <ul className="text-sm space-y-1">
                        {lining.drawbacks.map((drawback, idx) => (
                          <li key={idx} className="flex items-center text-orange-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                            {drawback}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t border-border">
                      <span className="font-medium text-sm">Best for: </span>
                      <span className="text-muted-foreground text-sm">{lining.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Curtain Styles Guide */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Curtain Styles & Headings</h2>
              <p className="text-muted-foreground text-lg">
                Different hanging styles for different looks and functions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curtainStyles.map((style, index) => (
                <div key={index} className="card-soft p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Eye className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg">{style.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{style.description}</p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Appearance: </span>
                      <span className="text-muted-foreground">{style.appearance}</span>
                    </div>
                    <div>
                      <span className="font-medium">Functionality: </span>
                      <span className="text-muted-foreground">{style.functionality}</span>
                    </div>
                    <div>
                      <span className="font-medium">Best for: </span>
                      <span className="text-muted-foreground">{style.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-accent rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Choose Your Perfect Curtains?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Now that you understand the different options available, get a personalized quote 
                for your custom curtains. Our experts will help you make the perfect choice for your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/quote"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Palette className="w-4 h-4" />
                  <span>Get My Custom Quote</span>
                </a>
                <a
                  href="https://wa.me/27722659132?text=Hi! I have questions about fabric options after viewing your guide."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center space-x-2"
                >
                  <Info className="w-4 h-4" />
                  <span>Ask Our Experts</span>
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

export default FabricSamples;