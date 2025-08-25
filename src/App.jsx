import React, { Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/common/Navbar/Navbar'
import Footer from './components/common/Footer/Footer'
import Loading from './components/common/Loading/Loading'
import ScrollToTop from './components/common/ScrollToTop/ScrollToTop'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'

import styles from './App.module.css'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Smooth scroll behavior
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AnimatePresence mode="wait">
          <Suspense fallback={<Loading />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
