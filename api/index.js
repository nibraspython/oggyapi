const express = require("express");
const app = express();

const colors = ["🟢", "🔵", "🟤", "🟡", "🟢", "🌸"]; // Color cycle
let colorIndex = 0;

app.get("/", (req, res) => {
    // Cycle through colors every request
    const statusColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;

    res.json({
        status: `${statusColor} Online`,
        message: "API is working well.",
        services: {
            insta_video_download: "/insta - To download Instagram video",
            web_screenshot: "/ss - To get a screenshot of a website",
        },
        coded_by: "@OGGY_WORKSHOP"
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
