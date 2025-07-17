import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/27722659132?text=Hi! I'm interested in custom curtains."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppFloat;