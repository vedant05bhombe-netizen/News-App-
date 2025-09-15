import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About.jsx'
import News from './News.jsx'
import Rear from './Rear.jsx'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/search" element={<Rear/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

