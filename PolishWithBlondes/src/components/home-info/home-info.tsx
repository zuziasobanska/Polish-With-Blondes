import { InfoCard } from './info-card/info-card';
import './home-info.scss';

export const HomeInfo = () => {
  return (
    <div className="home-info-container">
      <InfoCard
        title="Conversation classes"
        description="Boost your confidence in speaking Polish"
        icon="src/assets/conv-icon.svg"
      />
      <InfoCard
        title="Worksheets"
        description="Ready to download, some available for free!"
        icon="src/assets/worksheet-icon.svg"
      />
      <InfoCard
        title="General Polish lessons"
        description="Finally understand Polish grammar!"
        icon="src/assets/grammar-icon.svg"
      />
      <InfoCard
        title="Podcasts"
        description="Listen and learn on the go"
        icon="src/assets/podcast-icon.svg"
      />
    </div>
  );
};
