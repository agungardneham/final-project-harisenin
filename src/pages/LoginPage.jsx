import AuthLayouts from "../components/Layouts/AuthLayouts";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/Layouts/Navbar";
import useLoginStatus from "../hooks/useLoginStatus";
import AlreadyLogIn from "./AlreadyLogIn";

const LoginPage = () => {
  const { loginStatus } = useLoginStatus();
  return (
    <div>
      {loginStatus === false && (
        <div className="auth">
          <Navbar bg="bg-white shadow-md" />
          <AuthLayouts type="login" />
          <Footer />
        </div>
      )}
      {loginStatus === true && <AlreadyLogIn />}
    </div>
  );
};

export default LoginPage;
