import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const MSGS = [
  { id: 1, from: 'sky', text: 'Morning. Three things before you start.', delay: 500 },
  {
    id: 2, from: 'sky', type: 'card', delay: 1600,
    tag: 'Anya · term sheet',
    text: 'Expires Friday. You said hers was the one.',
    source: 'you mentioned this · 18 days ago',
    urgency: 'urgent',
  },
  {
    id: 3, from: 'sky', type: 'card', delay: 3000,
    tag: 'Marie · demo',
    text: '48 hours away. She confirmed 3 weeks ago. Engagement rising.',
    source: 'tracked · 21 days ago',
    urgency: 'normal',
  },
  {
    id: 4, from: 'sky', type: 'card', delay: 4400,
    tag: 'David',
    text: 'You said you\'d call. 11 days ago.',
    source: 'you flagged this · 4 days ago',
    urgency: 'soft',
  },
  { id: 5, from: 'sky', text: 'I\'ll be here when you need me.', delay: 5800, dim: true },
]

function TypingBubble() {
  return (
    <div className="h-msg-row">
      <div className="h-av" />
      <div className="h-typing">
        <span style={{ animationDelay: '0ms' }} />
        <span style={{ animationDelay: '140ms' }} />
        <span style={{ animationDelay: '280ms' }} />
      </div>
    </div>
  )
}

function HMsg({ msg }) {
  if (msg.type === 'card') {
    return (
      <div className="h-msg-row">
        <div className="h-av" />
        <div className={`h-card ${msg.urgency}`}>
          <div className="h-card-tag">{msg.tag}</div>
          <div className="h-card-body">{msg.text}</div>
          <div className="h-card-source">
            <span className="h-src-dot" />{msg.source}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="h-msg-row">
      <div className="h-av" />
      <div className={`h-bubble ${msg.dim ? 'dim' : ''}`}>
        {msg.text}
        <span className="h-time">now</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const [shown, setShown] = useState([])
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!started) return
    const timers = []
    MSGS.forEach(msg => {
      timers.push(setTimeout(() => setTyping(true), msg.delay - 700))
      timers.push(setTimeout(() => {
        setTyping(false)
        setShown(s => [...s, msg.id])
        if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
      }, msg.delay))
    })
    return () => timers.forEach(clearTimeout)
  }, [started])

  useEffect(() => {
    const id = setInterval(() => {
      setShown([]); setTyping(false); setStarted(false)
      setTimeout(() => setStarted(true), 600)
    }, 13500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-layout reveal">

        <div className="hero-copy">
          <p className="eyebrow">A personal AI assistant</p>
          <h1 id="hero-title" className="hero-title">
            The PA who<br />
            <em>actually</em> knows you.
          </h1>
          <p className="hero-sub">
            She lives in WhatsApp. Remembers everything you tell her.
            Notices the things you would miss.
          </p>
          <p className="hero-body">
            Not a chatbot. Not a help desk. Not another tab open in your browser.
            A real assistant, awake before you are, quiet when you don't need her,
            and always carrying your full context.
          </p>
          <div className="hero-actions">
            <a href="#waitlist" className="cta-primary">
              Get on the list
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#day" className="cta-quiet">See a day with her</a>
          </div>
        </div>

        <div className="hero-phone">
          <div className="phone-shell">
            <div className="phone-hdr">
              <div className="phone-av">S</div>
              <div>
                <div className="phone-name">Sky</div>
                <div className="phone-status">
                  <span className="status-dot" />online
                </div>
              </div>
            </div>
            <div className="phone-msgs" ref={scrollRef}>
              <div className="chat-date">Today</div>
              {MSGS.map(msg => shown.includes(msg.id) && (
                <div key={msg.id} className="msg-enter">
                  <HMsg msg={msg} />
                </div>
              ))}
              {typing && <TypingBubble />}
            </div>
            <div className="phone-input">
              <div className="phone-field">Message</div>
              <div className="phone-send">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none">
                  <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
      <span className="hero-meta" aria-hidden="true">thisissky.ai · v1</span>
    </section>
  )
}
