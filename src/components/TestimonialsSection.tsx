import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Cape Town",
    rating: 5,
    text: "Absolutely stunning curtains! The quality is exceptional and they fit perfectly. The whole process was seamless from quote to delivery."
  },
  {
    name: "Michael van der Merwe",
    location: "Johannesburg",
    rating: 5,
    text: "Professional service and beautiful craftsmanship. The curtains have completely transformed our living room. Highly recommended!"
  },
  {
    name: "Priya Patel",
    location: "Durban",
    rating: 5,
    text: "Great communication throughout the process. The curtains arrived exactly as described and the installation was straightforward."
  },
  {
    name: "David Thompson",
    location: "Pretoria",
    rating: 5,
    text: "Excellent attention to detail and fast delivery. The fabric quality is premium and the finishing is impeccable."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative">
          <div className="card-soft p-8 text-center min-h-[200px] flex flex-col justify-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-lg text-foreground mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div>
              <h4 className="font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[currentIndex].location}
              </p>
            </div>
          </div>

          <button
            title="Previous testimonial"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-medium hover:shadow-large transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            title="Next testimonial"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-medium hover:shadow-large transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              title={`View testimonial ${index + 1}`}
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-primary' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;