import React, { useRef, useEffect, useContext } from "react";
import "./Modal.css";
import ModalContent from "../ModalContent/ModalContent";
import { Context } from "../Context";
import { ACTION_TYPES } from "../../App";

export default function Modal({ products, isModalOpen }) {
  const dispatch = useContext(Context);

  const refModal = useRef(null);

  const handleClose = (e) => {
    if (!refModal.current.contains(e.target)) {
      dispatch({
        type: ACTION_TYPES.CHANGE_CART_MODAL,
      });
    }

    console.log(e.target);
  };

  useEffect(() => {
    if (refModal.current) {
      window.addEventListener("click", handleClose);
    }
    return () => {
      window.removeEventListener("click", handleClose);
    };
  }, [refModal]);

  return (
    <div ref={refModal} className="modal">
      <h2>Your Order</h2>
      {products
        .filter((el) => el.totalCount > 0)
        .map((product) => {
          return <ModalContent {...product} key={product.id} />;
        })}
    </div>
  );
}
