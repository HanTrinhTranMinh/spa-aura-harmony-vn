
const Footer = () => {
  return (
    <footer className="bg-spa-navy text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">SHELONE</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for professional spa and beauty treatments.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-spa-purple rounded-full flex items-center justify-center cursor-pointer hover:bg-spa-coral transition-colors">
                <span>f</span>
              </div>
              <div className="w-10 h-10 bg-spa-purple rounded-full flex items-center justify-center cursor-pointer hover:bg-spa-coral transition-colors">
                <span>ig</span>
              </div>
              <div className="w-10 h-10 bg-spa-purple rounded-full flex items-center justify-center cursor-pointer hover:bg-spa-coral transition-colors">
                <span>tw</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Hair Styling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facial Treatment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nail Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skin Care</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>📍 123 Beauty Street, Hanoi</p>
              <p>📞 +84 936 666 888</p>
              <p>✉️ hello@shelone.com</p>
              <p>🕒 Daily: 9AM - 9PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SHELONE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
