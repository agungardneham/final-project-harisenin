import Anchor from "../Anchor";
import Img from "../Img";

const NavLogoLink = () => {
  return (
    <Anchor href="/" className="navbar-logo__link">
      <Img
        src="/Asset/logo-primary.png"
        alt="logo"
        className="navbar-logo__logo"
      />
      <Img
        src="/Asset/text-primary.png"
        alt="logo-text"
        className="navbar-logo__text"
      />
    </Anchor>
  );
};

export default NavLogoLink;
