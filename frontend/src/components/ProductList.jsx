import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => {
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("API response is not an array");
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map((product) => (
          <li key={product._id} className="border p-2 rounded">
            <a href={`/products/${product._id}`}>{product.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
