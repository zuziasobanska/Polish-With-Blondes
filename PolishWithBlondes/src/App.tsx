import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/footer';
import { BackToTop } from './components/BackToTop/BackToTop';
import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
