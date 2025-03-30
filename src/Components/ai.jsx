import Groq from "groq-sdk";

const apiKey = "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" 


const groq = new Groq({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true 
});




export const sendMessageToGroq = async (message) => {
  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", 
      messages: [{ role: "user", content: message }],
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq API error:", error);
    return "Error: Unable to get a response";
  }
};