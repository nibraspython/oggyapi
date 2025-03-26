app.get("/seeai", async (req, res) => {
    const { prompt } = req.query;
    
    // Send a quick response to prevent timeout
    res.json({ message: "Processing your request. Check back later.", status: "processing" });

    try {
        const result = await fetch(`https://seaart-ai.apis-bj-devs.workers.dev/?Prompt=${encodeURIComponent(prompt)}`);
        const data = await result.json();

        // Store result in a database or cache for later retrieval
        saveToDatabase(prompt, data);
    } catch (error) {
        console.error("AI Request Failed:", error);
    }
});
