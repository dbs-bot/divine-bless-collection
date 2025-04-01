
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, Calendar, ShoppingCart, Heart, Share2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import ProductCard from '@/components/ProductCard';

// Mock product data
const products = [
  {
    id: "1",
    name: "Lord Ganesh Brass Statue",
    description: "Handcrafted Lord Ganesh brass statue, perfect for your home altar or as a gift.",
    price: "₹2,499",
    discountPrice: "₹1,999",
    image: "https://images.unsplash.com/photo-1621872311586-eb150ab7cf27?q=80&w=1974&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    stock: 15,
    deliveryEstimate: "3-5 days",
    specifications: [
      { name: "Material", value: "Brass" },
      { name: "Height", value: "8 inches" },
      { name: "Weight", value: "1.2 kg" },
      { name: "Finish", value: "Antique gold" }
    ],
    longDescription: "This exquisite Lord Ganesh statue is meticulously handcrafted by skilled artisans using traditional techniques. Made from high-quality brass with an antique gold finish, it radiates divine energy and blessings. The statue features intricate details showcasing Lord Ganesh in a seated position, symbolizing wisdom, prosperity, and the removal of obstacles. Perfect for your home temple, office space, or as a thoughtful gift for loved ones during festivals and special occasions."
  },
  {
    id: "2",
    name: "Lord Shiva Meditating Statue",
    description: "Beautifully detailed meditating Lord Shiva statue with trident.",
    price: "₹3,299",
    discountPrice: "₹2,799",
    image: "https://images.unsplash.com/photo-1590846083693-f23fcddfc9a7?q=80&w=1972&auto=format&fit=crop",
    rating: 4.9,
    reviews: 86,
    stock: 8,
    deliveryEstimate: "4-6 days",
    specifications: [
      { name: "Material", value: "White marble" },
      { name: "Height", value: "10 inches" },
      { name: "Weight", value: "1.8 kg" },
      { name: "Finish", value: "Natural stone" }
    ],
    longDescription: "This serene Lord Shiva statue depicts the great deity in deep meditation, showcasing peace and spiritual enlightenment. Crafted from premium white marble, each piece is unique with natural stone variations. The statue features Lord Shiva in Padmasana (lotus position) with intricate detailing of his matted locks, the sacred river Ganga, and the crescent moon. This divine piece brings tranquility and powerful spiritual energy to your sacred space."
  },
  {
    id: "3",
    name: "Goddess Lakshmi Gold-Plated Idol",
    description: "Elegant Goddess Lakshmi statue symbolizing wealth and prosperity.",
    price: "₹4,999",
    discountPrice: "₹3,999",
    image: "https://images.unsplash.com/photo-1623071286883-25db1631b089?q=80&w=2071&auto=format&fit=crop",
    rating: 4.7,
    reviews: 92,
    stock: 5,
    deliveryEstimate: "5-7 days",
    specifications: [
      { name: "Material", value: "Brass with gold plating" },
      { name: "Height", value: "9 inches" },
      { name: "Weight", value: "1.5 kg" },
      { name: "Finish", value: "24K gold plating" }
    ],
    longDescription: "This magnificent Goddess Lakshmi idol represents abundance, prosperity, and divine grace. Expertly crafted from brass with premium 24K gold plating, it showcases the goddess seated on a lotus throne with coins flowing from her hands - symbolizing the flow of wealth and good fortune. Every detail, from her graceful posture to her benevolent expression, is meticulously rendered by master craftsmen. Perfect for Diwali celebrations and daily worship, this idol invites the blessings of wealth and prosperity into your home."
  },
  {
    id: "4",
    name: "Lord Krishna Playing Flute",
    description: "Intricate statue of Lord Krishna playing the divine flute.",
    price: "₹2,899",
    discountPrice: "₹2,199",
    image: "https://plus.unsplash.com/premium_photo-1661962495669-d72424626bdc?q=80&w=2070&auto=format&fit=crop",
    rating: 4.6,
    reviews: 75,
    stock: 12,
    deliveryEstimate: "3-5 days",
    specifications: [
      { name: "Material", value: "Bronze" },
      { name: "Height", value: "12 inches" },
      { name: "Weight", value: "2.1 kg" },
      { name: "Finish", value: "Antique bronze" }
    ],
    longDescription: "This enchanting statue depicts Lord Krishna in his most beloved form - playing the divine flute that mesmerizes all who hear it. Crafted from premium bronze with an antique finish, the statue captures Krishna's playful yet divine nature with remarkable detail. From the peacock feather in his crown to the intricate folds of his dhoti, every element is crafted with precision and devotion. The melodious pose symbolizes the calling of the divine to the human soul. This statue brings Lord Krishna's loving presence and playful energy into your sacred space."
  }
];

