import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/hero';
import { HomeInfo } from './components/home-info/home-info';
import { HomeYoutube } from './components/home-youtube/home-youtube';

import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <HomeInfo />
      <HomeYoutube />
    </div>
  );
}

export default App;
