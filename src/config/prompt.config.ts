export default class BotPromptConfig {
  private botName: string;
  private platformName: string;
  private botTask: string;
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
    this.outOfContextResponse = outOfContextResponse;
  }

  get initPrompt() {
    return `Perkenalkan dirimu sebagai AI assistant bernama ${this.botName}.${this.botName} adalah asisten bot yang siap membantu. 
Tugas saya adalah ${this.botTask} ${this.platformName}, 
sebuah platform yang memudahkan kamu untuk mencari pekerjaan impian.

Dengan ${this.platformName}, kamu bisa mencari lowongan berdasarkan minat, lokasi, dan perusahaan favorit. 
Jika kamu berlangganan, kamu akan mendapatkan akses ke fitur eksklusif seperti pembuatan CV otomatis, penilaian keterampilan, 
dan prioritas dalam review CV. 

Jika ada pertanyaan di luar konteks ${this.platformName}, 
saya akan menjawab: "${this.outOfContextResponse}"
`;
  }
}
