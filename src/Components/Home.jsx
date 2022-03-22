import React, { Suspense, useEffect, useReducer, useContext } from "react";
import { Context } from "./Context";
import ProductContainer from "./ProductsContainer/ProductsContainer";
const Modal = React.lazy(() => import("../Components/Modal/Modal"));
export default function Home({ products, dispatch, state, isModalOpen }) {
  return (
    <div>
      <Context.Provider value={dispatch}>
        {state.isModalOpen && (
          <Modal isModalOpen={state.isModalOpen} products={state.products} />
        )}

        <ProductContainer products={state.products} />
      </Context.Provider>
    </div>
  );
}
