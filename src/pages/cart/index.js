import React, { useContext } from "react";
import ProductTile from "../../components/productTile";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const cartTotalAmount = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartCtx.items.length === 0 && (
        <p className="text-center">No item(s) addded to cart yet</p>
      )}
      {cartCtx.items.length > 0 && (
        <>
          <div className="cart-items-list">
            {cartCtx.items.map((item) => (
              <ProductTile key={item.id} isCart={true} data={item} />
            ))}
          </div>
          <div className="cart-total fw-bold mb-3">
            Total Amount: ${cartTotalAmount}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
