import Cookies from "js-cookie";
import useLoginStatus from "../../hooks/useLoginStatus";
import Anchor from "../Elements/Anchor";
import Button from "../Elements/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import foodList from "../../services/FoodList";
import beverageList from "../../services/BeverageList";

const NavItems = () => {
  const { loginStatus, setLoginStatus } = useLoginStatus();
  const [cartMenu, setCartMenu] = useState(false);
  const { cart, setCart, totalPrice, setTotalPrice } = useCart();
  const [totalItem, setTotalItem] = useState(0);
  const userName = Cookies.get("username");
  const navigate = useNavigate();

  // parse cart from localStorage (or API)
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, [setCart]);

  // count total item in cart
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalItem(sum);
  }, [cart]);

  // remove username cookies and set login status to false when logout
  const handleLogout = () => {
    Cookies.remove("username");
    setLoginStatus(false);
    navigate("/");
  };

  // make cart menu visible when using clicking cart icon
  const handleCartMenu = () => {
    if (!cartMenu) {
      setCartMenu(true);
    } else if (cartMenu) {
      setCartMenu(false);
    }
  };

  // count total price of cart
  const foodProductLookup = Object.fromEntries(
    foodList.map((food) => [food.id, food])
  );
  const beverageProductLookup = Object.fromEntries(
    beverageList.map((beverage) => [beverage.id, beverage])
  );

  // count total price of cart only if there is item in cart
  useEffect(() => {
    if (cart.length > 0) {
      const totalFood = cart.reduce((acc, item) => {
        const foodProduct = foodProductLookup[item.id];
        return acc + (foodProduct ? foodProduct.price * item.qty : 0);
      }, 0);
      const totalBeverage = cart.reduce((acc, item) => {
        const beverageProduct = beverageProductLookup[item.id];
        return acc + (beverageProduct ? beverageProduct.price * item.qty : 0);
      }, 0);
      const sum = totalFood + totalBeverage;
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, setTotalPrice, foodProductLookup, beverageProductLookup]);

  // remove all items in cart
  const handleRemove = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };
  return (
    <>
      {loginStatus === false && (
        <div className="navbar-items__container">
          <div className="cart-icon">
            <Anchor href="/login">
              <img src="Asset/cart.svg" alt="cart" />
            </Anchor>
          </div>
          <Button className="sign-in__button">
            <Anchor href="/login">Sign In</Anchor>
          </Button>
          <Button className="sign-up__button">
            <Anchor href="/register">Sign Up</Anchor>
          </Button>
        </div>
      )}
      {loginStatus === true && (
        <div className="navbar-items__container relative">
          <div className="cart-icon">
            <div className="absolute bottom-[60%] left-5 bg-[#FF5733] px-2 py-0 rounded-full">
              <div className="text-lato font-medium text-white">
                {totalItem}
              </div>
            </div>
            <Button onClick={handleCartMenu}>
              <img src="Asset/cart.svg" alt="cart" />
            </Button>
          </div>
          <div className="sign-in__button text-center">Hi, {userName}!</div>
          <Button className="sign-up__button" onClick={handleLogout}>
            Logout
          </Button>
          {cartMenu && (
            <div className="absolute bg-white border border-solid border-slate-900 w-[20rem] h-auto top-12 right-[20%] rounded-[1rem] shadow-md">
              <div className="flex flex-col items-center p-2 gap-3">
                <div className="font-montserrat font-bold text-xl text-[#FF5733]">
                  Cart
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row font-lato font-semibold justify-center items-center w-full text-center">
                    <div className="w-[30%]">Item(s)</div>
                    <div className="w-[30%]">Price</div>
                    <div className="w-[10%]">Qty</div>
                    <div className="w-[30%]">Total</div>
                  </div>
                  <div className="flex flex-col">
                    {cart.map((item) => {
                      {
                        /* find same product by id */
                      }
                      const foodProduct = foodList.find(
                        (food) => food.id === item.id
                      );
                      if (foodProduct) {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-row gap-3 justify-center items-start w-full text-center font-lato font-normal"
                          >
                            <div className="w-[30%]">{foodProduct.name}</div>
                            <div className="w-[30%]">
                              {foodProduct.price
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                            <div className="w-[10%]">{item.qty}</div>
                            <div className="w-[30%]">
                              {(foodProduct.price * item.qty)
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                  <div className="flex flex-col">
                    {cart.map((item) => {
                      {
                        /* find same product by id */
                      }
                      const beverageProduct = beverageList.find(
                        (beverage) => beverage.id === item.id
                      );
                      if (beverageProduct) {
                        return (
                          <div
                            key={item.id}
                            className="flex flex-row gap-3 justify-center items-start w-full text-center font-lato font-normal"
                          >
                            <div className="w-[30%]">
                              {beverageProduct.name}
                            </div>
                            <div className="w-[30%]">
                              {beverageProduct.price
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                            <div className="w-[10%]">{item.qty}</div>
                            <div className="w-[30%]">
                              {(beverageProduct.price * item.qty)
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                  {cart.length > 0 && (
                    <div className="flex flex-row justify-center items-center w-full text-center">
                      <div className="w-[70%] font-semibold font-lato">
                        Total Price
                      </div>
                      <div className="w-[30%] font-lato font-normal">
                        {totalPrice
                          .toLocaleString(`id-ID`, {
                            style: `currency`,
                            currency: `IDR`,
                          })
                          .replace(",00", "")}
                      </div>
                    </div>
                  )}
                </div>

                {cart.length > 0 ? (
                  <div className="flex flex-row gap-3">
                    <button
                      className="px-2 py-1 bg-[#1ABC9C] text-white rounded-full my-2 font-lato"
                      onClick={handleRemove}
                    >
                      Remove All
                    </button>
                    <button className="px-2 py-1 bg-[#FF5733] text-white rounded-full my-2 font-lato">
                      Checkout
                    </button>
                  </div>
                ) : (
                  <div className="font-lato italic">Your cart is empty</div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavItems;
