import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/footer';
import { BackToTop } from './components/BackToTop/BackToTop';
import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import BookALesson from './pages/BookALesson';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/lessons" element={<BookALesson />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
