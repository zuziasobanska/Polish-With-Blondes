import { InfoCard } from './InfoCard/InfoCard';
import './InfoSection.scss';

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
            icon="src/assets/conv-icon.svg"
            newWindow={false}
            redirect='/lessons'
          />
          <InfoCard
            title="Worksheets"
            description="Ready to download, some available for free! and blab blabla"
            icon="src/assets/worksheet-icon.svg"
                                    redirect='https://buymeacoffee.com/polishwithblnds/extras'
            newWindow={true}

          />
          <InfoCard
            title="General Polish lessons"
            description="Finally understand Polish grammar! blabla blabla"
            icon="src/assets/grammar-icon.svg"
                        redirect='/lessons'
            newWindow={false}

          />
          <InfoCard
            title="Podcast"
            description="Listen and learn on the go and blabla blablablabla blabla "
            icon="src/assets/podcast-icon.svg"
                        redirect='https://www.youtube.com/@polishwithblondes/podcasts'
            newWindow={true}
          />
        </div>
      </div>
    </div>
  );
};
