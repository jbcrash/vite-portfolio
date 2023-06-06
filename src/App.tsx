import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogoTitle from './components/LogoTitle'
import SideNav from './components/SideNav'
import SocialLinkComponent from './components/SocialLinkComponent.tsx'
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Music from './pages/Music';

const App: React.FunctionComponent = () => {
  return (
    <>
      <SocialLinkComponent />

      <Router>
        <LogoTitle />
        <SideNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/music' element={<Music />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
