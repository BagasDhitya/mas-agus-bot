import { GoogleGenerativeAI } from "@google/generative-ai";
import environment from "dotenv";
environment.config();

export default class GoogleAIConfig {
  private googleAI: GoogleGenerativeAI;
  private geminiApiKey = process.env.GEMINI_API_KEY as string;

  constructor() {
    this.googleAI = new GoogleGenerativeAI(this.geminiApiKey);
  }
  public generativeModel(model: string) {
    return this.googleAI.getGenerativeModel({
      model: model,
      generationConfig: {
        maxOutputTokens: 100,
        temperature: 0.0,
      },
    });
  }
}
