const express = require("express");
const route = express.Router();
const Product = require("../model/productSchema");
const mongoose = require("mongoose");
const verifyToken = require("../middleware/auth.js");

route.get("/all-products", verifyToken, (req, res) => {
  Product.find()
    .then((data) => {
      console.log(data);
      if (data) {
        res.json({
          ok: true,
          length: data.length,
          result: data,
        });
      } else {
        throw Error("Failed to access data from DB");
      }
    })
    .catch((error) => {
      console.log(error);
      res.json({ ok: false, error: error.message });
    });
});
//http://localhost:9898/api/products/all-products

route.get("/one-product", verifyToken, (req, res) => {
  const productId = req.query.id;
  console.log(productId);
  Product.findOne({ _id: new mongoose.Types.ObjectId(productId) })
    .then((data) => {
      if (data) {
        res.json({
          ok: true,

          result: data,
        });
      } else {
        throw Error("Failed to access data from DB");
      }
    })
    .catch((error) => {
      res.json({
        ok: false,

        error: error.message,
      });
    });
});
//http://localhost:9898/api/products/one-product

module.exports = route;
