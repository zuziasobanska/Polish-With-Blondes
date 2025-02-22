import { InfoSection } from '../components/InfoSection/InfoSection';
import { YoutubeSection } from '../components/YoutubeSection/YoutubeSection';
import { NewsletterSection } from '../components/NewsletterSection/NewsletterSection';
import { Hero } from '../components/hero/HeroComponent';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <YoutubeSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
