import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Cart from "./pages/cart";
import Home from "./pages/home";
import ProductDetails from "./pages/menu/ProductDetails";
import ProductList from "./pages/menu/ProductList";
import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/category/:categoryID"
            element={<ProductList />}
          />
          <Route path="/products/:productID" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
