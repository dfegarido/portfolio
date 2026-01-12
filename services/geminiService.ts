import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  if (!process.env.API_KEY) {
    console.warn("API_KEY is not defined. Chat functionality will be limited.");
    // In a real app, you might handle this more gracefully, but for now we proceed
    // The call will likely fail if no key is present, but we follow the strict requirement
    // to assume process.env.API_KEY is available.
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });

  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  const chat = initializeChat();
  
  try {
    const result = await chat.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const c = chunk as GenerateContentResponse;
      if (c.text) {
        yield c.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
