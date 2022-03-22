import React, { useEffect, useContext } from "react";
import "./Counter.css";
import { ACTION_TYPES } from "../../App";
import { Context } from "../Context";

export default function Counter({ totalCount, id }) {
  const dispatch = useContext(Context);
  const addCount = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: +1,
    });
  };
  const subCount = (e) => {
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: -1,
    });
  };

  return (
    <div>
      <div className="counterWrap">
        <img
          src="https://cdn2.iconfinder.com/data/icons/data-analytics-1-2/48/18-512.png"
          onClick={subCount}
        ></img>
        <div>
          <h3>Count: {totalCount}</h3>
        </div>
        <img
          src="https://cdn2.iconfinder.com/data/icons/data-analytics-2-2/48/86-512.png"
          onClick={addCount}
        ></img>
      </div>
    </div>
  );
}
