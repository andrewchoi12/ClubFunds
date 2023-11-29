import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Home from './components/Home.js';
import AddClub from './components/AddClub.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addclub" element={<AddClub />} />
      </Routes>
    </Router>
  );
}

export default App;
