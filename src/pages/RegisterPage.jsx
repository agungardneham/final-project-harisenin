import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";

const RegisterPage = () => {
  return (
    <div className="auth">
      <Navbar bg="bg-white" />
      <AuthLayouts type="register" />
      <Footer />
    </div>
  );
};

export default RegisterPage;
