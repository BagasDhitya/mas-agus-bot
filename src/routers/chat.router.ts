import { Router } from "express";
import ChatController from "../controllers/chat.controller";

export default class ChatRouter {
  private router: Router;
  private chatController: ChatController;

  constructor() {
    this.router = Router();
    this.chatController = new ChatController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(
      "/chat",
      this.chatController.createChatPrompt.bind(this.chatController)
    );
    this.router.post(
      "/chat/reset-cookie",
      this.chatController.resetAccessCount.bind(this.chatController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
