import './YoutubeSection.scss';
import { YoutubeList } from '../YoutubeList/YoutubeList';

export const YoutubeSection = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <div className="title-container">
          <p>Latest content</p>
          <hr className="line"></hr>
        </div>
        <div className="content-container yt">
          <YoutubeList />
        </div>
      </div>
    </div>
  );
};
