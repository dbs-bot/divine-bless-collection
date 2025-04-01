
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-divine-maroon text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">About Divine Bless</h3>
            <p className="text-white/80 mb-4">
              We are dedicated to bringing divine energy into your homes through beautifully crafted statues that honor our rich cultural heritage.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-divine-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-divine-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-divine-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-divine-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Home</a></li>
              <li><a href="#collections" className="text-white/80 hover:text-divine-gold transition-colors">Collections</a></li>
              <li><a href="#festivals" className="text-white/80 hover:text-divine-gold transition-colors">Festival Offers</a></li>
              <li><a href="#about" className="text-white/80 hover:text-divine-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-divine-gold transition-colors">Track Your Order</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-divine-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80">123 Divine Street, Spiritual Square, Mumbai, 400001, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-divine-gold" />
                <span className="text-white/80">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-divine-gold" />
                <span className="text-white/80">info@divinebless.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>© {new Date().getFullYear()} Divine Bless. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Images are for representation only. Actual product may vary slightly in color and design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
