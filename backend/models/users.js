const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // For hashing passwords

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  orders: [
    {
      orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
      orderDate: { type: Date, required: true },
      status: { type: String, required: true },
      products: [
        {
          productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  ],
});

// Hash the user's password before saving
userSchema.pre("save", async function (next) {
  if (this.isModified("password") || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model("User", userSchema);
