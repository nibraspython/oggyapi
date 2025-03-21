let statuses = ["Running", "Walking", "Live", "Working", "Active", "Online"];

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  // Select a random status based on the current time
  let currentStatus = statuses[Math.floor(Date.now() / 3000) % statuses.length];

  res.status(200).json({ 
    status: `🟢 ${currentStatus}`,  // Status updates every 3 seconds
    message: "API is working well.", 
    services: {
      insta_video_download: "/insta - To download Instagram video",
      web_screenshot: "/ss - To get a screenshot of a website"
    },
    coded_by: "@OGGY_WORKSHOP"
  });
}
