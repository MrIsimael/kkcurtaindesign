import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your quote request has been received successfully.
            </p>

            <div className="card-soft p-8 text-left mb-8">
              <h2 className="text-2xl font-semibold mb-4">What happens next?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Review & Response</h3>
                    <p className="text-muted-foreground text-sm">
                      We'll review your request and respond within 24 hours with a detailed quote.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">WhatsApp Contact</h3>
                    <p className="text-muted-foreground text-sm">
                      Expect a WhatsApp message with your personalized quote and any clarifying questions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Consultation</h3>
                    <p className="text-muted-foreground text-sm">
                      If needed, we'll schedule a consultation to finalize measurements and fabric selection.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-foreground text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Production & Delivery</h3>
                    <p className="text-muted-foreground text-sm">
                      After approval and deposit, we'll craft your curtains and arrange delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-2xl p-6 mb-8">
              <h3 className="font-semibold mb-3">Need immediate assistance?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                If you have urgent questions or want to discuss your requirements, 
                feel free to contact us directly on WhatsApp.
              </p>
              <a
                href="https://wa.me/27123456789?text=Hi! I just submitted a quote request and have some questions."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Us Now</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/gallery"
                className="btn-secondary"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ThankYou;