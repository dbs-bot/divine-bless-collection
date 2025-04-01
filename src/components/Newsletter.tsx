
import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="divine-section section-padding bg-divine-gold/10">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="divine-heading mb-3">Stay Updated with Our Latest Designs & Festival Offers</h2>
          <p className="text-lg text-gray-700 mb-8">
            Sign up to receive exclusive discounts and updates about our latest god statues.
            Be the first to know about special festival collections and limited editions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email here" 
              className="rounded-md border-divine-gold/30 focus:border-divine-gold focus:ring-divine-gold" 
            />
            <Button className="bg-divine-gold hover:bg-divine-gold/90 text-white">
              <Mail className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            By subscribing, you agree to receive marketing emails from Divine Bless.
            Don't worry, we respect your privacy and will never share your information.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
