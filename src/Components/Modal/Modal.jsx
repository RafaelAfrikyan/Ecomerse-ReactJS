import React from "react";
import "./Modal.css";
import ModalContent from "../ModalContent/ModalContent";

export default function Modal({ products }) {
  return (
    <div className="modal">
      <h2>Your Order</h2>
      {products
        .filter((el) => el.totalCount > 0)
        .map((product) => {
          return <ModalContent {...product} key={product.id} />;
        })}
    </div>
  );
}
