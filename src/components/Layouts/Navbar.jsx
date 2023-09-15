import NavItems from "../Fragments/NavItems";
import NavLogo from "../Fragments/NavLogo";
const Navbar = ({ bg }) => {
  return (
    <header className={`navbar ${bg} shadow-md`} id="header">
      <nav className="navbar__container">
        <NavLogo />
        <NavItems />
      </nav>
    </header>
  );
};

export default Navbar;
