import { InfoSection } from '../components/InfoSection/InfoSection';
import { YoutubeSection } from '../components/YoutubeSection/YoutubeSection';
import { NewsletterSection } from '../components/NewsletterSection/NewsletterSection';
import { Hero } from '../components/Hero/hero';

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
