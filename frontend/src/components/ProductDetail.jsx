import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="mb-4">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
