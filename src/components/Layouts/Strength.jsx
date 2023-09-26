import StrengthImg from "../Fragments/StrengthImg";
import StrengthText from "../Fragments/StrengthText";

const Strength = () => {
  return (
    <section className="strength max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg">
      <div className="strength__container">
        <StrengthImg />
        <StrengthText />
      </div>
    </section>
  );
};

export default Strength;
