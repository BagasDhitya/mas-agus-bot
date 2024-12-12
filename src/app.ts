import express, { Application } from "express";
import cookieParser from "cookie-parser";
import environment from "dotenv";
import cors from "cors";

import ChatRouter from "./routers/chat.router";

environment.config();

class App {
  private app: Application;
  private port: number;
  private chatRouter: ChatRouter;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.chatRouter = new ChatRouter();

    this.initializeMiddleware();
    this.initializeRoutes();
  }

  public initializeMiddleware(): void {
    this.app.use(
      cors({
        origin: true,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
      })
    );
    this.app.use(express.json());
    this.app.use(cookieParser());
  }

  public initializeRoutes(): void {
    this.app.use("/api/google-gemini", this.chatRouter.getRouter());
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const port = 3000;
const app = new App(port);
app.initializeMiddleware();
app.initializeRoutes();
app.listen();
