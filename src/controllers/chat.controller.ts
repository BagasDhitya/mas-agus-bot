import { Response, Request } from "express";
import ChatService from "../services/chat.service";

export default class ChatController {
  private chatService: ChatService;

  constructor() {
    this.chatService = new ChatService();
  }

  async createChatPrompt(req: Request, res: Response) {
    // Mengambil accessCount dan riwayat prompt dari cookies, jika tidak ada set nilai default
    let accessCount = parseInt(req.cookies.accessCount || "0");
    let promptHistory: string[] = req.cookies.promptHistory
      ? JSON.parse(req.cookies.promptHistory)
      : [];

    let response;

    // Menambahkan prompt baru ke dalam riwayat prompt
    const userPrompt = req.body.prompt;
    promptHistory.push(userPrompt);

    // Pengecekan accessCount
    if (accessCount === 0) {
      // Jika accessCount 0, kirimkan prompt sistem dan tidak menggunakan riwayat prompt
      const systemPrompt = "Coba perkenalkan diri kamu sebagai assistant bot 'Mas Agus'";

      response = await this.chatService.createChatPrompt(systemPrompt);
    } else {
      // Jika accessCount lebih dari 0, kirimkan prompt pengguna dengan riwayat prompt untuk konteks
      const contextPrompt = promptHistory.join(" "); // Menggabungkan semua prompt sebelumnya
      const fullPrompt = `${contextPrompt} ${userPrompt}`; // Menambahkan prompt baru dengan konteks
      response = await this.chatService.createChatPrompt(fullPrompt);
    }

    if (response) {
      // Set cookies dengan accessCount yang baru dan simpan riwayat prompt yang telah diperbarui
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
    // Menghapus cookie accessCount dan promptHistory
    res.clearCookie("accessCount");
    res.clearCookie("promptHistory");

    res.status(200).send({
      status: res.statusCode,
      message: "Cookie accessCount dan promptHistory telah direset",
    });
  }
}
