import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noIndex?: boolean;
}

const SEO = ({
  title = "KK Curtain Design - Premium Custom Curtains South Africa",
  description = "Transform your home with bespoke curtains crafted by skilled artisans. Premium fabrics, perfect fit, delivered nationwide across South Africa.",
  keywords = "custom curtains, curtain design, South Africa curtains, bespoke curtains, premium fabrics, curtain installation, home decor, window treatments",
  image = "https://kkcurtaindesign.co.za/og-image.jpg",
  url = "https://kkcurtaindesign.co.za",
  type = "website",
  noIndex = false
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href="https://kkcurtaindesign.co.za/" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KK Curtain Design" />
      <meta property="og:locale" content="en_ZA" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      
      {/* No Index */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Preload critical images */}
      <link rel="preload" as="image" href={image} />
    </Helmet>
  );
};

export default SEO;