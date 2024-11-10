import { Navbar } from './components/Navbar/Navbar';
import { YoutubeSection } from './components/YoutubeSection/YoutubeSection';
import { InfoSection } from './components/InfoSection/InfoSection';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';

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
    </div>
  );
}

export default App;
