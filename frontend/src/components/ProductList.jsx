import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        const data = response.data;
        console.log(data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API response is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center font-extrabold text-3xl my-5 ">
        Product List
      </h1>
      <section className="border flex space-x-2 p-2 ">
        {/* filter products */}
        <aside className=" w-64 p-5 border ">
          <h3>filter products</h3>
        </aside>

        {/* products list */}
        <section className=" flex-grow p-5 border">
          <h3>All products</h3>
          {products.map((product) => (
            <div key={product._id}></div>
          ))}
        </section>
      </section>
    </>
  );
};

export default ProductList;
