
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-divine-maroon mb-6">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-display font-semibold text-divine-maroon mb-4">DivineBless Statues</h2>
            <p className="text-gray-700 mb-6">
              We specialize in crafting divine statues that bring spiritual energy and aesthetic beauty to your home and sacred spaces. 
              Our artisans have decades of experience in traditional craftsmanship with modern design sensibilities.
            </p>
            
            <h3 className="text-xl font-display font-semibold text-divine-maroon mb-3">Reach Us</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-divine-gold" />
                <span>123 Divine Lane, Spiritual Garden, Karnataka, India - 560001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-divine-gold" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-divine-gold" />
                <span>connect@divinebless.com</span>
              </div>
            </div>
            
            <h3 className="text-xl font-display font-semibold text-divine-maroon mb-3">Business Hours</h3>
            <div className="space-y-2 mb-8">
              <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
              <p>Sunday: 11:00 AM - 4:00 PM</p>
              <p>Festival Seasons: Extended hours apply</p>
            </div>
            
            <h3 className="text-xl font-display font-semibold text-divine-maroon mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-divine-gold/10 rounded-full hover:bg-divine-gold/20 transition-colors">
                <Instagram className="text-divine-gold" size={24} />
              </a>
              <a href="#" className="p-2 bg-divine-gold/10 rounded-full hover:bg-divine-gold/20 transition-colors">
                <Facebook className="text-divine-gold" size={24} />
              </a>
              <a href="#" className="p-2 bg-divine-gold/10 rounded-full hover:bg-divine-gold/20 transition-colors">
                <Linkedin className="text-divine-gold" size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-display font-semibold text-divine-maroon mb-4">Send Us a Message</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our products or want to place a custom order? 
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-divine-gold focus:border-divine-gold"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-divine-gold focus:border-divine-gold"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-divine-gold focus:border-divine-gold"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-divine-gold focus:border-divine-gold"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="button" // Non-functional as requested
                className="bg-divine-gold hover:bg-divine-gold/90 text-white py-2.5 px-5 rounded-md transition-colors font-medium"
              >
                Send Message
              </button>
              <p className="text-sm text-gray-500 mt-2">
                * This is a demo form. No data will be submitted.
              </p>
            </form>
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <div className="mt-8">
          <h2 className="text-2xl font-display font-semibold text-divine-maroon mb-4">Visit Our Store</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            {/* Placeholder for a map */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Map View (Google Maps would appear here)</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
