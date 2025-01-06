import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetails";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
