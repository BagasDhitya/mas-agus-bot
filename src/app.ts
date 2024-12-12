import express, { Application } from "express";
import cookieParser from "cookie-parser";
import ChatRouter from "./routers/chat.router";
import cors from "cors";

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

  private initializeMiddleware(): void {
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

  private initializeRoutes(): void {
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
app.listen();
