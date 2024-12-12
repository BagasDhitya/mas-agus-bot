# Mas Agus - Customizable AI Assistant

**Mas Agus** is a conversational AI assistant built to help users with various queries and guidance on how to use a specific application or service. Developed using **Express.js** and **TypeScript**, Mas Agus is integrated with **Google Gemini 1.5 Flash**, an AI model that offers intelligent and responsive interactions.

One of the key features of Mas Agus is its **customizability**. The name and functionality of the assistant can be adjusted to suit the needs of any business or application, making it flexible for a wide range of industries and purposes.

## Key Features

- **Interactive Guidance**: Mas Agus can provide instructions and answer users' questions on how to use the integrated application or platform.
- **Personalization**: The name and characteristics of the chatbot can be customized to fit the brand or needs of the business.
- **Smart Interaction**: Powered by **Google Gemini 1.5 Flash**, Mas Agus delivers quick and relevant responses in natural conversations.
- **Easy Integration**: Built with **Express.js** and **TypeScript**, Mas Agus can be easily integrated into various web-based platforms.

## Technologies Used

- **Google Gemini 1.5 Flash**: The latest AI model from Google that provides natural and responsive conversational capabilities.
- **Express.js**: A lightweight, flexible Node.js web framework used for building API servers.
- **TypeScript**: A superset of JavaScript that offers static typing, enhancing code maintainability and scalability.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/username/mas-agus.git
   ```

2. **Install Dependencies**:
   Ensure that **Node.js** and **npm** or **yarn** are installed.

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:

   ```bash
   GEMINI_API_KEY=your-gemini-api-key
   GEMINI_MODEL=your-gemini-model
   ```

4. **Start the Application**:
   To start the server, run:

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

## Customization

You can easily customize the name and behavior of Mas Agus. To change the name of the assistant, modify the `this.botPromptConfig` variable in the `chat.controller.ts` file:

```ts
this.botPromptConfig = new BotPromptConfig(
  "Mas Agus",
  "MyJob",
  "membantu kamu supaya mudah dalam menggunakan MyJob",
  "mencari pekerjaan berdasarkan minat, lokasi, dan perusahaan, serta mengakses fitur eksklusif untuk berlangganan",
  "Mohon maaf, saya hanya dapat membantu terkait MyJob."
); // Change this to customize
```
