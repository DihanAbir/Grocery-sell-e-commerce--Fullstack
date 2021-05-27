import express from "express";
const router = express.Router();
import asyncHandler from "express-async-handler";
import Products from "../models/productModel.js";

// products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Products.find({});
    res.json(products);
  })
);

// single product
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    res.json(product);
  })
);

export default router;
