
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-spa-pink to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-spa-navy leading-tight">
                We Style &<br />
                You Smile<br />
                <span className="text-spa-purple">Bright</span>
              </h1>
              <p className="text-gray-600 text-lg max-w-md">
                Experience professional spa treatments that rejuvenate your body and soul
              </p>
            </div>

            <Button className="bg-spa-purple hover:bg-spa-purple/90 text-white px-8 py-3 rounded-full text-lg">
              Book Appointment
            </Button>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>hello@shelone.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Call: +84 936 666 888</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Daily: 9AM - 9PM</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-spa-purple/20 to-spa-coral/20 rounded-3xl flex items-center justify-center">
              <div className="text-center text-spa-navy">
                <div className="w-24 h-24 bg-spa-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">💆‍♀️</span>
                </div>
                <p className="text-lg font-medium">Professional Spa Care</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-spa-coral/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-spa-purple/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
