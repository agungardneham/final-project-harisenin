import Checkout from "../components/Layouts/Checkout";
import Navbar from "../components/Layouts/Navbar";
import useLoginStatus from "../hooks/useLoginStatus";
import NeedLogin from "./NeedLogin";

const CheckoutPage = () => {
  const { loginStatus } = useLoginStatus();
  return (
    <div>
      {loginStatus === true && (
        <div className="p-0 m-0 bg-[#ff5733cc] min-h-screen">
          <Navbar bg="bg-white shadow-md" />
          <Checkout />
        </div>
      )}
      {loginStatus === false && <NeedLogin />}
    </div>
  );
};

export default CheckoutPage;
