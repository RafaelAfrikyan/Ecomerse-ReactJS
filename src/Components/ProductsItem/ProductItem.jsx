import React, { useContext, useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import "./ProductItem.css";
import { ACTION_TYPES } from "../../App";
import { Context } from "../Context";

export default function ProductItem({ id, price, title, totalCount, image }) {
  const dispatch = useContext(Context);
  const changeShowCounter = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: +1,
    });
  };
  // const handleLinkClick = () => {
  //   window.location.href = "http://localhost:3000/item";
  // };

  return (
    <div className="ProductItem">
      <span>{title}</span>
      <img src={image} alt="sorrry" />
      <span>{price} $</span>

      {totalCount <= 0 ? (
        <button onClick={changeShowCounter}>Add to Cart</button>
      ) : (
        <Counter
          totalCount={totalCount}
          title={title}
          id={id}
          dispatch={dispatch}
        />
      )}
    </div>
  );
}
