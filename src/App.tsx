import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Team from './pages/Team';
import GetInvolved from './pages/GetInvolved';
import Financial from './pages/Financial';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/team" element={<Team />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;