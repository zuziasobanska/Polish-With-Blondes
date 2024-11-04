import './youtube.scss';
import { useEffect, useState } from 'react';

interface Video {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export const YoutubeVideos = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=UUlGR6kVvAznpGs_50QlosLQ&key=AIzaSyBaooWVq4y1lsyNk9lLXNt9-ZZG1MjMEXE'
    )
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="youtube-videos">
      {videos.map((video, index) =>
        index < 2 ? (
          <div key={video.id} className="video-card">
            <a
              href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
              <div className="video-thumbnail-container">
                <img
                  className="youtube-icon"
                  src="src/assets/youtube-icon.svg"
                />
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="video-thumbnail"
                />
              </div>
              <h3 className="video-title">{video.snippet.title}</h3>
            </a>
          </div>
        ) : null
      )}
    </div>
  );
};
