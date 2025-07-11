
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock login logic - check user roles
    const mockUsers = {
      "admin@shelone.com": { role: "admin", name: "Admin" },
      "receptionist@shelone.com": { role: "receptionist", name: "Lễ Tân" },
      "therapist@shelone.com": { role: "therapist", name: "Nhân Viên Trị Liệu" },
      "inventory@shelone.com": { role: "inventory", name: "Thủ Kho" },
      "accountant@shelone.com": { role: "accountant", name: "Kế Toán" },
      "customer@shelone.com": { role: "customer", name: "Khách Hàng" },
    };

    const user = mockUsers[email as keyof typeof mockUsers];
    
    if (user && password === "123456") {
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/dashboard/${user.role}`);
    } else {
      alert("Email hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-spa-pink to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-spa-navy mb-2">Đăng Nhập</h1>
          <p className="text-gray-600">Chào mừng bạn quay trở lại SHELONE</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input 
              type="email" 
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mật khẩu
            </label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4 text-gray-500" />
                ) : (
                  <Eye className="w-4 h-4 text-gray-500" />
                )}
              </button>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-spa-purple hover:bg-spa-purple/90 text-white"
          >
            Đăng Nhập
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Link to="/forgot-password" className="text-spa-purple hover:underline text-sm">
            Quên mật khẩu?
          </Link>
          
          <div className="border-t pt-4">
            <p className="text-gray-600 text-sm">
              Chưa có tài khoản?{" "}
              <Link to="/register" className="text-spa-purple hover:underline font-medium">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>

        {/* Demo accounts info */}
        <div className="mt-8 p-4 bg-spa-pink/20 rounded-lg">
          <h3 className="font-semibold text-spa-navy mb-2">Tài khoản demo:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>admin@shelone.com - Admin</p>
            <p>customer@shelone.com - Khách hàng</p>
            <p>receptionist@shelone.com - Lễ tân</p>
            <p>therapist@shelone.com - Trị liệu</p>
            <p>Mật khẩu: 123456</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
