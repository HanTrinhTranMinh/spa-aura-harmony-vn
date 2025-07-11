
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-spa-navy">SHELONE</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-spa-purple transition-colors">Shop</a>
            <a href="#" className="text-gray-700 hover:text-spa-purple transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-spa-purple transition-colors">Blogs</a>
            <a href="#" className="text-gray-700 hover:text-spa-purple transition-colors">Contact</a>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-spa-purple transition-colors" />
            <Button className="bg-spa-coral hover:bg-spa-coral/90 text-white px-6 py-2 rounded-full">
              Appointment
            </Button>
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
