import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MenuNav from './components/menu-nav/menu-nav';
import Sidebar from './components/side-bar/side-bar';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Projects from './pages/projects/projects';

function App() {
  return (
    <div className="app">
      <MenuNav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects" element={<Projects />} />

        </Routes>
      </BrowserRouter>
      <Sidebar />
    </div>
  );
}

export default App;
