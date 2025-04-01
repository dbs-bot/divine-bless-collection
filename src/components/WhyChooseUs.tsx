
import React from 'react';
import { 
  Award, 
  Truck, 
  Clock, 
  Star, 
  Palette 
} from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Award className="h-10 w-10 text-divine-gold" />,
      title: 'Handcrafted with Devotion',
      description: 'Each piece is meticulously handcrafted by skilled artisans with years of experience and deep spiritual connection.'
    },
    {
      icon: <Star className="h-10 w-10 text-divine-gold" />,
      title: 'Premium Quality Materials',
      description: 'We use only the finest materials including brass, marble, and eco-friendly compounds for durability and aesthetic appeal.'
    },
    {
      icon: <Palette className="h-10 w-10 text-divine-gold" />,
      title: 'Exclusive Designs',
      description: 'Our collection features both traditional and contemporary designs, many exclusive to Divine Bless.'
    },
    {
      icon: <Truck className="h-10 w-10 text-divine-gold" />,
      title: 'Free Festival Delivery',
      description: 'Enjoy free and secure delivery during major festivals to ensure your divine statues arrive in perfect condition.'
    },
    {
      icon: <Clock className="h-10 w-10 text-divine-gold" />,
      title: 'Timeless Heritage',
      description: 'Our statues preserve cultural and spiritual heritage, passing traditions from generation to generation.'
    }
  ];

  return (
    <section id="about" className="divine-section section-padding bg-divine-cream/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="divine-heading">Why Our Divine Statues Are Special</h2>
          <p className="divine-subheading max-w-2xl mx-auto">
            Bringing devotion, craftsmanship, and heritage to your sacred space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-divine-gold/20 hover:border-divine-gold/50 transition-colors duration-300">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-display font-bold text-divine-maroon mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-divine-gold/10 p-6 rounded-lg border border-divine-gold/30">
          <h3 className="text-xl font-display font-bold text-divine-maroon mb-3">Our Commitment to Authenticity</h3>
          <p className="text-gray-700">
            At Divine Bless, we believe that divine statues are not just decorative items but carriers of spiritual energy and cultural values. 
            Each piece in our collection is created with respect for traditional craftsmanship while meeting modern aesthetic standards. 
            We work directly with artisan communities to ensure fair practices and preserve ancient techniques.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
