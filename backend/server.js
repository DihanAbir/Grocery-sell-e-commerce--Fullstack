import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// external routes
import productRoutes from "./routes/productRoute.js";
import authRoutes from "./routes/userRoute.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();
connectDB();
app.use(express.json());

// initial route
app.get("/", (req, res) => {
  console.log(`api runnig succesfully`);
});

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running - on ${PORT}`);
});
