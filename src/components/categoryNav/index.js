import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const CategoryNav = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && <p>Loading Categories...</p>}
      {!isLoading && (
        <ul className="category-list nav justify-content-between mb-3">
          {categories.map((category, index) => {
            return (
              <li key={index} className="nav-item text-capitalize">
                <NavLink
                  to={`/products/category/${category}`}
                  className={(navData) =>
                    navData.isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {category}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default CategoryNav;
