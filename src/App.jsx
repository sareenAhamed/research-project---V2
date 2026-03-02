import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Results from './pages/Results';
import Team from './pages/Team';
import Publications from './pages/Publications';
import Media from './pages/Media';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Navigation Header */}
      <Header />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/results" element={<Results />} />
          <Route path="/team" element={<Team />} />
          {/* <Route path="/publications" element={<Publications />} /> */}
          <Route path="/media" element={<Media />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;