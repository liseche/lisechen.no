import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;