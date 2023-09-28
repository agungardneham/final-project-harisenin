import { useNavigate } from "react-router-dom";
import useLoginStatus from "../../hooks/useLoginStatus";

const MenuCard = ({ img, imgAlt, name, desc, price }) => {
  const { loginStatus } = useLoginStatus();
  const navigate = useNavigate();
  const handleOrderButton = () => {
    if (!loginStatus) {
      navigate("/login");
    } else if (loginStatus) {
      console.log("ordered");
    }
  };
  return (
    <div className="menu__card">
      <div className="menu-img__container">
        <img src={img} alt={imgAlt} className="menu-img" />
      </div>
      <div className="menu-text__container">
        <div className="menu-text__title">{name}</div>
        <div className="menu-text__desc">{desc}</div>
        <div className="menu-text__price">
          {price.toLocaleString(`id-ID`, {
            style: `currency`,
            currency: `IDR`,
          })}
        </div>
      </div>
      <button className="menu-button" onClick={handleOrderButton}>
        <div className="menu-button__text">ORDER NOW</div>
      </button>
    </div>
  );
};

export default MenuCard;
