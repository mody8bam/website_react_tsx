import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import styles from './index.css'
import Header from './components/Header.tsx'
import Description from './components/Description.tsx'
import Footer from './components/Footer.tsx'
import About from './pages/about.tsx'
import { Link } from 'react-router-dom'
import Home from './pages/Home.tsx'








function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App