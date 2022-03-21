import "./App.css";
import React, { Suspense, useEffect, useReducer } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductContainer from "./Components/ProductsContainer/ProductsContainer";
// import Modal from "./Components/Modal/Modal";
import { Context } from "./Components/Context";
const Modal = React.lazy(() => import("./Components/Modal/Modal"));

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
        <Suspense fallback={<span>Loading...</span>}>
          {state.isModalOpen && (
            <Modal isModalOpen={state.isModalOpen} products={state.products} />
          )}
        </Suspense>
        <ProductContainer products={state.products} />
      </div>
    </Context.Provider>
  );
}

export default App;
