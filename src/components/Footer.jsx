import './Footer.css'

export default function Footer() {
  return (
    <footer className="sky-footer light-section">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Sky</div>
          <p>Your personal AI that actually knows you.<br />Lives in WhatsApp. Gets better every day.</p>
          <a href="https://thisissky.ai/start" className="btn-wa footer-cta">
            Say hello to Sky
          </a>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-head">Product</div>
            <a href="#how">How it works</a>
            <a href="#brief">Morning brief</a>
            <a href="#people">Your people</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Company</div>
            <a href="https://skymem.io" target="_blank" rel="noopener noreferrer">skyMem (the tech)</a>
            <a href="mailto:hello@skymem.ai">Contact</a>
            <a href="https://github.com/HopiumLab/skymem-io" target="_blank" rel="noopener noreferrer">Open source</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2025 skyMem · thisissky.ai</span>
          <span>Built on the skyMem cognition stack</span>
        </div>
      </div>
    </footer>
  )
}
