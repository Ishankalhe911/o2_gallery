// netlify/functions/translate.js

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { targetLang, content } = JSON.parse(event.body);
    const API_KEY = process.env.GROQ_API_KEY; // This grabs the key from the secure vault

    const systemPrompt = `You are a professional translator. Translate the values of the JSON object provided by the user into ${targetLang === 'hi' ? 'Hindi (Devanagari script)' : 'Marathi (Devanagari script)'}. 
    IMPORTANT: 
    1. Return ONLY valid JSON. 
    2. Do NOT translate keys, only values. 
    3. Maintain the exact same structure.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "llama-3.1-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: JSON.stringify(content) }
        ],
        response_format: { type: "json_object" },
        temperature: 0.1
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
