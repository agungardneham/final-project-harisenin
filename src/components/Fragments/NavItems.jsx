import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";

const NavItems = () => {
  return (
    <div className="navbar-items__container">
      <div className="cart-icon">
        <Anchor href="signin.html">
          {" "}
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
  );
};

export default NavItems;
