
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <h1 className="text-3xl font-bold text-spa-purple italic">Byutifeeya</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-spa-purple transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-spa-purple transition-colors font-medium">Services</Link>
            <Link to="/about" className="text-gray-700 hover:text-spa-purple transition-colors font-medium">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-spa-purple transition-colors font-medium">Blog</Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Card</span>
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-spa-purple transition-colors" />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-spa-navy text-white rounded-full flex items-center justify-center text-xs">
                  0
                </div>
              </div>
            </div>
            
            <Button className="bg-spa-navy hover:bg-spa-navy/90 text-white px-6 py-2 rounded-full font-semibold">
              Shop Now
            </Button>
            
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
