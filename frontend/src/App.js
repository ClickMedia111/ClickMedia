import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Videos from './pages/Videos';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
