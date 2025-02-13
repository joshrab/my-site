import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header.jsx';
import AboutPage from './pages/About/AboutPage';
import ProjectPage from './pages/Projects/ProjectPage.jsx'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
    </Router>
  );
}

export default App;
