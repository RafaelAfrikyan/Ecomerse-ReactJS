import React, { useContext, useEffect } from "react";
import "./ModalContent.css";
import { ACTION_TYPES } from "../../App";
import { Context } from "../Context";


export default function ModalContent({ title, totalCount, image, id }) {
  const dispatch = useContext(Context);
  const addHandleClick = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: +1,
    });
  };
  const subHandleClick = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: -1,
    });
  };

  useEffect(() => {
    localStorage.setItem(title, totalCount);
  }, [title, totalCount]);

  return (
    <div className="modalContent">
      <div>{title}</div>
      <h3>{totalCount}</h3>
      <img src={image} />
      <button onClick={addHandleClick}>+</button>
      <button onClick={subHandleClick}>-</button>
    </div>
  );
}
