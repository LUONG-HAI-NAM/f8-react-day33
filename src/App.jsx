import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'

const App = () => {
  return (
    <div className="app-wrapper">
      {/* Header stays outside Routes so it doesn't re-render when route changes */}
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
