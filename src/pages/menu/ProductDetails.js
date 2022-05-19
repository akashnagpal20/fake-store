import { useLocation } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const ProductDetails = () => {
  const { state } = useLocation();
  const cartCtx = useContext(CartContext);
  return (
    <div className="row">
      <div className="col-6">
        <img src={state.image} alt={state.title} />
      </div>
      <div className="col-6">
        <h3>{state.title}</h3>
        <div className="mb-2">
          Rating: {state.rating.rate}({state.rating.count})
        </div>
        <div className="mb-2">{state.description}</div>
        <div className="mb-2">Price: ${state.price}</div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            cartCtx.addProduct(state);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
