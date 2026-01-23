import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = "meta-llama/llama-3.3-70b-instruct:free";

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ reply: "Empty message." });
    }

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://vizaryon.ai",
          "X-Title": "VIZARYON"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [{ role: "user", content: userMessage }]
        })
      }
    );

    const data = await response.json();
    const reply =
      data.choices?.[0]?.message?.content || "No response from AI.";

    res.json({ reply });

  } catch (err) {
    res.status(500).json({ reply: "Server error." });
  }
});

app.listen(3000, () =>
  console.log("✅ VIZARYON server running on port 3000")
);
