import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// app.use() is used when we are using middleware

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes.js";

//routes declaration
//http://localhost:8000/api/v1/users/register
app.use("/api/v1/users", userRouter);

export { app };
