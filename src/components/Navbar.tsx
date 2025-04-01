
import React from 'react';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-divine-maroon text-2xl font-display font-bold">Divine</span>
              <span className="text-divine-gold text-2xl font-display font-bold">Bless</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-divine-gold transition-colors duration-300">Home</Link>
            <Link to="/collections" className="text-gray-700 hover:text-divine-gold transition-colors duration-300">Collections</Link>
            <a href="#festivals" className="text-gray-700 hover:text-divine-gold transition-colors duration-300">Festivals</a>
            <a href="#about" className="text-gray-700 hover:text-divine-gold transition-colors duration-300">About Us</a>
            <Link to="/contact" className="text-gray-700 hover:text-divine-gold transition-colors duration-300">Contact</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-1 text-gray-700 hover:text-divine-gold transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="p-1 text-gray-700 hover:text-divine-gold transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="p-1 text-gray-700 hover:text-divine-gold transition-colors duration-300 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-divine-red text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
