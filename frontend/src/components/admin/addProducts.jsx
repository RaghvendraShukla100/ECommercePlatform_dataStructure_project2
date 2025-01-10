import React, { useState } from "react";
import axios from "axios";

//local state of the component
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    subcategory: "",
    price: "",
    images: [""],
    stock: "",
    brand: "",
    specifications: {
      size: [],
      color: new Map(),
    },
    reviews: [
      {
        user: "my user id",
        rating: "4",
        comment: "very good product.",
      },
    ],
  });

  const [colorFields, setColorFields] = useState([
    { colorName: "", colorValues: "" },
  ]);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSpecificationChange = (e, key, type) => {
    const { value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      specifications: {
        ...prevProduct.specifications,
        [key]: type === "array" ? value.split(",") : value,
      },
    }));
  };

  const handleColorFieldChange = (e, index, field) => {
    const newColorFields = colorFields.map((colorField, i) => {
      if (i === index) {
        return { ...colorField, [field]: e.target.value };
      }
      return colorField;
    });
    setColorFields(newColorFields);
  };

  const addColorField = () => {
    setColorFields([...colorFields, { colorName: "", colorValues: "" }]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert color fields to Map
    const colorMap = new Map();
    colorFields.forEach(({ colorName, colorValues }) => {
      if (colorName && colorValues) {
        colorMap.set(
          colorName,
          colorValues.split(",").map((value) => value.trim())
        ); // Trim any leading spaces
      }
    });

    const productData = {
      ...product,
      price: Number(product.price), // Convert price to number
      stock: Number(product.stock), // Convert stock to number
      specifications: {
        ...product.specifications,
        color: Object.fromEntries(colorMap),
      },
    };

    // Log product data
    console.log(
      "Submitting Product Data:",
      JSON.stringify(productData, null, 2)
    );

    try {
      const response = await axios.post(
        "http://localhost:3000/api/products",
        productData
      );
      setSuccessMessage("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        price: "",
        images: [""],
        stock: "",
        brand: "",
        specifications: {
          size: [],
          color: new Map(),
        },
        reviews: [
          {
            user: "my user id",
            rating: 4, // Ensure rating is a number
            comment: "very good product.",
          },
        ],
      });
      setColorFields([{ colorName: "", colorValues: "" }]);
    } catch (error) {
      setErrorMessage(
        "There was an error submitting the form. Please try again."
      );
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl text-gray-900 text-center font-bold mb-4">
        Add Product
      </h2>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="subcategory"
          placeholder="Subcategory"
          value={product.subcategory}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="images"
          placeholder="Images (comma-separated URLs)"
          value={product.images}
          onChange={(e) =>
            setProduct((prevProduct) => ({
              ...prevProduct,
              images: e.target.value.split(","),
            }))
          }
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={product.stock}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Specifications */}
        <input
          type="text"
          name="size"
          placeholder="Sizes (comma-separated)"
          value={product.specifications.size.join(",")}
          onChange={(e) => handleSpecificationChange(e, "size", "array")}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Color Fields */}
        <div className="bg-gray-500 p-2 text-sm rounded-sm">
          <h3 className=" font-semibold uppercase text-md text-gray-800 mb-2">
            Colors :
          </h3>

          {colorFields.map((colorField, index) => (
            <div key={index} className="grid grid-cols-12 gap-x-1 mb-2">
              {/* color name */}
              <input
                type="text"
                placeholder="Color Name"
                value={colorField.colorName}
                onChange={(e) => handleColorFieldChange(e, index, "colorName")}
                className="flex-1 px-4 py-2 border col-span-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* color value */}
              <input
                type="text"
                placeholder="Color Values (comma-separated)"
                value={colorField.colorValues}
                onChange={(e) =>
                  handleColorFieldChange(e, index, "colorValues")
                }
                className="flex-1 px-4 py-2 border col-span-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={addColorField}
                className=" border text-white col-span-1
                rounded text-lg "
              >
                +
              </button>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
