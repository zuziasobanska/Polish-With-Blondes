import { InfoCard } from './info-card/info-card';
import './home-info.scss';

export const HomeInfo = () => {
  return (
    <div className="info-outer-container">
      <div className="info-container">
        <div className="info-title-container">
          <p>How can we help you?</p>
          <hr className="line"></hr>
        </div>
        <div className="info-content-container">
          <InfoCard
            title="Conversation classes"
            description="Boost your confidence in speaking Polish blabla blabla"
            icon="src/assets/conv-icon.svg"
          />
          <InfoCard
            title="Worksheets"
            description="Ready to download, some available for free! and blab blabla"
            icon="src/assets/worksheet-icon.svg"
          />
          <InfoCard
            title="General Polish lessons"
            description="Finally understand Polish grammar! blabla blabla"
            icon="src/assets/grammar-icon.svg"
          />
          <InfoCard
            title="Podcasts"
            description="Listen and learn on the go and blabla blablablabla blabla "
            icon="src/assets/podcast-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};
