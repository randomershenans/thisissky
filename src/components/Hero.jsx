import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const MESSAGES = [
  { id: 1, from: 'sky', text: 'Good morning.', delay: 600 },
  { id: 2, from: 'sky', text: 'Three things on your radar today:', delay: 1600 },
  {
    id: 3, from: 'sky', type: 'card', delay: 2800,
    tag: '📋 Anya · term sheet',
    text: 'Expires Friday. You said her offer was the most generous of the three.',
    source: 'You mentioned this 18 days ago',
    urgency: 'urgent',
  },
  {
    id: 4, from: 'sky', type: 'card', delay: 4200,
    tag: '👤 Marie · demo',
    text: 'Demo in 2 days. She confirmed 3 weeks ago. Engagement has been rising since.',
    source: 'Confirmed · 21 days ago',
    urgency: 'normal',
  },
  {
    id: 5, from: 'sky', type: 'card', delay: 5600,
    tag: '📞 David',
    text: 'You said you\'d call him. Last contact was 11 days ago.',
    source: 'You mentioned this · 4 days ago',
    urgency: 'soft',
  },
  {
    id: 6, from: 'sky', text: 'I remembered all of this so you don\'t have to.', delay: 7200,
    italic: true,
  },
]

function TypingIndicator() {
  return (
    <div className="wa-typing-wrap">
      <div className="wa-avatar sky-avatar" />
      <div className="wa-bubble incoming typing-bubble">
        <span style={{ animationDelay: '0ms' }} />
        <span style={{ animationDelay: '160ms' }} />
        <span style={{ animationDelay: '320ms' }} />
      </div>
    </div>
  )
}

function ChatMessage({ msg, visible }) {
  if (!visible) return null

  if (msg.type === 'card') {
    return (
      <motion.div
        className="wa-msg-row incoming"
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="wa-avatar sky-avatar" />
        <div className={`wa-card ${msg.urgency}`}>
          <div className="wa-card-tag">{msg.tag}</div>
          <div className="wa-card-text">{msg.text}</div>
          <div className="wa-card-source">
            <span className="wa-source-dot" />
            {msg.source}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="wa-msg-row incoming"
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="wa-avatar sky-avatar" />
      <div className={`wa-bubble incoming ${msg.italic ? 'italic-bubble' : ''}`}>
        {msg.text}
        <span className="wa-time">now</span>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [visibleIds, setVisibleIds] = useState([])
  const [typingFor, setTypingFor] = useState(null)
  const [started, setStarted] = useState(false)
  const chatRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!started) return
    const timers = []

    MESSAGES.forEach((msg, i) => {
      // Show typing indicator 800ms before message arrives
      timers.push(setTimeout(() => {
        setTypingFor(msg.id)
      }, msg.delay - 800))

      timers.push(setTimeout(() => {
        setTypingFor(null)
        setVisibleIds(ids => [...ids, msg.id])
        // Scroll chat to bottom
        if (chatRef.current) {
          chatRef.current.scrollTop = chatRef.current.scrollHeight
        }
      }, msg.delay))
    })

    return () => timers.forEach(clearTimeout)
  }, [started])

  // Restart animation every 14s
  useEffect(() => {
    const id = setInterval(() => {
      setVisibleIds([])
      setTypingFor(null)
      setStarted(false)
      setTimeout(() => setStarted(true), 600)
    }, 14000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="hero-label-dot" />
            Live on WhatsApp
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            The AI that<br />
            <span className="hero-accent">actually knows you.</span>
          </motion.h1>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Sky lives in WhatsApp. Remembers everything you tell it.
            Surfaces what matters — before you even ask.
            Every conversation makes it sharper.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="https://thisissky.ai/start" className="btn-wa">
              <WaIcon />
              Say hello to Sky
            </a>
            <span className="hero-price">$25 / month · cancel anytime</span>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.72, duration: 0.5 }}
          >
            <div className="proof-item">
              <span className="proof-val">90d</span>
              <span className="proof-label">rolling memory</span>
            </div>
            <div className="proof-div" />
            <div className="proof-item">
              <span className="proof-val">0</span>
              <span className="proof-label">new apps to install</span>
            </div>
            <div className="proof-div" />
            <div className="proof-item">
              <span className="proof-val">↗</span>
              <span className="proof-label">gets sharper every day</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-phone"
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="phone-frame">
            <div className="phone-status">
              <span className="phone-time">9:07</span>
              <div className="phone-icons">
                <span>●●●</span>
                <span>WiFi</span>
                <span>🔋</span>
              </div>
            </div>
            <div className="wa-header">
              <div className="wa-avatar sky-avatar-lg" />
              <div className="wa-header-info">
                <div className="wa-header-name">Sky</div>
                <div className="wa-header-sub">your personal assistant</div>
              </div>
              <div className="wa-header-icons">⋮</div>
            </div>

            <div className="wa-chat" ref={chatRef}>
              <div className="wa-date-divider">Today</div>

              {MESSAGES.map(msg => (
                <AnimatePresence key={msg.id}>
                  {visibleIds.includes(msg.id) && (
                    <ChatMessage msg={msg} visible />
                  )}
                </AnimatePresence>
              ))}

              <AnimatePresence>
                {typingFor !== null && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <TypingIndicator />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="wa-input-bar">
              <div className="wa-input-field">Message</div>
              <button className="wa-send-btn" aria-label="Send">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  )
}
