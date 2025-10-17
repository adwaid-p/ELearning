const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_LLM_KEY });

const createContent = async(content)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config: {
        systemInstruction: [`
            you are an expert know everything, create a sylabuss about the course the user asking as a object
            `]
    }
  });
  return response.text;
}

module.exports = createContent;