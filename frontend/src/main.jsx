import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"; // Updated path
import App from "./App";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import Admin from "./components/Admin"; // Import Admin component
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
            <Route path="/admin" element={<Admin />} /> {/* Add Admin route */}
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
