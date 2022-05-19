import React from "react";

const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addProduct: (item) => {},
  removeProduct: (id) => {},
});

export default CartContext;
