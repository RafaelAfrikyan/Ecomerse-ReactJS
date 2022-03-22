import React, { useContext, useState, useEffect } from "react";
import Counter from "../Counter/Counter";
import "./ProductItem.css";
import { ACTION_TYPES } from "../../App";
import { Context } from "../Context";
import { Link, useNavigate } from "react-router-dom";

export default function ProductItem({ id, price, title, totalCount, image }) {
  const dispatch = useContext(Context);
  const navigate = useNavigate();
  const changeShowCounter = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: +1,
    });
  };

  const handleCartClick = () => {
    navigate("/content-page");
  };

  return (
    <div class="container">
      <div class="card__container">
        <div onClick={handleCartClick} class="card">
          <div class="card__content">
            <img src={image} alt="sorrry" />
            <p class="card__info">{title}</p>
            <div>{price} $</div>
            {totalCount <= 0 ? (
              <button onClick={changeShowCounter}>Add to Cart</button>
            ) : (
              <Counter totalCount={totalCount} title={title} id={id} />
            )}
          </div>
        </div>
      </div>
    </div>

    // <div onClick={handleCartClick} className="ProductItem">
    //   <span>{title}</span>
    //   <img src={image} alt="sorrry" />
    //   <span>{price} $</span>
    //   {totalCount <= 0 ? (
    //     <button onClick={changeShowCounter}>Add to Cart</button>
    //   ) : (
    //     <Counter totalCount={totalCount} title={title} id={id} />
    //   )}
    // </div>
  );
}

// <div class="container">
//   <div class="card__container">
//     <div onClick={handleCartClick} class="card">
//       <div class="card__content">
//       <img src={image} alt="sorrry" />
//         <p class="card__info">{title}</p>
//         <span>{price} $</span>
//         {totalCount <= 0 ? (
//         <button onClick={changeShowCounter}>Add to Cart</button>
//       ) : (
//         <Counter totalCount={totalCount} title={title} id={id} />
//       )}
//       </div>
//     </div>
//     <div class="card">
//       <div class="card__content">
//         <h3 class="card__header">Card 2</h3>
//         <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <button class="card__button">Read now</button>
//       </div>
//     </div>
//     <div class="card">
//       <div class="card__content">
//         <h3 class="card__header">Card 3</h3>
//         <p class="card__info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <button class="card__button">Read now</button>
//       </div>
//     </div>
//   </div>
// </div>
