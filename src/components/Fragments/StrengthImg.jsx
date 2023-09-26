import Img from "../Elements/Img";

const StrengthImg = () => {
  return (
    <div className="strength-img__container">
      <div className="absolute">
        <Img
          src="Asset/delivery-man.png"
          alt="delivery man"
          className="strength-img1 z-0"
        />
        <Img
          src="Asset/payment.png"
          alt="online payment"
          className="strength-img2 z-1"
        />
        <Img
          src="Asset/food-img.png"
          alt="food"
          className="strength-img3 z-2"
        />
      </div>
    </div>
  );
};

export default StrengthImg;
