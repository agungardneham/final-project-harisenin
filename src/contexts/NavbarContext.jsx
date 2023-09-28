import { createContext, useState } from "react";

const CreateNavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [navBg, setNavBg] = useState("bg-transparent");

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBg("bg-white shadow-md");
    } else {
      setNavBg("bg-transparent");
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <NavbarContext.Provider value={{ navBg, setNavBg }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarContext = CreateNavbarContext;
export default NavbarProvider;
