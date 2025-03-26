const fetchWithTimeout = async (url, timeout = 25000) => { // Increase timeout to 25s
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
};

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
        const response = await fetchWithTimeout(apiUrl, 9000); // Set timeout under 10s

        if (!response.ok) {
            return res.status(500).json({ error: "Failed to generate AI image" });
        }

        const jsonData = await response.json();
        const imageUrls = jsonData.result?.map(item => item.url) || [];

        res.status(200).json({
            status: jsonData.status || "error",
            message: jsonData.message || "No message received",
            images: imageUrls,
            join: "@BJ_Devs on Telegram",
            support: "@BJ_Coder"
        });

    } catch (error) {
        res.status(500).json({ error: "Request Timeout or Failed", details: error.message });
    }
}
