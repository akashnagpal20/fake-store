import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addProductHandler = (product) => {
    const existingItemIndex = items.findIndex((item) => product.id === item.id);
    let updatedItems;
    let newItem;
    if (existingItemIndex > -1) {
      const existingItem = items[existingItemIndex];
      newItem = { ...existingItem, quantity: existingItem.quantity + 1 };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = newItem;
    } else {
      newItem = { ...product, quantity: 1 };
      updatedItems = items.concat(newItem);
    }
    setItems(updatedItems);
    console.log(updatedItems);
  };

  const removeProductHandler = (id) => {
    const existingItemIndex = items.findIndex((item) => id === item.id);
    const existingItem = items[existingItemIndex];
    let updatedItems;
    if (existingItem.quantity > 1) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    } else if (existingItem.quantity === 1) {
      updatedItems = items.filter((item) => item.id !== id);
    }
    setItems(updatedItems);
  };

  const cartContext = {
    items: items,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
