import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar/Navbar';
import { BackToTop } from './components/BackToTop/BackToTop';
import { Footer } from './components/Footer/Footer';
import './styles/reset.scss';
import './styles/global.scss';
import './App.scss';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import BookALesson from './pages/BookALesson/BookALesson';
import Contact from './pages/Contact/Contact';
import ThankYou from './pages/ThankYou/ThankYou';

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
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>

        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
