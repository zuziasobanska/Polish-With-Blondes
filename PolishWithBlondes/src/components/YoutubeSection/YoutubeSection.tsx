import { YoutubeList } from '../YoutubeList/YoutubeList';
import './YoutubeSection.scss';

export const YoutubeSection = () => {
  return (
    <div className="youtube-outer-container">
      <div className="container">
        <div className="title-container">
          <p>Latest content</p>
          <hr className="line"></hr>
        </div>
        <div className="content-container">
          <YoutubeList />
        </div>
      </div>
    </div>
  );
};
