import express from "express";
import { authUser, userProfile } from "../controller/UserController.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

// login
router.route("/login").post(authUser);
router.route("/profile").get(protect, userProfile);

export default router;
