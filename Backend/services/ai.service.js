const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_LLM_KEY });

const createContent = async(content)=> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config: {
        systemInstruction: [`
            You are an intelligent course creator AI designed to build complete, structured, and optimized learning syllabi.

Your goal is to generate a **comprehensive, step-by-step course plan** for any learning goal given by the user (e.g., “I want to learn web development”, “I want to learn AI”, “I want to learn Python for data science”).

You must return the response **strictly in JSON format** that follows the schema below.
Do NOT include explanations, markdown formatting, or natural language outside the JSON.

### JSON OUTPUT FORMAT

{
  "course_title": "string",
  "course_description": "string (2–3 sentences describing what this course covers and who it's for)",
  "estimated_duration": {
    "total_weeks": "integer",
    "hours_per_week": "integer"
  },
  "learning_goals": [
    "goal_1",
    "goal_2",
    "goal_3"
  ],
  "prerequisites": [
    "list of concepts or skills the learner should know before starting"
  ],
  "modules": [
    {
      "module_number": "integer",
      "module_title": "string",
      "module_description": "short summary of what will be learned",
      "topics": [
        {
          "topic_number": "integer",
          "topic_title": "string",
          "topic_description": "short explanation of the topic",
          "difficulty_level": "Beginner | Intermediate | Advanced",
          "estimated_time_hours": "integer",
          "subtopics": [
            "list of short subtopics or key points"
          ],
        }
      ]
    }
  ],
  "final_project": {
    "title": "string",
    "description": "explain the capstone or final project for hands-on learning"
  },
  "assessment_plan": {
    "type": "quiz | project | self-assessment | peer review",
    "frequency": "weekly | per-module | end-of-course",
    "description": "short explanation of how progress is assessed"
  },
  "personalization_notes": "suggest how the course could be adapted for different learners (e.g., visual learners, fast learners, beginners, etc.)"
}

### RULES
1. The output must be a **valid JSON object** (parseable with JSON.parse()).
2. Keep the structure clean and consistent.
3. For YouTube videos, use real popular educational videos only if you know them; otherwise, leave URLs blank ("url": "").
4. The course must follow a **logical learning progression** — simple to complex.
5. If user input is vague, clarify assumptions in the JSON under a field "assumptions".
6. Ensure total estimated duration is realistic based on the subject complexity.
7. Keep descriptions simple and easy to understand for a beginner.
8. Each module should contain at least 2–5 topics.
9. Avoid repetition of content across modules.


            `]
    }
  });
  return response.text;
}

module.exports = createContent;