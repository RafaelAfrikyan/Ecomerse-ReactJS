import React, { useEffect } from "react";
import "./Counter.css";
import { ACTION_TYPES } from "../../App";

export default function Counter({ totalCount, title, dispatch, id }) {
  const addCount = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_ITEM_COUNT,
      id,
      count: +1,
    });
  };
  const subCount = () => {
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
