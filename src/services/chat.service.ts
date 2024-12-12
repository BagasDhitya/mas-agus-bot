import GoogleAIConfig from "../config/googleAI.config";

interface PromptModel {
  userPrompt?: string;
}

export default class ChatService {
  private googleAiConfig: GoogleAIConfig;

  constructor() {
    this.googleAiConfig = new GoogleAIConfig();
  }

  public async createChatPrompt(prompt: string) {
    const model = this.googleAiConfig.generativeModel("gemini-1.5-flash");
    const promptData: PromptModel = {};

    promptData.userPrompt = prompt;
    const result = await model.generateContent(promptData.userPrompt as string);
    return result.response.text();
  }
}
