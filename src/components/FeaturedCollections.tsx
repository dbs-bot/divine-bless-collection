
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedCollections = () => {
  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1602251478284-9d0aea15a10e?auto=format&fit=crop&w=600&q=80',
      name: 'Lord Ganesh Statue',
      description: 'Hand-crafted brass statue of Lord Ganesh, perfect for your home altar.',
      price: '₹1,499',
      discountPrice: '₹1,199',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601182741174-c44b9541dab0?auto=format&fit=crop&w=600&q=80',
      name: 'Lord Shiva Statue',
      description: 'Intricately designed marble statue of Lord Shiva in meditation pose.',
      price: '₹2,599',
      discountPrice: undefined,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1616981035529-b136301695eb?auto=format&fit=crop&w=600&q=80',
      name: 'Goddess Lakshmi Statue',
      description: 'Beautiful golden-plated Lakshmi statue representing wealth and prosperity.',
      price: '₹1,899',
      discountPrice: '₹1,599',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1601370552761-d129028bd833?auto=format&fit=crop&w=600&q=80',
      name: 'Lord Krishna Statue',
      description: 'Elegant Krishna statue with flute, made from premium quality materials.',
      price: '₹1,699',
      discountPrice: undefined,
    },
  ];

  return (
    <section id="collections" className="divine-section section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="divine-heading">Our Most Popular Divine Statues</h2>
          <p className="divine-subheading max-w-2xl mx-auto">
            From Lord Ganesh to Lord Shiva, bring home the essence of divine energy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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
        
        <div className="mt-12 text-center">
          <a href="#" className="divine-button-outline">
            View All Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
