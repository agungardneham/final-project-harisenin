import { useState } from "react";
import foodList from "../../services/FoodList";
import beverageList from "../../services/BeverageList";
import MenuCard from "../Fragments/MenuCard";
const Menu = () => {
  const [type, setType] = useState("food");
  const handleMenuBeverage = () => {
    setType("beverage");
  };
  const handleMenuFood = () => {
    setType("food");
  };
  return (
    <section
      className="menu max-w-screen-xs md:max-w-screen-md lg:max-w-screen-lg"
      id="menu"
    >
      <div className="menu-type__container">
        <button
          className={
            type === "food" ? "menu-type__active" : "menu-type__not-active"
          }
          onClick={handleMenuFood}
        >
          Food
        </button>
        <button
          className={
            type === "beverage" ? "menu-type__active" : "menu-type__not-active"
          }
          onClick={handleMenuBeverage}
        >
          Beverage
        </button>
      </div>
      <div className="menu__container">
        {type === "food" &&
          foodList.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              img={item.img}
              imgAlt={item.imgAlt}
              desc={item.desc}
              price={item.price}
            />
          ))}
        {type === "beverage" &&
          beverageList.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              img={item.img}
              imgAlt={item.imgAlt}
              desc={item.desc}
              price={item.price}
            />
          ))}
      </div>
    </section>
  );
};

export default Menu;
