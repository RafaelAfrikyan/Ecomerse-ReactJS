import React from "react";
import ProductItem from "../ProductsItem/ProductItem";
import "./PructContainer.css";

export default function ProductContainer({ products }) {
  return (
    <div className="container">
      {products.map((product) => {
        return (
          <ProductItem  key={product.id} {...product}  />
        );
      })}
    </div>
  );
}
