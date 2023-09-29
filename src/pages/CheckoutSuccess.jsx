import Anchor from "../components/Elements/Anchor";
import Img from "../components/Elements/Img";
import Navbar from "../components/Layouts/Navbar";
import useLoginStatus from "../hooks/useLoginStatus";
import NeedLogin from "./NeedLogin";

const CheckoutSuccess = () => {
  const { loginStatus } = useLoginStatus();
  return (
    <div>
      {loginStatus === true && (
        <div>
          <Navbar bg="bg-white shadow-md" />
          <div className="bg-[#FF5733] min-h-screen flex flex-col justify-center items-center gap-5 px-3">
            <div className="bg-white rounded-full">
              <Img
                src="/Asset/checkmark.svg"
                alt="checkmark"
                className="w-32"
              />
            </div>
            <h1 className="font-montserrat font-bold text-4xl text-white text-center">
              Payment Success!
            </h1>
            <p className="font-lato font-normal text-2xl text-center text-white">
              Thank you for your purchase, you can go back to main page{" "}
              <Anchor href="/" className="text-[#333] font-bold">
                here
              </Anchor>
            </p>
          </div>
        </div>
      )}
      {loginStatus === false && <NeedLogin />}
    </div>
  );
};

export default CheckoutSuccess;
