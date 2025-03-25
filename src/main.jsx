

import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Portfolio from './Portfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectsPage from './Components/Projects'
import TechStackPage from './Components/SkillsSection'
import AboutPage from './Components/AboutMe'
import ContactPage from './Components/Contact'

const App = () => {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/ProjectsPage" element={<ProjectsPage />} />
            <Route path="/TechStackPage" element={<TechStackPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
