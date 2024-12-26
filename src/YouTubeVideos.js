import React, { useEffect, useState } from "react";
import axios from "axios";
import "./YouTubeVideos.css"; // Tạo file CSS riêng cho responsive

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyCk7oyXQBHlv_OCKAvPcbzvl9I_BS2iw_0";
  const CHANNEL_ID = "UCtI0Hodo5o5dUb67FeUjDeA"; // ID kênh SpaceX
  const MAX_RESULTS = 6;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=${MAX_RESULTS}`
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ YouTube API:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-container">
      {videos.map((video) => (
        <div key={video.id.videoId} className="video-item">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default YouTubeVideos;
