import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Img from "../Elements/Img";

const PaymentForm = () => {
  const { setCart } = useCart();
  const navigate = useNavigate();

  // handle checkout button
  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/checkoutsuccess");
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleCheckout}>
      <label className="flex flex-row">
        <input type="radio" name="payment" value="gopay"></input>
        <Img src="/Asset/gopay.svg" alt="gopay" className="w-36 h-24" />
      </label>
      <label className="flex flex-row gap-5">
        <input type="radio" name="payment" value="ovo"></input>
        <Img src="/Asset/ovo.svg" alt="ovo" className="w-24" />
      </label>
      <label className="flex flex-row gap-4">
        <input type="radio" name="payment" value="dana"></input>
        <Img src="/Asset/dana.svg" alt="dana" className="w-32" />
      </label>
      <div className="flex flex-end justify-end">
        <button
          type="submit"
          className="bg-[#FF5733] w-24 px-3 py-2 rounded-full font-lato text-white font-semibold hover:bg-[#D4492A]"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
