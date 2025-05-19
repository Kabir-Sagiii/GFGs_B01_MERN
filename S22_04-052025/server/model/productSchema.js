const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  rating: Number,
  price: Number,
  category: String,
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
