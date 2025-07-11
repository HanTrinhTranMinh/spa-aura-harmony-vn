
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-spa-pink to-white py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-spa-navy leading-tight">
                WITH OUR NATURAL<br />
                <span className="text-spa-purple">SKINCARE SOLUTIONS</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
                We believe in the power of natural ingredients to unlock your skin's true potential. Our carefully crafted skincare products are designed to nourish, glowing complexion you've always desired.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Button className="bg-spa-navy hover:bg-spa-navy/90 text-white px-8 py-4 rounded-full text-lg font-semibold">
                Shop Now
              </Button>
              
              {/* Premium Products Badge */}
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-spa-navy">497+</div>
                  <div className="text-sm text-gray-600">Premium Product</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full h-[500px] bg-gradient-to-br from-spa-purple/10 to-spa-coral/10 rounded-3xl overflow-hidden">
              <img 
                src="/lovable-uploads/e4e4fe7a-46f6-4507-bab5-58721b4e0ffa.png" 
                alt="Natural Skincare Treatment"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-8 right-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Profile */}
            <div className="absolute bottom-8 right-8 bg-white rounded-full p-2 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-spa-purple to-spa-coral rounded-full flex items-center justify-center">
                <span className="text-2xl">👨🏽</span>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-spa-coral/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-spa-purple/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
