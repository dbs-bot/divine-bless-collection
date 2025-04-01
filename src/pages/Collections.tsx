
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Sample product data - in a real app, this would come from an API
const allProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1602251478284-9d0aea15a10e?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Ganesh Statue',
    description: 'Hand-crafted brass statue of Lord Ganesh, perfect for your home altar.',
    price: '₹1,499',
    discountPrice: '₹1,199',
    category: 'ganesh'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1601182741174-c44b9541dab0?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Shiva Statue',
    description: 'Intricately designed marble statue of Lord Shiva in meditation pose.',
    price: '₹2,599',
    discountPrice: undefined,
    category: 'shiva'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1616981035529-b136301695eb?auto=format&fit=crop&w=600&q=80',
    name: 'Goddess Lakshmi Statue',
    description: 'Beautiful golden-plated Lakshmi statue representing wealth and prosperity.',
    price: '₹1,899',
    discountPrice: '₹1,599',
    category: 'lakshmi'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Krishna Statue',
    description: 'Elegant Krishna statue with flute, made from premium quality materials.',
    price: '₹1,699',
    discountPrice: undefined,
    category: 'krishna'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1586959139153-aaa9e408a4dc?auto=format&fit=crop&w=600&q=80',
    name: 'Goddess Durga Statue',
    description: 'Majestic Durga statue with intricate details, symbolizing strength and power.',
    price: '₹2,199',
    discountPrice: '₹1,899',
    category: 'durga'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1625646311659-3d3372cad2f8?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Hanuman Statue',
    description: 'Powerful Hanuman statue in devotional pose, crafted from premium brass.',
    price: '₹1,799',
    discountPrice: '₹1,549',
    category: 'hanuman'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1601182742616-5cd2997f71c7?auto=format&fit=crop&w=600&q=80',
    name: 'Radha Krishna Statue',
    description: 'Beautiful statue depicting the divine love of Radha and Krishna.',
    price: '₹2,299',
    discountPrice: undefined,
    category: 'krishna'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1593426113084-a5c4e8c91fca?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Saraswati Statue',
    description: 'Elegant statue of Goddess Saraswati with veena, symbol of knowledge and arts.',
    price: '₹1,899',
    discountPrice: '₹1,649',
    category: 'saraswati'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1593769109813-9b4e7713f21e?auto=format&fit=crop&w=600&q=80',
    name: 'Lord Ganesha Dancing',
    description: 'Joyful dancing Ganesha statue, bringing happiness and removing obstacles.',
    price: '₹1,299',
    discountPrice: '₹1,099',
    category: 'ganesh'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1602251477671-93ef6f926f81?auto=format&fit=crop&w=600&q=80',
    name: 'Nataraja Shiva Statue',
    description: 'Cosmic dance of Lord Shiva as Nataraja, symbol of creation and destruction.',
    price: '₹2,899',
    discountPrice: '₹2,499',
    category: 'shiva'
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1618772446767-ef51ecd3d209?auto=format&fit=crop&w=600&q=80',
    name: 'Baby Krishna Statue',
    description: 'Adorable statue of child Krishna, bringing playfulness and joy to your home.',
    price: '₹1,399',
    discountPrice: '₹1,199',
    category: 'krishna'
  },
  {
    id: 12,
    image: 'https://images.unsplash.com/photo-1618772299904-f6749c7e7cd8?auto=format&fit=crop&w=600&q=80',
    name: 'Panchmukhi Hanuman',
    description: 'Five-faced Hanuman statue, representing ultimate devotion and power.',
    price: '₹2,199',
    discountPrice: undefined,
    category: 'hanuman'
  },
];

const Collections = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Filter products based on search term
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="divine-section section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="divine-heading">Our Divine Collection</h1>
              <p className="divine-subheading max-w-2xl mx-auto">
                Explore our complete collection of handcrafted divine statues, perfect for your home or temple.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto mt-8">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search statues..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                  }}
                />
              </div>
            </div>
            
            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    discountPrice={product.discountPrice}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">No products found matching "{searchTerm}"</p>
              </div>
            )}
            
            {/* Pagination */}
            {filteredProducts.length > productsPerPage && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => setCurrentPage(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
