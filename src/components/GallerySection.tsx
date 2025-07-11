
import { Card } from "@/components/ui/card";

const GallerySection = () => {
  const galleryItems = [
    { type: "Bridal Makeover", image: "👰" },
    { type: "Hair Styling", image: "💇‍♀️" },
    { type: "Facial Treatment", image: "🧖‍♀️" },
    { type: "Nail Art", image: "💅" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-spa-pink/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-spa-navy mb-4">
            Bridal Makeover Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our stunning bridal makeover transformations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="h-64 bg-gradient-to-br from-spa-purple/20 to-spa-coral/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-5xl">{item.image}</span>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-spa-navy">{item.type}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
