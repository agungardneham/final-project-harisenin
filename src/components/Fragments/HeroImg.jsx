import Img from "../Elements/Img";

const HeroImg = () => {
  return (
    <div className="hero-img__container">
      <Img src="Asset/hero-1.png" alt="curry" className="hero-img1" />
      <Img src="Asset/hero-2.png" alt="sambal" className="hero-img2" />
      <Img src="Asset/hero-acc-1.png" alt="leaf" className="hero-img__acc1" />
      <Img src="Asset/hero-acc-2.png" alt="chili" className="hero-img__acc2" />
    </div>
  );
};

export default HeroImg;
