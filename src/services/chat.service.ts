import GoogleAIConfig from "../config/googleAI.config";
import EnvironmentConfig from "../config/env.config";

interface PromptModel {
  userPrompt: string;
}

export default class ChatService {
  private googleAiConfig: GoogleAIConfig;
  private environmentConfig: EnvironmentConfig;
  private geminiModel: string;

  constructor() {
    this.googleAiConfig = new GoogleAIConfig();
    this.environmentConfig = new EnvironmentConfig();
    this.geminiModel = this.environmentConfig.get("GEMINI_MODEL") as string;
  }

  public async createChatPrompt(prompt: string) {
    const model = this.googleAiConfig.generativeModel(this.geminiModel);
    const promptData: PromptModel = { userPrompt: prompt };
    const result = await model.generateContent(promptData.userPrompt);
    return result.response.text();
  }
}
