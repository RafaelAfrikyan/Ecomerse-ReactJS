import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Modal from "./Components/Modal/Modal";
import ProductItem from "./Components/ProductsItem/ProductItem";
import Users from "./Users";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users" element={<Users />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
