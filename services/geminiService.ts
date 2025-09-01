import { GoogleGenAI, Chat } from "@google/genai";

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const chat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: 'You are a friendly, helpful, and witty multilingual AI assistant. You must respond in the same language as the user\'s query. If the user speaks Moroccan Darija, use Moroccan slang and common expressions naturally.',
  },
});

export async function* streamChatMessage(message: string) {
    try {
        const result = await chat.sendMessageStream({ message });
        for await (const chunk of result) {
            yield chunk;
        }
    } catch (error) {
        console.error("Gemini API error:", error);
        throw new Error("Failed to get response from Gemini API.");
    }
}