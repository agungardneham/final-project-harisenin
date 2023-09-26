import NavItems from "../Fragments/NavItems";
import NavLogo from "../Fragments/NavLogo";
const Navbar = ({ bg }) => {
  return (
    <header className={`navbar ${bg}`} id="header">
      <nav className="navbar__container">
        <NavLogo />
        <NavItems />
      </nav>
    </header>
  );
};

export default Navbar;
