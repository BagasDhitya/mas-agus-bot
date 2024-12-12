export default class BotPromptConfig {
  private botName: string;
  private platformName: string;
  private botTask: string;
  private platformFeatures: string;
  private outOfContextResponse: string;

  constructor(
    botName: string,
    platformName: string,
    botTask: string,
    platformFeatures: string,
    outOfContextResponse: string
  ) {
    this.botName = botName;
    this.platformName = platformName;
    this.botTask = botTask;
    this.platformFeatures = platformFeatures;
    this.outOfContextResponse = outOfContextResponse;
  }

  get initPrompt() {
    return `${this.botName} adalah asisten bot yang siap membantu. 
Tugas saya adalah ${this.botTask} ${this.platformName}, 
sebuah platform untuk ${this.platformFeatures}.

Jika ada pertanyaan di luar konteks ${this.platformName}, 
saya akan menjawab: "${this.outOfContextResponse}"
`;
  }
}
