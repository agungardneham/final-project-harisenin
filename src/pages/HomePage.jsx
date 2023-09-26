import Hero from "../components/Layouts/Hero";
import Menu from "../components/Layouts/Menu";
import Navbar from "../components/Layouts/Navbar";
import Strength from "../components/Layouts/Strength";
import Footer from "../components/Layouts/Footer";
import { useState } from "react";

const HomePage = () => {
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
    <div id="home">
      <Navbar bg={navBg} />
      <Hero />
      <Strength />
      <Menu />
      <Footer />
    </div>
  );
};

export default HomePage;
