import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import UserRoute from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
console.log(process.env.CLIENT_URL) 

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
// app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/users", UserRoute);

app.listen(8800, () => {
  console.log("Server Running");
});
