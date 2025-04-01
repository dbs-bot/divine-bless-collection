
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ananya Sharma',
      location: 'Mumbai',
      quote: 'I bought a beautiful Ganesh statue for Ganesh Chaturthi, and the quality was amazing. It brought so much peace and joy to our home. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Vikram Patel',
      location: 'Delhi',
      quote: 'The Shiva statue I purchased is truly a masterpiece. The attention to detail and craftsmanship is exceptional. My meditation space feels complete now.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Priya Reddy',
      location: 'Bangalore',
      quote: 'Divine Bless delivered my Lakshmi statue right on time for Diwali. The packaging was secure and the statue exceeded my expectations in every way.',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <section className="divine-section section-padding bg-divine-blue/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="divine-heading">What Our Customers Say</h2>
          <p className="divine-subheading max-w-2xl mx-auto">
            Join thousands of satisfied devotees who have brought home our divine statues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-divine-gold/20">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-divine-gold/50"
                />
                <div>
                  <h3 className="font-display font-bold text-divine-maroon">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-divine-gold fill-divine-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="text-divine-maroon hover:text-divine-gold transition-colors underline font-medium">
            Read more customer reviews →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
