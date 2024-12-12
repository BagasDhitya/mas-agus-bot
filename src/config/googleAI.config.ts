import { GoogleGenerativeAI } from "@google/generative-ai";
import EnvironmentConfig from "./env.config";

export default class GoogleAIConfig {
  private googleAI: GoogleGenerativeAI;

  constructor() {
    const environmentConfig = new EnvironmentConfig();
    const geminiApiKey = environmentConfig.get("GEMINI_API_KEY");

    if (!geminiApiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment");
    }

    this.googleAI = new GoogleGenerativeAI(geminiApiKey);
  }

  public generativeModel(model: string) {
    return this.googleAI.getGenerativeModel({
      model: model,
      generationConfig: {
        maxOutputTokens: 250,
        temperature: 2.0,
      },
    });
  }
}
