
import React from 'react';
import { Calendar, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FestivalOffers = () => {
  const upcomingFestivals = [
    {
      name: 'Ganesh Chaturthi',
      date: 'September 19, 2023',
      description: 'Celebrate the birth of Lord Ganesh with our special collection of Ganesh statues.',
      discount: '15% OFF',
      image: 'https://images.unsplash.com/photo-1621524877820-2f67471482e8?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Diwali',
      date: 'November 12, 2023',
      description: 'Light up your home with our Lakshmi and Ganesh statue sets for prosperity and happiness.',
      discount: '20% OFF',
      image: 'https://images.unsplash.com/photo-1605015239388-8c1f314904df?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Maha Shivaratri',
      date: 'March 8, 2024',
      description: 'Honor Lord Shiva with our meditation-themed statues and lingam collections.',
      discount: '12% OFF',
      image: 'https://images.unsplash.com/photo-1588099236421-343c83f04be7?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="festivals" className="divine-section section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="divine-heading">Get Ready for the Upcoming Festivals!</h2>
          <p className="divine-subheading max-w-2xl mx-auto">
            Plan ahead and bring home divine blessings for these auspicious occasions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingFestivals.map((festival, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md border border-divine-gold/30 bg-white group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-divine-red text-white py-1 px-3 rounded-full text-sm font-bold">
                  {festival.discount}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-divine-gold mb-2">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{festival.date}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-divine-maroon mb-2">{festival.name}</h3>
                <p className="text-gray-600 mb-4">{festival.description}</p>
                
                <Button className="w-full bg-divine-gold hover:bg-divine-gold/90 text-white flex items-center justify-center gap-2">
                  <Gift size={18} />
                  Pre-order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="divine-button">
            View All Festival Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default FestivalOffers;
