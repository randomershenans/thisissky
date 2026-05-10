import { useEffect } from 'react'
import Hero from './components/Hero'
import Memory from './components/Memory'
import MorningBrief from './components/MorningBrief'
import People from './components/People'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './App.css'

function Nav() {
  return (
    <header className="container">
      <nav className="nav" aria-label="primary">
        <a href="/" className="brand" aria-label="Sky home">
          Sky<span className="brand-dot" aria-hidden="true" />
        </a>
        <div className="nav-links">
          <a href="#what">What she does</a>
          <a href="#day">A day with her</a>
          <a href="#note">Note from us</a>
        </div>
        <a href="#waitlist" className="nav-cta">Get on the list</a>
      </nav>
    </header>
  )
}

export default function App() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    targets.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="top-rule" aria-hidden="true" />
      <Nav />
      <Hero />
      <div className="section-rule" aria-hidden="true" />
      <Memory />
      <MorningBrief />
      <People />
      <Pricing />
      <Footer />
    </>
  )
}