// Find related products (excluding the current one)
const getRelatedProducts = (currentId: string) => {
  return products.filter(product => product.id !== currentId).slice(0, 3);
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = products.find(p => p.id === id) || products[0];
  const relatedProducts = getRelatedProducts(product.id);
  
  const handleAddToCart = () => {
    toast(`Added ${quantity} ${product.name} to cart`, {
      description: `Total: ${product.discountPrice} × ${quantity}`,
      duration: 3000
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Back button */}
        <Link 
          to="/collections" 
          className="inline-flex items-center text-divine-maroon hover:text-divine-gold mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Collections
        </Link>
        
        {/* Product details section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product image */}
          <div className="aspect-square overflow-hidden rounded-lg gold-border">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product info */}
          <div className="flex flex-col">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-divine-maroon mb-2">
              {product.name}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) ? "fill-divine-gold text-divine-gold" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-divine-red">
                  {product.discountPrice}
                </span>
                <span className="text-gray-500 line-through">
                  {product.price}
                </span>
                <span className="bg-divine-red/10 text-divine-red text-xs px-2 py-1 rounded">
                  Save {Math.round(((parseInt(product.price.replace(/[^\d]/g, '')) - 
                                    parseInt(product.discountPrice.replace(/[^\d]/g, ''))) / 
                                    parseInt(product.price.replace(/[^\d]/g, ''))) * 100)}%
                </span>
              </div>
            </div>
            
            {/* Stock */}
            <div className="mb-4 text-sm">
              <span className={product.stock > 10 ? "text-green-600" : "text-orange-500"}>
                {product.stock > 0 
                  ? `In Stock (${product.stock} available)` 
                  : "Out of Stock"}
              </span>
            </div>
            
            {/* Short description */}
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            {/* Delivery estimate */}
            <div className="flex items-center gap-2 text-sm text-gray-700 mb-6">
              <Truck size={18} className="text-divine-maroon" />
              <span>Estimated delivery: {product.deliveryEstimate}</span>
            </div>
            
            {/* Quantity selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="mx-4 w-8 text-center">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button 
                className="bg-divine-gold hover:bg-divine-gold/90 text-white flex-1"
                size="lg"
                onClick={handleAddToCart}
              >
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Heart size={18} className="mr-2" />
                Add to Wishlist
              </Button>
            </div>
            
            {/* Share */}
            <Button variant="ghost" size="sm" className="self-start">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Product details tabs */}
        <div className="mb-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="py-3 px-4 text-sm font-medium text-gray-900 w-1/3">
                          {spec.name}
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-700">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {/* Overall rating summary */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-divine-maroon">
                    {product.rating}
                  </div>
                  <div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          className={i < Math.floor(product.rating) ? "fill-divine-gold text-divine-gold" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      Based on {product.reviews} reviews
                    </p>
                  </div>
                </div>
                
                <Separator />
                
                {/* Sample reviews */}
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Aarav Sharma</h4>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < 5 ? "fill-divine-gold text-divine-gold" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">2 months ago</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Absolutely beautiful statue. The craftsmanship is exquisite and it's even more stunning in person. 
                      The gold finish catches the light beautifully. It has become the centerpiece of my home altar.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Priya Patel</h4>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={14} 
                              className={i < 4 ? "fill-divine-gold text-divine-gold" : "text-gray-300"} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">3 weeks ago</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Great quality for the price. The details are precisely carved and the statue has a good weight to it. 
                      Delivery was prompt and the packaging was secure. Would buy from this store again.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related products */}
        <div>
          <h2 className="text-2xl font-display font-bold text-divine-maroon mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link to={`/product/${relatedProduct.id}`} key={relatedProduct.id}>
                <ProductCard 
                  image={relatedProduct.image}
                  name={relatedProduct.name}
                  description={relatedProduct.description}
                  price={relatedProduct.price}
                  discountPrice={relatedProduct.discountPrice}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
