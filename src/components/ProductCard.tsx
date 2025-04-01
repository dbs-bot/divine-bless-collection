
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  discountPrice?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  name, 
  description, 
  price, 
  discountPrice 
}) => {
  return (
    <div className="divine-card overflow-hidden rounded-lg">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-divine-maroon">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            {discountPrice ? (
              <div className="flex items-center space-x-2">
                <span className="text-divine-red font-bold">{discountPrice}</span>
                <span className="text-gray-500 line-through text-sm">{price}</span>
              </div>
            ) : (
              <span className="font-bold">{price}</span>
            )}
          </div>
          <Button 
            size="sm" 
            className="bg-divine-gold hover:bg-divine-gold/90 text-white"
          >
            <ShoppingCart size={16} className="mr-1" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
