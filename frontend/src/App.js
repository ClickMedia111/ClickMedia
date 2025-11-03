import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Videos from './pages/Videos';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
