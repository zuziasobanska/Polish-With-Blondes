import { Hero } from '../components/Hero/Hero';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { YoutubeSection } from '../components/YoutubeSection/YoutubeSection';
import { NewsletterSection } from '../components/NewsletterSection/NewsletterSection';

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
