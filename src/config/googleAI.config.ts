import { GoogleGenerativeAI } from "@google/generative-ai";
import EnvironmentConfig from "./env.config";

export default class GoogleAIConfig {
  private googleAI: GoogleGenerativeAI;
  private environmentConfig: EnvironmentConfig;
  private geminiApiKey: string;

  constructor() {
    this.environmentConfig = new EnvironmentConfig();
    this.geminiApiKey = this.environmentConfig.get("GEMINI_API_KEY") as string;

    if (!this.geminiApiKey) {
      throw new Error("GEMINI_API_KEY is not set in the environment");
    }

    this.googleAI = new GoogleGenerativeAI(this.geminiApiKey);
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
