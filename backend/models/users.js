const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const cartItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new Schema({
  products: { type: [cartItemSchema], required: true },
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: addressSchema, required: true },
  cart: { type: [cartItemSchema], default: [] },
  orders: { type: [orderSchema], default: [] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
