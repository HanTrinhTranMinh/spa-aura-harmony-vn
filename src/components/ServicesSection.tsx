
import { Card } from "@/components/ui/card";
import { Scissors, Sparkles, Heart, Shield, Sun, Flower } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Style", description: "Professional hair styling and cuts" },
  { icon: Sparkles, title: "Nail Treatment", description: "Manicure and pedicure services" },
  { icon: Heart, title: "Facial Care", description: "Deep cleansing and rejuvenating facials" },
  { icon: Shield, title: "Skin Care", description: "Advanced skincare treatments" },
  { icon: Sun, title: "Tanning", description: "Safe and natural tanning solutions" },
  { icon: Flower, title: "Aroma Therapy", description: "Relaxing aromatherapy sessions" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spa-navy mb-4">
            Choose Your Salon Care
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of spa and beauty services designed to enhance your natural beauty and well-being
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-b from-white to-spa-pink/30"
            >
              <div className="w-16 h-16 bg-spa-purple/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-spa-purple" />
              </div>
              <h3 className="text-xl font-semibold text-spa-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
