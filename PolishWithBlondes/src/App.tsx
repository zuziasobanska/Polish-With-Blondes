import { Navbar } from './components/Navbar/Navbar';
import { YoutubeSection } from './components/YoutubeSection/YoutubeSection';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Hero } from './components/Hero/Hero';
import { Newsletter } from './components/newsletter/Newsletter';
import { Footer } from './components/Footer/footer';
import { BackToTop } from './components/BackToTop/BackToTop';
import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <InfoSection />
      <YoutubeSection />
      <Newsletter />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
