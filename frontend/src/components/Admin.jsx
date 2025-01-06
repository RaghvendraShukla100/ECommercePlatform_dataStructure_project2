import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOrder } from "../slices/orderSlice";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    images: "",
    stock: "",
    brand: "",
    specifications: "",
  });
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

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

  const addProduct = async () => {
    try {
      // Split image URLs by comma and parse specifications as an object
      const newProductData = {
        ...newProduct,
        images: newProduct.images.split(",").map((img) => img.trim()),
        specifications: JSON.parse(newProduct.specifications),
      };
      const response = await axios.post("/products", newProductData);
      setProducts([...products, response.data]);
      setNewProduct({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        price: "",
        images: "",
        stock: "",
        brand: "",
        specifications: "",
      });
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Add New Product</h2>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Category"
          value={newProduct.category}
          onChange={(e) =>
            setNewProduct({ ...newProduct, category: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Subcategory"
          value={newProduct.subcategory}
          onChange={(e) =>
            setNewProduct({ ...newProduct, subcategory: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Image URLs (comma separated)"
          value={newProduct.images}
          onChange={(e) =>
            setNewProduct({ ...newProduct, images: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="number"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={(e) =>
            setNewProduct({ ...newProduct, stock: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Brand"
          value={newProduct.brand}
          onChange={(e) =>
            setNewProduct({ ...newProduct, brand: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <textarea
          placeholder="Specifications (JSON format)"
          value={newProduct.specifications}
          onChange={(e) =>
            setNewProduct({ ...newProduct, specifications: e.target.value })
          }
          className="border p-2 mb-2"
        />
        <button
          onClick={addProduct}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add Product
        </button>
      </div>

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
