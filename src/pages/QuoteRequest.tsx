import { useState } from 'react';
import { MessageCircle, CheckCircle, Info, Ruler, Package, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { addQuoteRequest } from '../lib/firebaseService';
import SEO from '../components/SEO';

const QuoteRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    width: '',
    height: '',
    numberOfCurtains: '2',
    fabricType: '',
    lace: 'no',
    lining: 'no',
    rooms: '1',
    address: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number format
    if (!formData.phone.match(/^\+?[0-9\s]{10,15}$/)) {
      alert('Please enter a valid phone number (e.g. +27 12 345 6789)');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Create quote request object
      const quoteRequest = {
        ...formData,
        status: 'New Request',
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString()
      };
  
      // Save to Firebase
      const quoteId = await addQuoteRequest(quoteRequest);
      
      // Also save to localStorage as backup
      const existingQuotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
      existingQuotes.push({ id: quoteId, ...quoteRequest });
      localStorage.setItem('quoteRequests', JSON.stringify(existingQuotes));
      
      // Prepare WhatsApp message
      const message = `🏠 New Curtain Quote Request\n\n` +
        `👤 Customer Details:\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || 'Not provided'}\n\n` +
        `📏 Curtain Specifications:\n` +
        `Size: ${formData.width}m (W) x ${formData.height}m (H)\n` +
        `Number of Curtains: ${formData.numberOfCurtains}\n` +
        `Fabric Type: ${formData.fabricType}\n` +
        `Lace Trim: ${formData.lace}\n` +
        `Lining: ${formData.lining}\n` +
        `Number of Rooms: ${formData.rooms}\n\n` +
        `📍 Delivery Address: ${formData.address}\n\n` +
        `📝 Additional Notes: ${formData.notes || 'None'}\n\n` +
        `Request ID: ${quoteId}`;
    
      window.open(`https://wa.me/27722659132?text=${encodeURIComponent(message)}`, '_blank');
    
      // Navigate to thank you page
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    
    } catch (error) {
      console.error('Error submitting quote request:', error);
      setSubmitError('There was an error submitting your request. Please try again.');
    
      // Fallback to localStorage only
      const quoteRequest = {
        id: Date.now().toString(),
        ...formData,
        status: 'New Request',
        date: new Date().toISOString().split('T')[0],
        timestamp: new Date().toISOString()
      };
    
      const existingQuotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
      existingQuotes.push(quoteRequest);
      localStorage.setItem('quoteRequests', JSON.stringify(existingQuotes));
    
      // Still show WhatsApp message with localStorage ID
      const message = `🏠 New Curtain Quote Request\n\n` +
        `👤 Customer Details:\n` +
        `Name: ${formData.name}\n` +
        `Phone: ${formData.phone}\n` +
        `Email: ${formData.email || 'Not provided'}\n\n` +
        `📏 Curtain Specifications:\n` +
        `Size: ${formData.width}m (W) x ${formData.height}m (H)\n` +
        `Number of Curtains: ${formData.numberOfCurtains}\n` +
        `Fabric Type: ${formData.fabricType}\n` +
        `Lace Trim: ${formData.lace}\n` +
        `Lining: ${formData.lining}\n` +
        `Number of Rooms: ${formData.rooms}\n\n` +
        `📍 Delivery Address: ${formData.address}\n\n` +
        `📝 Additional Notes: ${formData.notes || 'None'}\n\n` +
        `Request ID: ${quoteRequest.id} (offline)`;
    
      window.open(`https://wa.me/27722659132?text=${encodeURIComponent(message)}`, '_blank');
    
      // Navigate to thank you page anyway
      setTimeout(() => {
        navigate('/thank-you');
      }, 1000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fabricTypes = [
    "Natural Linen",
    "Belgian Linen", 
    "Thermal Blackout",
    "Suede Blackout",
    "Velvet Blackout",
    "Pure Voile",
    "Lace Voile",
    "Embroidered Sheer",
    "Cotton Blend",
    "Silk",
    "Other (specify in notes)"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Get Custom Curtain Quote - KK Curtain Design | Free Estimate"
        description="Request a free quote for your custom curtains. Professional measurement, premium fabrics, and expert installation across South Africa. Fast turnaround guaranteed."
        keywords="curtain quote, custom curtain price, curtain estimate, South Africa curtain service, free curtain quote, curtain consultation"
        url="https://your-domain.com/quote"
      />
      <Header />
      
      <main className="pt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Get Your Custom Curtain Quote</h1>
            <p className="text-muted-foreground text-lg">
              Fill out this simple form to receive a personalized quote for your beautiful custom curtains. 
              We'll respond within 24 hours with detailed pricing and next steps.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card-soft p-8">
            {/* Personal Information Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <h2 className="text-xl font-semibold">Your Contact Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                    placeholder="e.g. +27 123 456 789"
                  />
                  <p className="text-xs text-muted-foreground mt-1">We'll contact you via WhatsApp</p>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">
                    Email Address <span className="text-muted-foreground text-sm">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-soft w-full"
                    placeholder="e.g. john@example.com"
                  />
                  <p className="text-xs text-muted-foreground mt-1">For sending quotes and updates</p>
                </div>
              </div>
            </div>

            {/* Curtain Specifications Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl font-semibold">Curtain Specifications</h2>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-2">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-900 mb-1">How to Measure Your Windows</h3>
                    <p className="text-sm text-blue-700">
                      Measure the width and height of your window frame. Add 20-30cm to width for proper coverage. 
                      For height, measure from where you want the curtain rod to the floor.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Ruler className="w-4 h-4 inline mr-1" />
                    Width (meters) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    max="10"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                    placeholder="e.g. 2.5"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Window width + extra coverage</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Ruler className="w-4 h-4 inline mr-1" />
                    Height (meters) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min="0.5"
                    max="5"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                    placeholder="e.g. 2.4"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Rod to floor measurement</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Package className="w-4 h-4 inline mr-1" />
                    Number of Curtains <span className="text-red-500">*</span>
                  </label>
                  <select
                    title="Select number of curtains"
                    name="numberOfCurtains"
                    value={formData.numberOfCurtains}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                  >
                    <option value="1">1 curtain panel</option>
                    <option value="2">2 curtain panels (pair)</option>
                    <option value="3">3 curtain panels</option>
                    <option value="4">4 curtain panels</option>
                    <option value="5">5+ curtain panels</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">Most windows use 2 panels</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Palette className="w-4 h-4 inline mr-1" />
                    Fabric Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    title="Select fabric type"
                    name="fabricType"
                    value={formData.fabricType}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                  >
                    <option value="">Choose your fabric...</option>
                    {fabricTypes.map((fabric) => (
                      <option key={fabric} value={fabric}>{fabric}</option>
                    ))}
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">
                    <a href="/fabric-samples" className="text-primary hover:underline">
                      View fabric samples →
                    </a>
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Number of Rooms</label>
                  <select
                    title="Select number of rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                    className="input-soft w-full"
                  >
                    <option value="1">1 room</option>
                    <option value="2">2 rooms</option>
                    <option value="3">3 rooms</option>
                    <option value="4">4+ rooms</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">For bulk pricing</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Lace Trim</label>
                  <select
                    title="Select lace trim option"
                    name="lace"
                    value={formData.lace}
                    onChange={handleChange}
                    className="input-soft w-full"
                  >
                    <option value="no">No lace trim</option>
                    <option value="yes">Yes, add lace trim</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">Decorative lace edging</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Lining Type</label>
                  <select
                    title="Select lining type"
                    name="lining"
                    value={formData.lining}
                    onChange={handleChange}
                    className="input-soft w-full"
                  >
                    <option value="no">No lining</option>
                    <option value="standard">Standard lining</option>
                    <option value="thermal">Thermal lining (energy saving)</option>
                    <option value="blackout">Blackout lining (blocks light)</option>
                  </select>
                  <p className="text-xs text-muted-foreground mt-1">Improves durability & function</p>
                </div>
              </div>
            </div>

            {/* Delivery Information Section */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl font-semibold">Delivery & Additional Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input-soft w-full"
                    placeholder="e.g. Cape Town, Western Cape"
                  />
                  <p className="text-xs text-muted-foreground mt-1">City and province for delivery quote</p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Additional Notes</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="input-soft w-full"
                    placeholder="Any special requirements, color preferences, or questions... You can also send inspiration photos via WhatsApp after submitting this form."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    💡 Tip: Send us photos of your space via WhatsApp for better recommendations
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending Request...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Get My Quote via WhatsApp</span>
                  </span>
                )}
              </button>
              <p className="text-sm text-muted-foreground mt-3">
                We'll respond within 24 hours with your personalized quote
              </p>
            </div>
          </form>

          <div className="mt-8 bg-accent rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2">What happens after you submit?</h3>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• We'll review your request within 24 hours</li>
                  <li>• You'll receive a detailed quote via WhatsApp</li>
                  <li>• Send inspiration photos directly via WhatsApp</li>
                  <li>• We'll schedule a consultation if needed</li>
                  <li>• Production begins after approval and deposit</li>
                </ul>
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

export default QuoteRequest;