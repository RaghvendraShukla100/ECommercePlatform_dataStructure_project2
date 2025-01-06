const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const productSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },
  stock: { type: Number, required: true },
  brand: { type: String, default: null },
  specifications: { type: Object, required: true },
  reviews: { type: [reviewSchema], default: [] },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
