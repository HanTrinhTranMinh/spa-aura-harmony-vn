
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Hydrating Face Serum",
    price: "$45.99",
    originalPrice: "$55.99",
    rating: 4.8,
    image: "💧"
  },
  {
    name: "Anti-Aging Night Cream",
    price: "$65.99",
    originalPrice: "$75.99",
    rating: 4.9,
    image: "🌙"
  },
  {
    name: "Vitamin C Brightening Serum",
    price: "$52.99",
    originalPrice: "$62.99",
    rating: 4.7,
    image: "🍊"
  },
  {
    name: "Gentle Cleansing Foam",
    price: "$32.99",
    originalPrice: "$42.99",
    rating: 4.6,
    image: "🧼"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-spa-pink/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spa-navy mb-4">
            Premium Skincare Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium skincare products for your daily beauty routine
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-spa-purple/10 to-spa-coral/10 flex items-center justify-center">
                <span className="text-4xl">{product.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                </div>
                <h3 className="font-semibold text-spa-navy mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-bold text-spa-coral">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                </div>
                <Button className="w-full bg-spa-navy hover:bg-spa-navy/90 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 bg-gradient-to-r from-spa-coral to-spa-purple text-white rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-2">Grab the top 5k gift pack on summer</h3>
          <p className="mb-6">Limited time offer - Get premium skincare products at unbeatable prices</p>
          <Button className="bg-white text-spa-navy hover:bg-white/90 px-8 py-3 rounded-full font-semibold">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
