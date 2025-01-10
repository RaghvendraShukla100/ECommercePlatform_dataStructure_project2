const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors module
const fs = require("fs");

// Import your models
const User = require("./models/users");
const Product = require("./models/products");
const Order = require("./models/orders");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// this function will log the data of newly created product just to check what data is comming from the client side.
const createDemoJsonFile = (data) => {
  fs.writeFile("demo.json", JSON.stringify(data), (err) => console.log(err));
};

// MongoDB Atlas connection
const uri =
  "mongodb+srv://shuklaraghvendra76:tjHxYcZ19nNXU91X@ecommercecluster.cytkc.mongodb.net/EcommerceDatabase?retryWrites=true&w=majority&appName=EcommerceCluster";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

// GET /api/products endpoint
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/product new endpoint
app.post("/api/product", async (req, res) => {
  const product = req.body;

  createDemoJsonFile(product);

  // database calling
  try {
    await Product.create(product);
    res.json({ status: "Product created successfully" });
  } catch (error) {
    res.json({ status: error });
    console.log(err);
  }

  res.json({ status: "data written in the file name demo.json" });
});

// POST /api/products  old endpoint
// app.post("/api/products", async (req, res) => {
//   const product = req.body;
//   console.log("post request:", product);
//   try {
//     await Product.create(product);
//     res.status(201).json({ status: "Product created successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//     console.log(err);
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
