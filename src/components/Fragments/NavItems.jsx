import Cookies from "js-cookie";
import useLoginStatus from "../../hooks/useLoginStatus";
import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";

const NavItems = () => {
  const { loginStatus, setLoginStatus } = useLoginStatus();
  const userName = Cookies.get("username");
  const navigate = useNavigate();
  const HandleLogout = () => {
    Cookies.remove("username");
    setLoginStatus(false);
    navigate("/");
  };
  return (
    <>
      {loginStatus === false && (
        <div className="navbar-items__container">
          <div className="cart-icon">
            <Anchor href="/login">
              <img src="Asset/cart.svg" alt="cart" />
            </Anchor>
          </div>
          <Button className="sign-in__button">
            <Anchor href="/login">Sign In</Anchor>
          </Button>
          <Button className="sign-up__button">
            <Anchor href="/register">Sign Up</Anchor>
          </Button>
        </div>
      )}
      {loginStatus === true && (
        <div className="navbar-items__container">
          <div className="cart-icon">
            <div className="absolute bottom-[60%] left-5 bg-[#FF5733] px-2 py-0 rounded-full">
              <div className="text-lato font-medium text-white">0</div>
            </div>
            <Anchor href="/">
              <img src="Asset/cart.svg" alt="cart" />
            </Anchor>
          </div>
          <Button className="sign-in__button">Hi, {userName}!</Button>
          <Button className="sign-up__button" onClick={HandleLogout}>
            Logout
          </Button>
        </div>
      )}
    </>
  );
};

export default NavItems;
