import environment from "dotenv";

export default class EnvironmentConfig {
  constructor() {
    environment.config();
  }

  public get(key: string): string | undefined {
    return process.env[key];
  }
}
