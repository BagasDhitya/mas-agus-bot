import { Router } from "express";
import ChatController from "../controllers/chat.controller";

const router = Router();
const chatController = new ChatController();

router.post("/chat", chatController.createChatPrompt.bind(chatController));
router.post(
  "/chat/reset-access-count",
  chatController.resetAccessCount.bind(chatController)
);

export default router;
