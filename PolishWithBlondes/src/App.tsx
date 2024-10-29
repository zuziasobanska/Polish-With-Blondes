import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/hero';

import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
