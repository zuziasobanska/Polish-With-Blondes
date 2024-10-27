import { Home } from './pages/home/Home';
import { Navbar } from './components/navbar/Navbar';

import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
