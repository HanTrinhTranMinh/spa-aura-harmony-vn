
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-spa-pink/30">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-spa-navy mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-gray-600 text-lg">
              Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-spa-navy mb-6">Gửi Tin Nhắn</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên
                    </label>
                    <Input placeholder="Nhập họ và tên" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <Input placeholder="Nhập số điện thoại" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Nhập email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tin nhắn
                  </label>
                  <textarea 
                    className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spa-purple"
                    placeholder="Nhập tin nhắn của bạn..."
                  ></textarea>
                </div>
                <Button className="w-full bg-spa-purple hover:bg-spa-purple/90 text-white">
                  Gửi Tin Nhắn
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spa-purple/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-spa-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-navy">Điện Thoại</h3>
                    <p className="text-gray-600">+84 936 666 888</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spa-coral/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-spa-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-navy">Email</h3>
                    <p className="text-gray-600">hello@shelone.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spa-purple/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-spa-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-navy">Địa Chỉ</h3>
                    <p className="text-gray-600">123 Đường Làm Đẹp, Quận 1, TP.HCM</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-spa-coral/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-spa-coral" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-navy">Giờ Làm Việc</h3>
                    <p className="text-gray-600">Thứ 2 - CN: 9:00 - 21:00</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
