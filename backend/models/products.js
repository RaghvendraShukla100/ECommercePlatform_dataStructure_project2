const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  images: [{ type: String, required: true }],
  stock: { type: Number, required: true },
  brand: { type: String, required: false },
  specifications: {
    size: [{ type: String, enum: ["S", "M", "L", "XL", "XXL"] }],
    color: {
      type: Map,
      of: [String],
    },
  },
  reviews: [
    {
      user: { type: String, required: true },
      rating: { type: Number, required: true, min: 0, max: 5 },
      comment: { type: String, required: true },
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
