import StrengthList from "../Elements/StrengthList/StrengthList";

const StrengthText = () => {
  return (
    <div className="strength-text__container">
      <div className="strength-title__container">
        <h2 className="strength-title">Why You Choose Us?</h2>
        <div className="strength-title__line"></div>
      </div>

      <div className="strength-list">
        <StrengthList number={1} desc={"Healthy and Delicious Food"} />
        <StrengthList number={2} desc={"Fast and Free Delivery"} />
        <StrengthList number={3} desc={"Easy Payment and Reasonable Price"} />
      </div>
    </div>
  );
};

export default StrengthText;
