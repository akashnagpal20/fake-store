import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);
  const totalCartItemsCount = cartCtx.items.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);
  return (
    <header className="d-flex justify-content-between">
      <Link to="/" className="link-primary text-decoration-none">
        Fake Store
      </Link>
      <Link to="/cart" className="btn btn-primary">
        Cart({totalCartItemsCount})
      </Link>
    </header>
  );
};

export default Header;
