
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Celebrate Your Faith with Exquisite Divine Statues
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover a wide collection of beautiful God Statues for every festival and occasion.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-divine-gold hover:bg-divine-gold/90 text-white text-lg py-6 px-8 flex items-center gap-2"
            >
              Shop Now <ArrowRight size={20} />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg py-6 px-8"
            >
              View Collections
            </Button>
          </div>
          
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm py-3 px-6 rounded-full">
            <p className="text-white/90">
              Free shipping on orders over ₹1999 | Celebrate Ganesh Chaturthi with 15% off
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
