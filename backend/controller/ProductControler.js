import express from "express";
import asyncHandler from "express-async-handler";
import Products from "../models/productModel.js";

export const getProduct = asyncHandler(async (req, res) => {
  const products = await Products.find({});
  res.json(products);
});

export const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  res.json(product);
});
