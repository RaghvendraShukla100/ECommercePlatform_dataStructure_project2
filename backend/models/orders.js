const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
});

const orderItemSchema = new Schema({
  productId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const orderSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  orderDate: { type: Date, default: Date.now, required: true },
  status: { type: String, required: true },
  shippingAddress: { type: addressSchema, required: true },
  billingAddress: { type: addressSchema, required: true },
  paymentMethod: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  orderItems: { type: [orderItemSchema], required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
