import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.productId} className="border p-2 rounded">
            {item.name} - Quantity: {item.quantity}
            <button onClick={() => dispatch(removeItem(item.productId))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
