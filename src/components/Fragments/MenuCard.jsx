const MenuCard = ({ img, imgAlt, name, desc, price }) => {
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
      <button className="menu-button">
        <a href="#" className="menu-button__text">
          {" "}
          ORDER NOW{" "}
        </a>
      </button>
    </div>
  );
};

export default MenuCard;
