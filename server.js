import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async (req, res) => {
  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://vizaryon.ai",
        "X-Title": "VIZARYON"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct",
        messages: req.body.messages
      })
    });

    const data = await r.json();
    res.json(data);
  } catch {
    res.status(500).json({ error: "AI error" });
  }
});

app.listen(3000, () =>
  console.log("✅ http://localhost:3000")
);
