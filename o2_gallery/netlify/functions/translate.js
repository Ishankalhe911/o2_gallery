// netlify/functions/translate.js
exports.handler = async function(event, context) {
  
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const { targetLang, content } = JSON.parse(event.body);
    const API_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY) {
      console.error("API Key is missing in Netlify Environment Variables");
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Server Configuration Error: Missing Key" }) };
    }

    const systemPrompt = `You are a professional translator. Translate the values of the JSON object provided by the user into ${targetLang === 'hi' ? 'Hindi (Devanagari script)' : 'Marathi (Devanagari script)'}. IMPORTANT: 1. Return ONLY valid JSON. 2. Do NOT translate keys, only values. 3. Maintain the exact same structure.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        // 👇 CRITICAL CHANGE: Switched to the faster model to prevent timeouts
        model: "llama-3.1-8b-instant", 
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: JSON.stringify(content) }
        ],
        response_format: { type: "json_object" },
        temperature: 0.1
      })
    });

    if (!response.ok) {
       const err = await response.text();
       console.error("Groq API Error:", err);
       return { statusCode: 500, headers, body: JSON.stringify({ error: "AI Provider Error", details: err }) };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error("Function Error:", error);
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
