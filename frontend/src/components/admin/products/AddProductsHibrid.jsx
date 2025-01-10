import React, { useState } from "react";
import ClothingSpecification from "./ClothingSpecification";
import ElectronicsSpecification from "./electronicsSpecification";
import DecoreSpecification from "./decoreSpecification";
import FurnitureSpecification from "./furnitureSpecification";
import BeautiSkincareSpecification from "./BeautiSkincareSpecification";
import axios from "axios"; // Import axios for API calls

function AddProductsHibrid() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    origin: "",
    specification: {},
  });

  const categories = [
    "clothing",
    "electronics",
    "decore",
    "furniture",
    "beauti & skincare",
  ];

  const subCategories = {
    clothing: ["mens", "womens", "boys", "girls"],
    electronics: ["mobile", "laptop", "tv"],
    decore: ["curtains", "paintings", "clocks", "decorative articles"],
    furniture: ["sofa", "chair", "table", "cupboards"],
    "beauti & skincare": ["face wash", "soap", "lotion"],
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSubCategory(subCategories[selectedCategory]?.[0] || "");
  };

  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleSpecificationChange = (specification) => {
    setProductDetails({
      ...productDetails,
      specification,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !productDetails.name ||
      !productDetails.description ||
      !category ||
      !subCategory ||
      !productDetails.price ||
      !productDetails.stock ||
      !productDetails.origin
    ) {
      alert("Please fill out all required fields.");
      return;
    }

    const productToSend = {
      ...productDetails,
      price: Number(productDetails.price), // Ensure price is a number
      stock: Number(productDetails.stock), // Ensure stock is a number
      category,
      subcategory: subCategory, // Ensure subCategory is included
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/product",
        productToSend
      );
      console.log("Product added:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("There was an error adding the product. Please try again.");
    }
  };

  return (
    <div className="bg-gray-800 py-4 w-10/12 mx-auto ">
      <h1 className="bg-gray-800 text-center uppercase font-bold">
        Add Products to Database
      </h1>
      <form
        action="submit"
        className="bg-[#242424] m-10 flex flex-col"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col m-2">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={productDetails.name}
            onChange={handleInputChange}
            className="my-1 px-2 h-10 rounded-sm"
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={productDetails.description}
            onChange={handleInputChange}
            className="my-1 px-2 h-16 rounded-sm"
          />
        </div>
        {/* Category section starts here */}
        <section className="mx-2">
          <div className="w-fit p-2">
            <select
              className="p-2 mx-1 rounded-sm h-10"
              name="category"
              id="category"
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="rounded-sm h-10"
                >
                  {category}
                </option>
              ))}
            </select>
            {category && (
              <select
                className="p-2"
                name="sub-category"
                id="sub-category"
                value={subCategory}
                onChange={handleSubCategoryChange}
              >
                {subCategories[category]?.map((subCat) => (
                  <option key={subCat} value={subCat}>
                    {subCat}
                  </option>
                ))}
              </select>
            )}
          </div>
        </section>
        {/* Category section ends here */}
        {/* Specification section */}
        <section className="m-2 p-2">
          {category === "clothing" && (
            <ClothingSpecification onChange={handleSpecificationChange} />
          )}
          {category === "electronics" && (
            <ElectronicsSpecification
              subcategory={subCategory}
              onChange={handleSpecificationChange}
            />
          )}
          {category === "decore" && (
            <DecoreSpecification
              subcategory={subCategory}
              onChange={handleSpecificationChange}
            />
          )}
          {category === "furniture" && (
            <FurnitureSpecification
              subcategory={subCategory}
              onChange={handleSpecificationChange}
            />
          )}
          {category === "beauti & skincare" && (
            <BeautiSkincareSpecification
              subcategory={subCategory}
              onChange={handleSpecificationChange}
            />
          )}
        </section>
        <section className="grid grid-cols-3 gap-3 m-3">
          <input
            type="number"
            placeholder="Product Price in ₹"
            name="price"
            value={productDetails.price}
            onChange={handleInputChange}
            className="h-10 px-2 rounded-sm"
          />
          <input
            type="number"
            placeholder="Stock Available"
            name="stock"
            value={productDetails.stock}
            onChange={handleInputChange}
            className="h-10 px-2 rounded-sm"
          />
          <input
            type="text"
            placeholder="Country of Origin"
            name="origin"
            value={productDetails.origin}
            onChange={handleInputChange}
            className="h-10 px-2 rounded-sm"
          />
        </section>
        <button
          type="submit"
          className="w-32 rounded-sm cursor-pointer bg-gray-800 hover:bg-gray-900 capitalize my-2 mx-auto h-10"
        >
          Submit Data
        </button>
      </form>
    </div>
  );
}

export default AddProductsHibrid;
