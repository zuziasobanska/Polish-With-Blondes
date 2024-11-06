import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { InfoSection } from './components/info-section/InfoSection';
import { YoutubeSection } from './components/youtube-section/YoutubeSection';

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
    </div>
  );
}

export default App;
