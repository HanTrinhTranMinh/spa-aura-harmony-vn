
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingData = [
  { service: "Basic Facial Treatment", price: "$45", duration: "45 min" },
  { service: "Deep Cleansing Facial", price: "$65", duration: "60 min" },
  { service: "Anti-Aging Treatment", price: "$85", duration: "75 min" },
  { service: "Hydrating Facial", price: "$55", duration: "50 min" },
  { service: "Acne Treatment", price: "$70", duration: "60 min" },
  { service: "Brightening Facial", price: "$75", duration: "65 min" },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spa-navy mb-4">
            Competitive Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all our premium spa services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <div className="bg-spa-gradient text-white p-6">
              <h3 className="text-2xl font-bold">Service Pricing Menu</h3>
              <p>The Best Service Comparatively</p>
            </div>
            
            <div className="divide-y">
              {pricingData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-6 hover:bg-spa-pink/20 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-spa-purple/10 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-spa-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-spa-navy">{item.service}</h4>
                      <p className="text-sm text-gray-600">{item.duration}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-spa-coral">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
