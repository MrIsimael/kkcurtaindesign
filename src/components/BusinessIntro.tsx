import { Award, Truck, Users, Clock } from 'lucide-react';

const BusinessIntro = () => {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest fabrics and materials for lasting beauty"
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Skilled artisans with years of experience in custom curtains"
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Reliable delivery to your door across South Africa"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick production and delivery without compromising quality"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose KK Curtain Design?</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With over a decade of experience in custom curtain manufacturing, we pride ourselves on 
            delivering exceptional quality and service to homeowners across South Africa. From initial 
            consultation to final installation guidance, we're with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Space?</h3>
            <p className="text-muted-foreground mb-6">
              Get a personalized quote for your custom curtains today. Our team will work with you 
              to create the perfect window treatments for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27722659132?text=Hi! I'd like to get a quote for custom curtains."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                WhatsApp for Quote
              </a>
              <a
                href="mailto:info@curtaincrafters.co.za"
                className="btn-outline"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessIntro;