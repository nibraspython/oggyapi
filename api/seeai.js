export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Only GET requests allowed" });
    }

    const prompt = req.query.prompt;
    if (!prompt) {
        return res.status(400).json({ error: "No prompt provided" });
    }

    const apiUrl = `https://seaart-ai.apis-bj-devs.workers.dev/?Prompt=${encodeURIComponent(prompt)}`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("SeaArt API Error:", errorText);
            return res.status(500).json({ error: "Failed to generate AI image", details: errorText });
        }

        const jsonData = await response.json();

        // Extracting image URLs from response
        const imageUrls = jsonData.result?.map(item => item.url) || [];

        // ✅ Customizing JSON response
        const customData = {
            status: jsonData.status || "error",
            message: jsonData.message || "No message received",
            prompt: jsonData.prompt || "No prompt available",
            images: imageUrls, // Sending only image URLs
            join: "@BJ_Devs on Telegram",
            support: "@BJ_Coder"
        };

        res.status(200).json(customData);

    } catch (error) {
        console.error("Fetch Error:", error);
        res.status(500).json({ error: "Failed to generate AI image", details: error.message });
    }
}
