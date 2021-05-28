import express from "express";
const router = express.Router();
import {
  getProduct,
  getSingleProduct,
} from "../controller/ProductControler.js";

// products
router.route("/").get(getProduct);

// single product
router.get("/:id", getSingleProduct);

export default router;
