
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-spa-pink/30 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-spa-navy mb-4">
              Về Chúng Tôi
            </h1>
            <p className="text-gray-600 text-lg">
              SHELONE - Điểm đến tin cậy cho sức khỏe và sắc đẹp của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-spa-navy mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="text-gray-600 mb-4">
                Với hơn 10 năm kinh nghiệm trong ngành spa và làm đẹp, SHELONE đã trở thành 
                địa chỉ tin cậy của hàng nghìn khách hàng trên toàn quốc.
              </p>
              <p className="text-gray-600 mb-4">
                Chúng tôi cam kết mang đến những dịch vụ chất lượng cao nhất với đội ngũ 
                chuyên gia giàu kinh nghiệm và trang thiết bị hiện đại.
              </p>
            </div>
            <div className="bg-gradient-to-br from-spa-purple/20 to-spa-coral/20 rounded-3xl h-96 flex items-center justify-center">
              <span className="text-6xl">🏢</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-spa-navy mb-2">Chuyên Gia</h3>
              <p className="text-gray-600">Đội ngũ chuyên gia có nhiều năm kinh nghiệm</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-coral/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-spa-navy mb-2">Chất Lượng</h3>
              <p className="text-gray-600">Sản phẩm và dịch vụ đạt chuẩn quốc tế</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-spa-purple/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold text-spa-navy mb-2">Tận Tâm</h3>
              <p className="text-gray-600">Phục vụ khách hàng với sự tận tâm nhất</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
