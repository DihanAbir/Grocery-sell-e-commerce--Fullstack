import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token = [];

  if (req.headers.authorization) {
    console.log("decoded info", token);
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decode.id).select("-password");

      next();
    } catch (error) {
      res.status(404).send("unauthorize -> token not found");
    }
  }
  res.status(404).send("unauthorize token");
});

export default protect;
