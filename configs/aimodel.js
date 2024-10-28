import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function generateCompletion(prompt) {
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        temperature: 0.5,
        top_p: 0.95,
        max_tokens: 8192,
        messages: [
          {
            role: "system",
            content: "You are a Video Script Writer and AI Image Prompt Engineer. You do all the tasks with sincerity.",
          },
          {
            role: "user",
            content: prompt, 
          },
        ],
      });
      
      return completion;
    } catch (error) {
      console.error("Error in AI completion: ", error);
      throw error;
    }
  }
