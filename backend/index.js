import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.get("/", (req, res) => {
//   res.send("Hello Dhara 143");
// });
app.use(express.json()); //allow to parese incoming request: req.body
app.use(cookieParser()); // allow to parse incoming cookies
app.use("/api/auth", authRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/public")));
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "public", "index.html"));
  });
}
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port :", PORT);
});
