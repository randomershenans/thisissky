import { useState } from 'react'
import './Footer.css'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setDone(true)
  }

  return (
    <>
      <section className="waitlist container" id="waitlist" aria-labelledby="wl-title">
        <div className="wl-inner reveal">
          <p className="eyebrow">Get on the list</p>
          <h2 id="wl-title">It's a small list. We like it that way.</h2>
          <p>No drip emails. No theatrics. We message you when there's a seat.</p>
          {done ? (
            <p className="wl-done">You're on the list. We'll be in touch.</p>
          ) : (
            <form className="signup" onSubmit={handleSubmit} noValidate aria-label="Join the waitlist">
              <input
                id="wl-email"
                type="email"
                placeholder="your.address@whatever.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              <button type="submit">
                Join
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}
          <p className="wl-note">We'll never share your address. We'll email you once or twice, when it's your turn, and to say hi when she launches.</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">Sky · thisissky.ai</div>
          <div className="footer-links">
            <a href="#note">Manifesto</a>
            <a href="https://x.com/thisissky_ai" rel="noopener">X</a>
            <a href="mailto:hi@thisissky.ai">hi@thisissky.ai</a>
          </div>
          <div>© 2026 Real Talk Holdings</div>
        </div>
      </footer>
    </>
  )
}
