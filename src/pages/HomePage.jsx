import Hero from "../components/Layouts/Hero";
import Menu from "../components/Layouts/Menu";
import Navbar from "../components/Layouts/Navbar";
import Strength from "../components/Layouts/Strength";
import Footer from "../components/Layouts/Footer";
import useNavbar from "../hooks/useNavbar";

const HomePage = () => {
  const { navBg } = useNavbar();

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
