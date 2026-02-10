export const handler = async (event) => {
  // 1. Setup CORS Headers (Permission for GitHub Pages to talk to Netlify)
  const headers = {
    'Access-Control-Allow-Origin': '*', // Allows your GitHub Pages to connect
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // 2. Handle "Pre-flight" check (Browser asks "Can I connect?")
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  // 3. Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const { targetLang, content } = JSON.parse(event.body);
    const API_KEY = process.env.GROQ_API_KEY;

    if (!API_KEY) {
      console.error("Missing API Key");
      return { statusCode: 500, headers, body: JSON.stringify({ error: "Server Configuration Error" }) };
    }

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
      headers, // <--- Return headers here too!
      body: JSON.stringify(data)
    };

  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: error.message }) };
  }
};
