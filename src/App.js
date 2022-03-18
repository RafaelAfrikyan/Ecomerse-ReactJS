import "./App.css";
import React, { useEffect, useReducer } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductContainer from "./Components/ProductsContainer/ProductsContainer";
import Modal from "./Components/Modal/Modal";
import { Context } from "./Components/Context";

export const ACTION_TYPES = {
  SET_PRODUCTS: "SET_PRODUCTS",
  CHANGE_ITEM_COUNT: "CHANGE_ITEM_COUNT",
  CHANGE_CART_MODAL: "CHANGE_CART_MODAL",
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

function App() {
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
    <Context.Provider value={dispatch}>
      <div className="App">
        <Navbar products={state.products} openModal={openModal} />
        {state.isModalOpen && <Modal products={state.products} />}
        <ProductContainer products={state.products} />
      </div>
    </Context.Provider>
  );
}

export default App;
