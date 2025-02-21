import { InfoCard } from './InfoCard/InfoCard';
import './InfoSection.scss';
import GrammarIcon from '../../assets/grammar-icon.svg';
import worksheetIcon from '../../assets/worksheet-icon.svg';
import podcastIcon from '../../assets/podcast-icon.svg';
import convIcon from '../../assets/conv-icon.svg';

export const InfoSection = () => {
  return (
    <div className="info-outer-container">
      <div className="container">
        <div className="title">
          <p>How can we help you?</p>
          <hr className="line"></hr>
        </div>
        <div className="content-container">
          <InfoCard
            title="Conversation classes"
            description="Boost your confidence in speaking Polish blabla blabla"
            icon={convIcon}
            newWindow={false}
            redirect="/lessons"
          />
          <InfoCard
            title="Worksheets"
            description="Ready to download, some available for free! and blab blabla"
            icon={worksheetIcon}
            redirect="https://buymeacoffee.com/polishwithblnds/extras"
            newWindow={true}
          />
          <InfoCard
            title="General Polish lessons"
            description="Finally understand Polish grammar! blabla blabla"
            icon={GrammarIcon}
            redirect="/lessons"
            newWindow={false}
          />
          <InfoCard
            title="Podcast"
            description="Listen and learn on the go and blabla blablablabla blabla "
            icon={podcastIcon}
            redirect="https://www.youtube.com/@polishwithblondes/podcasts"
            newWindow={true}
          />
        </div>
      </div>
    </div>
  );
};
