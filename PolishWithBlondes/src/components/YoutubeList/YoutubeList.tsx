import './YoutubeList.scss';
import { useEffect, useState } from 'react';

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
    console.log(import.meta.env.VITE_API_KEY);
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
              <img className="youtube-icon" src="src/assets/youtube-icon.svg" />
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

// Here you can find a nice trick to style a video component preserving a proper aspect ratio:

// <div class="videoWrapper">
//   <iframe width="560" height="349" src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
// </div>

// .videoWrapper {
//   position: relative;
//   padding-bottom: 56.25%; /* 16:9 */
//   height: 0;
// }
// .videoWrapper iframe {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }

// You don't have iFrame in your implementation, but you could try this anyway.

// Apply css rules from .videoWrapper above to your .video-thumbnail-container class
// and css rules from .videoWrapper iframe to your .video-thumbnail class
