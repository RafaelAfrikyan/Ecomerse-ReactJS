import "./App.css";
import React, { Suspense, useEffect, useReducer } from "react";
import { Route, Routes } from "react-router-dom";

import ContentPage from "./Components/SecondPage/ContentPage";
import Layout from "./Components/Layout";

import { Context } from "../src/Components/Context";
import Home from "./Components/Home";

export const ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
  CHANGE_ITEM_COUNT: "CHANGE_ITEM_COUNT",
  CHANGE_CART_MODAL: "CHANGE_CART_MODAL",
  CLOSE_CART_CLICK_OUT: "CLOSE_CART_CLICK_OUT",
};

const defaultState = {
  products: [],
  isModalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS: {
      return { ...state, products: action.data };
    }
    case ACTION_TYPES.CHANGE_ITEM_COUNT: {
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.id) {
            return { ...item, totalCount: item.totalCount + action.count };
          } else {
            return item;
          }
        }),
      };
    }
    case ACTION_TYPES.CHANGE_CART_MODAL: {
      return { ...state, isModalOpen: !state.isModalOpen };
    }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openModal = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_CART_MODAL,
    });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        let newRes = data.map((item) => ({
          ...item,
          totalCount: 0,
        }));
        dispatch({
          type: ACTION_TYPES.SET_PRODUCTS,
          data: newRes,
        });
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout openModal={openModal} />}>
          <Route
            index
            element={
              <Home
                state={state}
                products={state.products}
                isModalOpen={state.isModalOpen}
                dispatch={dispatch}
              />
            }
          />
          <Route path="/content-page" element={<ContentPage products={state.products} />} />
        </Route>
      </Routes>
    </div>
  );
}
