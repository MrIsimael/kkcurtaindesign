import { MessageCircle, Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">KK Curtain Design</h3>
            <p className="text-muted-foreground mb-4">
              Premium custom curtains made to order for South African homes. 
              Quality craftsmanship with nationwide delivery.
            </p>
            <a
              href="https://wa.me/27722659132"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+27 72 265 9132</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">benzabadia@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Nationwide Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-4 h-4 text-primary" />
                <a 
                  href="https://www.instagram.com/kkcurtaindesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @KKCurtainDesign
                </a>
              </div>
            </div>
          </div>

          {/* Delivery Info */}
          <div>
            <h4 className="font-semibold mb-4">Delivery Information</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">• Courier Guy nationwide delivery</p>
              <p className="text-muted-foreground text-sm">• Pick n Pay Pickup Points available</p>
              <p className="text-muted-foreground text-sm">• 3-5 business days delivery time</p>
              <p className="text-muted-foreground text-sm">• Tracking provided for all orders</p>
              <p className="text-muted-foreground text-sm">• Secure packaging guaranteed</p>
            </div>
          </div>

          {/* Address & Map */}
          <div>
            <h4 className="font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div>
                  <p className="text-muted-foreground">
                    84 Helen Joseph St<br />Johannesburg, 2000
                  </p>
                </div>
              </div>
              <div className="w-full max-w-[220px] aspect-video rounded-lg overflow-hidden border border-border">
                <iframe
                  className="border-none"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.780057533151!2d28.045174!3d-26.2038321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e992bbc1aa5%3A0xa7a8c1d8b4b281f7!2s84%20Helen%20Joseph%20St%2C%20Johannesburg%2C%202000!5e0!3m2!1sen!2sza!4v1752848671046!5m2!1sen!2sza"
                  width="220"
                  height="120"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KK Curtain Design Location"
                />
              </div>
            </div>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Return Policy
              </a>
              <a href="#" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 KK Curtain Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
