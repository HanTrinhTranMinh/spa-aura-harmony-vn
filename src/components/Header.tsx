
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <h1 className="text-2xl font-bold text-spa-navy">SHELONE</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-spa-purple transition-colors">Trang chủ</Link>
            <Link to="/about" className="text-gray-700 hover:text-spa-purple transition-colors">Về chúng tôi</Link>
            <Link to="/contact" className="text-gray-700 hover:text-spa-purple transition-colors">Liên hệ</Link>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-spa-purple transition-colors" />
            <Link to="/login">
              <Button variant="outline" className="border-spa-purple text-spa-purple hover:bg-spa-purple hover:text-white">
                Đăng nhập
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-spa-coral hover:bg-spa-coral/90 text-white px-6 py-2 rounded-full">
                Đăng ký
              </Button>
            </Link>
            <Menu className="w-6 h-6 text-gray-600 cursor-pointer md:hidden" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
