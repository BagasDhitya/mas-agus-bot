import express, { Application } from "express";
import cookieParser from "cookie-parser";
import ChatRouter from "./routers/chat.router";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/google-gemini", ChatRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
