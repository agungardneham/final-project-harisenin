import useCart from "../../hooks/useCart";
import foodList from "../../services/FoodList";
import beverageList from "../../services/BeverageList";
import Img from "../Elements/Img";
import Anchor from "../Elements/Anchor";
import PaymentForm from "../Fragments/PaymentForm";

const Checkout = () => {
  const { cart, totalPrice, handleAdd, handleDelete } = useCart();

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-[4rem] mx-5 font-montserrat font-bold text-white xl:text-[5rem] pt-20">
          Checkout
        </h1>
        <div className="flex flex-col px-5 py-3 w-full gap-5 md:flex-row">
          <div className="bg-white w-full rounded-xl p-5 h-auto">
            {cart.length > 0 ? (
              <div className="flex flex-col">
                <h2 className="text-[#FF5733] text-[2rem] font-montserrat font-semibold">
                  Cart
                </h2>
                <div className="flex flex-row w-full text-center my-2 font-lato font-semibold text-xl xl:text-2xl">
                  <h3 className="w-[80%]">Name</h3>
                  <h3 className="w-[20%]">Qty</h3>
                </div>
                <div className="flex flex-col w-full gap-2 mb-2">
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
                          className="flex flex-row w-full text-center font-lato font-normal"
                        >
                          <div className="w-[20%] sm:px-5 md:px-0">
                            <Img
                              src={foodProduct.img}
                              alt={foodProduct.imgAlt}
                              className="rounded-full w-16 h-16 object-cover lg:w-24 lg:h-24 xl:w-32 xl:h-32"
                            />
                          </div>
                          <div className="w-[60%] flex flex-col ml-3 justify-center">
                            <div className="text-start font-lato font-medium text-lg xl:text-xl">
                              {foodProduct.name}
                            </div>
                            <div className="font-lato text-start font-light xl:text-lg">
                              {foodProduct.price
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                          </div>
                          <div className="w-[20%] flex flex-row gap-3 justify-center items-center">
                            <button
                              className="bg-[#FF5733] px-[0.55rem] text-white rounded-full font-semibold hover:bg-[#D4492A]"
                              type="button"
                              onClick={() => handleDelete(item.id)}
                            >
                              -
                            </button>
                            <div className="text-lg">{item.qty}</div>
                            <button
                              className="bg-[#FF5733] px-[0.55rem] text-white rounded-full hover:bg-[#D4492A]"
                              type="button"
                              onClick={() => handleAdd(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div className="flex flex-col w-full gap-2">
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
                          className="flex flex-row w-full text-center font-lato font-normal"
                        >
                          <div className="w-[20%] sm:px-5 md:px-0">
                            <Img
                              src={beverageProduct.img}
                              alt={beverageProduct.imgAlt}
                              className="rounded-full w-16 h-16 object-cover lg:w-24 lg:h-24 xl:w-32 xl:h-32"
                            />
                          </div>
                          <div className="w-[60%] flex flex-col ml-3 justify-center">
                            <div className="text-start font-lato font-medium text-lg">
                              {beverageProduct.name}
                            </div>
                            <div className="font-lato text-start font-light">
                              {beverageProduct.price
                                .toLocaleString(`id-ID`, {
                                  style: `currency`,
                                  currency: `IDR`,
                                })
                                .replace(",00", "")}
                            </div>
                          </div>
                          <div className="w-[20%] flex flex-row gap-3 justify-center items-center">
                            <button
                              className="bg-[#FF5733] px-[0.55rem] text-white rounded-full font-semibold hover:bg-[#D4492A]"
                              type="button"
                              onClick={() => handleDelete(item.id)}
                            >
                              -
                            </button>
                            <div>{item.qty}</div>
                            <button
                              className="bg-[#FF5733] px-[0.55rem] text-white rounded-full hover:bg-[#D4492A]"
                              type="button"
                              onClick={() => handleAdd(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    } else {
                      return null;
                    }
                  })}
                </div>
                <div className="flex flex-row w-full mt-5 justify-center">
                  <div className="font-lato text-xl w-[60%] text-center font-bold xl:text-2xl">
                    Total Price
                  </div>
                  <div className="text-[#FF5733] text-center text-2xl font-bold w-[40%] xl:text-3xl">
                    {totalPrice
                      .toLocaleString(`id-ID`, {
                        style: `currency`,
                        currency: `IDR`,
                      })
                      .replace(",00", "")}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col my-32 items-center justify-center font-lato italic font-semibold">
                <div>Your cart is empty</div>
                <div>
                  Go buy something{" "}
                  <Anchor href="/" className="text-[#FF5733]">
                    here
                  </Anchor>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white w-full rounded-xl p-5 h-[25rem]">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#FF5733] text-[2rem] font-montserrat font-semibold">
                Payment
              </h2>
              <p className="font-lato font-normal">
                Please select your playment option :
              </p>
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
