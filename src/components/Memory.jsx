import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Memory.css'

const THREADS = [
  {
    date: '6 weeks ago',
    you: 'Mentioned Anya is a potential lead. Said she has a Q3 budget.',
    stored: 'persona/anya · budget/q3 · status/lead',
  },
  {
    date: '3 weeks ago',
    you: 'Said Anya\'s term sheet looks the most generous of the three.',
    stored: 'decisions/anya-preferred · conf 0.91',
  },
  {
    date: '10 days ago',
    you: 'Mentioned the term sheet expires end of month.',
    stored: 'deadline/anya-term-sheet · urgency rising',
  },
  {
    date: 'Today · 9:07am',
    you: null,
    stored: null,
    sky: 'Anya\'s term sheet expires Friday. You said her offer was the most generous.',
    isSky: true,
  },
]

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Memory() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="memory-section light-section">
      <div className="container">
        <motion.div
          className="memory-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mem-eyebrow">How Sky knows what it knows</div>
          <h2>Every conversation<br />builds the picture.</h2>
          <p className="mem-lede">
            You mentioned Anya six weeks ago. You forgot. Sky didn't.
            It wove every fragment together — so when it matters, it's ready.
          </p>
        </motion.div>

        <div className="memory-thread" ref={ref}>
          {THREADS.map((t, i) => (
            <motion.div
              key={i}
              className={`mem-event ${t.isSky ? 'mem-event-sky' : ''}`}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.12 }}
            >
              {i < THREADS.length - 1 && <div className="mem-line" />}
              <div className="mem-dot-wrap">
                <div className={`mem-dot ${t.isSky ? 'sky-dot' : ''}`} />
              </div>
              <div className="mem-content">
                <div className="mem-date">{t.date}</div>
                {t.you && (
                  <div className="mem-you">
                    <span className="mem-you-label">You said</span>
                    <span className="mem-you-text">"{t.you}"</span>
                  </div>
                )}
                {t.stored && (
                  <div className="mem-stored">
                    <span className="mem-stored-dot" />
                    <code>{t.stored}</code>
                  </div>
                )}
                {t.sky && (
                  <div className="mem-sky-msg">
                    <div className="mem-sky-avatar">S</div>
                    <div className="mem-sky-bubble">
                      {t.sky}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="memory-callout"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            Sky doesn't need you to repeat yourself. It reads the thread — across weeks,
            across conversations — and surfaces the signal at exactly the right moment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
