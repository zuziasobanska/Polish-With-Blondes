import { Home } from './pages/home/Home';
import { Navbar } from './components/navbar/Navbar';

import './styles/reset.css'; // Import your reset CSS here
import './styles/global.css'; // Import global CSS
import './App.scss';

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
