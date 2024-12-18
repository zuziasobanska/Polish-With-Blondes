import { Hero } from '../components/Hero/Hero';
import { InfoSection } from '../components/InfoSection/InfoSection';
import { YoutubeSection } from '../components/YoutubeSection/YoutubeSection';
import { Newsletter } from '../components/newsletter/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <YoutubeSection />
      <Newsletter />
    </>
  );
};

export default Home;
