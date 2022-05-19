import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import "./index.scss";

const ProductTile = ({ data, isCart }) => {
  // const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(CartContext);
  const addToCartHandler = () => {
    // setQuantity((prevQuantity) => prevQuantity + 1);
    cartCtx.addProduct(data);
  };
  const removeFromCartHandler = () => {
    cartCtx.removeProduct(data.id);
  };
  return (
    <div className="product-tile d-flex border p-4 mb-4">
      <div className="product-image">
        <Link to={`/products/${data.id}`} state={data}>
          <img src={data.image} alt={data.title} />
        </Link>
      </div>
      <div className="product-details ps-3">
        <Link
          to={`/products/${data.id}`}
          state={data}
          className="text-decoration-none link-secondary"
        >
          {data.title}
        </Link>
        {!isCart && <div className="price">${data.price}</div>}
        <div className="product-actions">
          {isCart && (
            <>
              <div className="cart-actions">
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle"
                  onClick={removeFromCartHandler}
                >
                  -
                </button>
                <span className="mx-2">{data.quantity}</span>
                <button
                  type="button"
                  className="btn btn-secondary rounded-circle"
                  onClick={addToCartHandler}
                >
                  +
                </button>
              </div>
              <div className="item-total-price">
                ${data.price * data.quantity}
              </div>
            </>
          )}
          {!isCart && (
            <button
              type="button"
              onClick={addToCartHandler}
              className="btn btn-secondary"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
