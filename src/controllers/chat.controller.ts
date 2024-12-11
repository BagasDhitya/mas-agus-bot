import { Response, Request } from "express";
import { textPrompt } from "../config/prompt.config";
import ChatService from "../services/chat.service";

export default class ChatController {
  private chatService: ChatService;

  constructor() {
    this.chatService = new ChatService();
  }

  async createChatPrompt(req: Request, res: Response) {
    let accessCount = parseInt(req.cookies.accessCount || "0");
    let promptHistory: string[] = req.cookies.promptHistory
      ? JSON.parse(req.cookies.promptHistory)
      : [];

    let response;

    const userPrompt = req.body.prompt;
    promptHistory.push(userPrompt);

    if (accessCount === 0) {
      const systemPrompt = textPrompt;
      response = await this.chatService.createChatPrompt(systemPrompt);
    } else {
      const contextPrompt = promptHistory.join(" ");
      const fullPrompt = `${contextPrompt} ${userPrompt}`;
      response = await this.chatService.createChatPrompt(fullPrompt);
    }

    if (response) {
      res.cookie("accessCount", (accessCount + 1).toString(), {
        httpOnly: true,
      });
      res.cookie("promptHistory", JSON.stringify(promptHistory), {
        httpOnly: true,
      });

      res.status(200).send({
        status: res.statusCode,
        data: response,
      });
    } else {
      res.status(400).send({
        status: res.statusCode,
        message: res.statusMessage,
      });
    }
  }

  resetAccessCount(req: Request, res: Response) {
    res.clearCookie("accessCount");
    res.clearCookie("promptHistory");

    res.status(200).send({
      status: res.statusCode,
      message: "Cookie accessCount dan promptHistory telah direset",
    });
  }
}
