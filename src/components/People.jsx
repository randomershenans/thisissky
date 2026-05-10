import { useState } from 'react'
import { motion } from 'framer-motion'
import './People.css'

const PEOPLE = [
  {
    name: 'Anya',
    role: 'Investor · lead',
    refs: 14,
    span: '18d',
    conf: 0.91,
    trajectory: '+0.06',
    trend: 'rising',
    status: 'champion',
    color: '#7C3AED',
    facts: ['Preferred term sheet', 'Q3 budget confirmed', 'Responsive to async'],
  },
  {
    name: 'Marie',
    role: 'Enterprise · champion',
    refs: 9,
    span: '21d',
    conf: 0.87,
    trajectory: '+0.04',
    trend: 'rising',
    status: 'warm',
    color: '#25D366',
    facts: ['Demo confirmed 25th', 'Decision maker', 'Uses Slack'],
  },
  {
    name: 'David',
    role: 'Customer · at risk',
    refs: 3,
    span: '11d',
    conf: 0.62,
    trajectory: '-0.03',
    trend: 'falling',
    status: 'quiet',
    color: '#D97706',
    facts: ['11 days silent', 'Said he\'d decide by EOM', 'Prefers calls'],
  },
  {
    name: 'Carol',
    role: 'Partner · warm',
    refs: 6,
    span: '30d',
    conf: 0.74,
    trajectory: '+0.04',
    trend: 'rising',
    status: 'rising',
    color: '#0EA5E9',
    facts: ['Opening messages faster', 'Asked about roadmap', 'Intro\'d 2 people'],
  },
]

export default function People() {
  const [active, setActive] = useState(0)
  const person = PEOPLE[active]

  return (
    <section className="people-section light-section">
      <div className="container">
        <motion.div
          className="people-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="people-eyebrow">Your network, alive</div>
          <h2>The people in your life<br />get smarter over time.</h2>
          <p className="people-lede">
            Every person you mention gets scored. Sky tracks their references,
            their trajectory, their relationship to your goals. The more you talk,
            the sharper the picture.
          </p>
        </motion.div>

        <div className="people-grid">
          <div className="people-list">
            {PEOPLE.map((p, i) => (
              <motion.button
                key={p.name}
                className={`person-card ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <div className="person-avatar" style={{ background: p.color }}>
                  {p.name[0]}
                </div>
                <div className="person-info">
                  <div className="person-name">{p.name}</div>
                  <div className="person-role">{p.role}</div>
                </div>
                <div className={`person-trend ${p.trend}`}>
                  {p.trend === 'rising' ? '↗' : '↘'}
                  {p.trajectory}
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="person-detail"
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pd-header">
              <div className="pd-avatar" style={{ background: person.color }}>
                {person.name[0]}
              </div>
              <div>
                <div className="pd-name">{person.name}</div>
                <div className="pd-role">{person.role}</div>
              </div>
              <div className={`pd-status ${person.status}`}>{person.status}</div>
            </div>

            <div className="pd-stats">
              <div className="pd-stat">
                <span className="pd-stat-val">{person.refs}</span>
                <span className="pd-stat-label">references</span>
              </div>
              <div className="pd-stat">
                <span className="pd-stat-val">{person.span}</span>
                <span className="pd-stat-label">span</span>
              </div>
              <div className="pd-stat">
                <span className="pd-stat-val">{person.conf}</span>
                <span className="pd-stat-label">confidence</span>
              </div>
              <div className="pd-stat">
                <span className={`pd-stat-val ${person.trend}`}>{person.trajectory}</span>
                <span className="pd-stat-label">30d trajectory</span>
              </div>
            </div>

            <div className="pd-conf-bar">
              <div className="pd-conf-track">
                <motion.div
                  className="pd-conf-fill"
                  style={{ background: person.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${person.conf * 100}%` }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="pd-conf-label">confidence score</span>
            </div>

            <div className="pd-facts">
              <div className="pd-facts-label">What Sky knows</div>
              {person.facts.map((f, i) => (
                <div key={i} className="pd-fact">
                  <span className="pd-fact-dot" style={{ background: person.color }} />
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="people-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          People graduate automatically. The more Sky hears about someone,
          the richer their profile becomes — without you doing a thing.
        </motion.div>
      </div>
    </section>
  )
}
