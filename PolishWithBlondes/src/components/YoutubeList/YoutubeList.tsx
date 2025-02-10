import './YoutubeList.scss';
import { useEffect, useState } from 'react';
import youtubeIcon from '../../assets/youtube-icon.svg'

interface Video {
  id: string;
  snippet: {
    resourceId: {
      videoId: string;
    };
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
}

export const YoutubeList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_KEY)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items.slice(0, 2));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="youtube-videos">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <a
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            <div className="video-thumbnail-container">
              <img className="youtube-icon" src={youtubeIcon} />
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="video-thumbnail"
              />
            </div>
            <h3 className="video-title">{video.snippet.title}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};
