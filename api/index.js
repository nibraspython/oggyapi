export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ 
    status: "🟢 Online",
    message: "API is working well.", 
    services: {
      insta_video_download: "/insta - To download Instagram video",
      web_screenshot: "/ss - To get a screenshot of a website"
    },
    coded_by: "@OGGY_WORKSHOP"
  });
}
