const order = {
  _id: "ObjectId",
  userId: "ObjectId",
  orderDate: "Date",
  status: "String", //"Pending", "Processing", "Shipped", "Delivered", "Cancelled"
  shippingAddress: {
    street: "String",
    city: "String",
    state: "String",
    zipCode: "String",
    country: "String",
  },
  billingAddress: {
    street: "String",
    city: "String",
    state: "String",
    zipCode: "String",
    country: "String",
  },
  paymentMethod: "String",
  totalPrice: "Number",
  orderItems: [
    {
      productId: "ObjectId",
      quantity: "Number",
      price: "Number",
    },
  ],
};
