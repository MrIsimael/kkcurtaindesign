import { MessageCircle, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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