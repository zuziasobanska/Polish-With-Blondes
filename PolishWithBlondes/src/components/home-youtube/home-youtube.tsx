import './home-youtube.scss';
import { YoutubeVideos } from '../youtube-video/youtube';

export const HomeYoutube = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="title-container">
          <p>Latest content</p>
          <hr className="line"></hr>
        </div>
        <div className="content-container yt">
          <YoutubeVideos />
        </div>
      </div>
    </div>
  );
};
