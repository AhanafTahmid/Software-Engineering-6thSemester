const fetch = require("node-fetch"); // or global fetch in newer Node versions

const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const CLOUDFLARE_ACCOUNT_ID = "your_account_id";

async function generateImage(prompt) {
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/black-forest-labs/flux-1-schnell`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: prompt,
      seed: Math.floor(Math.random() * 1000), // Optional
      steps: 4 // Optional (max: 8)
    })
  });

  const data = await response.json();
  const imageBase64 = data.result.image;

  // Save as file (optional)
  require("fs").writeFileSync("image.jpg", Buffer.from(imageBase64, "base64"));

  console.log("Image saved as image.jpg");
}

generateImage("a cyberpunk cat");