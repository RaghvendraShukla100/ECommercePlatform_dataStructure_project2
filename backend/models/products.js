const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  color: { type: String },
  imgLink: [String],
});

const specificationsSchema = new mongoose.Schema({
  brand: { type: String },
  model: { type: String },
  operatingSystem: { type: String },
  ram: { type: String },
  rom: { type: String },
  cpuModel: { type: String },
  cpuSpeed: { type: String },
  battery: { type: String },
  displayResolution: { type: String },
  simType: { type: String },
  whatsInTheBox: { type: String },
  colors: [colorSchema],
});

const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  comment: { type: String, required: true },
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  origin: { type: String, required: true },
  brand: { type: String },
  specification: specificationsSchema,
  reviews: [reviewSchema],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
