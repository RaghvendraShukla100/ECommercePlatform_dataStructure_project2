import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { setOrder } from "../slices/orderSlice";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetchProducts();
    fetchOrders();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/orders");
      setOrders(Array.isArray(response.data) ? response.data : []);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  const onSubmit = async (data) => {
    try {
      const newProductData = {
        ...data,
        images: [
          data.image1,
          data.image2,
          data.image3,
          data.image4,
          data.image5,
        ].filter(Boolean),
        specifications: JSON.parse(data.specifications),
      };
      const response = await axios.post("/products", newProductData);
      setProducts([...products, response.data]);
      reset();
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  const updateProduct = async (id, updatedProduct) => {
    try {
      await axios.put(`/products/${id}`, updatedProduct);
      setProducts(
        products.map((product) =>
          product._id === id ? updatedProduct : product
        )
      );
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const removeProduct = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (err) {
      console.error("Error removing product:", err);
    }
  };

  const updateOrderStatus = async (id, status) => {
    try {
      const response = await axios.put(`/orders/${id}`, { status });
      dispatch(setOrder(response.data));
      setOrders(
        orders.map((order) => (order._id === id ? response.data : order))
      );
    } catch (err) {
      console.error("Error updating order status:", err);
    }
  };

  return (
    <div className="p-4 box-border">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-5 flex flex-col box-border  w-6/12"
        >
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="border p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: true })}
            className="border p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Category"
            {...register("category", { required: true })}
            className="border p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Subcategory"
            {...register("subcategory", { required: true })}
            className="border p-2 mb-2"
          />
          <input
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
            className="border p-2 mb-2"
          />
          <div className="bg-gray-600 border m-1 p-2">
            <h2>Product Image</h2>
            <div className="grid grid-cols-2 gap-x-2">
              <input
                type="text"
                placeholder="Image URL 1"
                {...register("image1", { required: true })}
                className="border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Image URL 2"
                {...register("image2")}
                className="border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Image URL 3"
                {...register("image3")}
                className="border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Image URL 4"
                {...register("image4")}
                className="border p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Image URL 5"
                {...register("image5")}
                className="border p-2 mb-2"
              />
            </div>
          </div>
          <input
            type="number"
            placeholder="Stock"
            {...register("stock", { required: true })}
            className="border p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Brand"
            {...register("brand")}
            className="border p-2 mb-2"
          />
          <textarea
            placeholder="Specifications (JSON format)"
            {...register("specifications", { required: true })}
            className="border p-2 mb-2"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Add Product
          </button>
        </form>
      </div>

      {/* product list is here */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Product List</h2>
        <ul>
          {products.map((product) => (
            <li key={product._id} className="border p-2 mb-2 rounded">
              <div>{product.name}</div>
              <button
                onClick={() => removeProduct(product._id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
              <button
                onClick={() =>
                  updateProduct(product._id, {
                    ...product,
                    price: product.price + 1,
                  })
                }
                className="bg-blue-500 text-white p-2 rounded ml-2"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* order list is here  */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Order List</h2>
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="border p-2 mb-2 rounded">
              <div>Order ID: {order._id}</div>
              <div>Status: {order.status}</div>
              <select
                value={order.status}
                onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                className="border p-2 mt-2"
              >
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
