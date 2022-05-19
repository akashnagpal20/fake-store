import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductTile from "../../components/productTile";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    const categoryID = params.categoryID;
    setIsLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${categoryID}`)
      .then((res) => res.json())
      .then((productsData) => {
        setProducts(productsData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [params.categoryID]);
  return (
    <>
      {isLoading && <p>Loading products...</p>}
      {!isLoading && (
        <div className="product-list">
          {products.map((product) => {
            return <ProductTile key={product.id} data={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProductList;
