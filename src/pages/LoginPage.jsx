import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const LoginPage = () => {
  return (
    <div className="auth">
      <Navbar bg="bg-white shadow-md" />
      <AuthLayouts type="login" />
      <Footer />
    </div>
  );
};

export default LoginPage;
