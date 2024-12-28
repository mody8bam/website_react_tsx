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
import UseState from './pages/UseState.tsx'
import UseEffect from './pages/UseEffect.tsx'
import UseRef from './pages/UseRef.tsx'
import UseMemo from './pages/UseMemo.tsx'









function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/UseState' element={<UseState />}></Route>
        <Route path='/UseEffect' element={<UseEffect />}></Route>
        <Route path='/UseRef' element={<UseRef />}></Route>
        <Route path='/UseMemo' element={<UseMemo />}></Route>
      </Routes>
    </Router>
  );
}

export default App