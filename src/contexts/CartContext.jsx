import { createContext, useState } from "react";

const CreateCartContext = createContext();

// Actions
// const addToCart = (state, action) => {
//   const itemInCart = state.find((item) => item.id === action.payload.id);
//   if (itemInCart) {
//     itemInCart.qty++;
//   } else {
//     state.push(action.payload);
//   }
// };

// Reducer
// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       addToCart(state, action);
//       return [...state];
//     default:
//       return state;
//   }
// };

const CartProvider = ({ children }) => {
  // const initialState = JSON.parse(localStorage.getItem("cart")) || [];
  // const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider value={{ cart, setCart, totalPrice, setTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartContext = CreateCartContext;
export default CartProvider;
