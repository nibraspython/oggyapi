let statuses = ["Running", "Walking", "Live", "Working", "Active", "Online"];
let currentStatus = statuses[0]; // Default status

// Update status every 3 seconds
setInterval(() => {
  currentStatus = statuses[Math.floor(Math.random() * statuses.length)];
}, 3000);

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({ 
    status: `🟢 ${currentStatus}`,  // Auto-updating status
    message: "API is working well.", 
    services: {
      insta_video_download: "/insta - To download Instagram video",
      web_screenshot: "/ss - To get a screenshot of a website"
    },
    coded_by: "@OGGY_WORKSHOP"
  });
}
