import HeroImg from "../Fragments/HeroImg";

const Hero = () => {
  return (
    <main className="max-w-screen hero">
      <div className="hero__container">
        <div className="hero-text__container">
          <h1 className="hero-text1">
            Welcome to
            <span className="font-pacifico font-normal">
              Culinary Crossroads!
            </span>
          </h1>
          <h1 className="hero-text2">Explore Our Flavorful Creations</h1>
          <h1 className="hero-text3">Fast and Free Delivery</h1>
          <div className="hero-button__container">
            <button className="hero-button">
              <a href="#menu"> Order Now </a>
            </button>
          </div>
        </div>
        <HeroImg />
      </div>
    </main>
  );
};

export default Hero;
