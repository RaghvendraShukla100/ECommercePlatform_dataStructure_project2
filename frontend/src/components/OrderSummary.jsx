import React from "react";

const OrderSummary = ({ order = {} }) => {
  const products = order.products || [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      <p>
        Order Date:{" "}
        {order.date ? new Date(order.date).toLocaleDateString() : "N/A"}
      </p>
      <p>Status: {order.status || "N/A"}</p>
      <h2 className="text-xl font-semibold mt-4">Items</h2>
      <ul className="space-y-2">
        {products.map((item) => (
          <li key={item.productId} className="border p-2 rounded">
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">
        Total Price: ${order.totalPrice || "N/A"}
      </p>
    </div>
  );
};

export default OrderSummary;
