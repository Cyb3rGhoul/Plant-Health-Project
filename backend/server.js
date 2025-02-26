import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
    try {
        const { text, images = [] } = req.body;

        console.log("Received request:", { text, imagesCount: images.length });

        const imageParts = images.map(image => ({
            inlineData: {
                data: image.split(",")[1], // Extract base64 data
                mimeType: "image/png",
            },
        }));

        // ✅ Use gemini-1.5-pro instead of gemini-pro-vision
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        console.log("Sending request to Gemini API...");

        const chatInput = [{ text }];
        if (imageParts.length > 0) chatInput.push(...imageParts);

        const result = await model.generateContent(chatInput);

        console.log("Gemini API response received:", result);

        // Check if response is valid
        if (!result.response || !result.response.text) {
            throw new Error("Invalid response format from Gemini API");
        }

        const responseText = await result.response.text();

        res.json({ reply: responseText });
    } catch (error) {
        console.error("Error processing chat:", error);
        res.status(500).json({ reply: `Error: ${error.message}` });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
