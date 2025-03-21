let statuses = ["Running", "Walking", "Live", "Working", "Active", "Online"]; 

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  // Pick a random status text
  let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

  res.status(200).json({ 
    status: `🟢 ${randomStatus}`,  // Random status every time API is called
    message: "API is working well.", 
    services: {
      insta_video_download: "/insta - To download Instagram video",
      web_screenshot: "/ss - To get a screenshot of a website"
    },
    coded_by: "@OGGY_WORKSHOP"
  });
}
