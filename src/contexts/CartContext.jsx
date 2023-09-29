import { createContext, useState } from "react";

const CreateCartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // add one item to cart button
  const handleAdd = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );

      // Update the local storage and return the updated cart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // remove one item from cart button
  const handleDelete = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );

      // Filter out items with qty greater than 0
      const filteredCart = updatedCart.filter((item) => item.qty > 0);

      // Update the local storage and return the filtered cart
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return filteredCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalPrice,
        setTotalPrice,
        handleAdd,
        handleDelete,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = CreateCartContext;
export default CartProvider;
