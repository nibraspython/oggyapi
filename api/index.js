let isAlive = true; // Initial status

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  // Toggle the status
  isAlive = !isAlive;
  const statusText = isAlive ? "🟢 Alive" : "🔴 Dead";

  res.status(200).json({ 
    status: statusText, 
    message: "API is working well.", 
    services: {
      insta_video_download: "/insta - To download Instagram video",
      web_screenshot: "/ss - To get a screenshot of a website"
    },
    coded_by: "@OGGY_WORKSHOP"
  });
}
