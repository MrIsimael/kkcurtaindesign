import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import ModernBedroom from '../assets/HomeGallery/ModernBedroom.jpg';
import DinningRoomElegance from '../assets/HomeGallery/DinningRoomElegance.jpg';
import ElegantLivingRoom from '../assets/HomeGallery/ElegantLivingRoom.jpg';
import OfficeSpace from '../assets/HomeGallery/OfficeSpace.jpg';

const GalleryPreview = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Classic Swag Valance Collection",
      description: "Traditional beige curtains with elaborate swag valances and decorative tiebacks",
      image: ElegantLivingRoom,
      altText: "Display of traditional beige curtains featuring elaborate multi-layered swag valances with decorative tiebacks in a curtain showroom, showcasing classic formal window treatment styles with premium fabric construction"
    },
    {
      id: 2,
      title: "Elegant Layered Window Treatment",
      description: "Luxurious beige curtains with decorative tiebacks and delicate lace sheers",
      image: ModernBedroom,
      altText: "Elegant beige curtains with decorative fabric tiebacks paired with delicate white lace sheer panels, showcasing sophisticated layered window treatment with intricate lace patterns and premium fabric quality"
    },
    {
      id: 3,
      title: "Living Room Elegance",
      description: "Luxurious beige curtains with ornate swag valances and decorative tiebacks",
      image: DinningRoomElegance,
      altText: "Elegant traditional living room featuring luxurious beige curtains with ornate swag valances, decorative tiebacks, and layered sheer panels in a formal interior with polished marble flooring"
    },
    {
      id: 4,
      title: "Living Room Bay Window Curtains",
      description: "Golden beige curtains with decorative tiebacks spanning bay window",
      image: OfficeSpace,
      altText: "Elegant Golden beige curtains with decorative tiebacks installed across a bay window in a living room, paired with patterned sheer panels and complementing brown leather sectional sofa"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of custom curtains installed in homes across South Africa. 
            Each piece is crafted with precision and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="card-soft overflow-hidden hover-lift">
              <div className="relative group">
                <LazyImage
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-48"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;