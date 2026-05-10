import { motion } from 'framer-motion'
import './MorningBrief.css'

const BRIEF_MESSAGES = [
  {
    type: 'greeting',
    text: 'Good morning. Here\'s what I\'m watching for you today.',
  },
  {
    type: 'urgent',
    icon: '🔴',
    label: 'Urgent',
    title: 'Anya\'s term sheet expires Friday',
    detail: 'You said her offer was the most generous. This is the one to close.',
    source: 'tracked 18 days',
  },
  {
    type: 'attention',
    icon: '👤',
    label: 'Attention',
    title: 'Marie demo in 48 hours',
    detail: 'She\'s been responsive. Trajectory is rising. Deck is ready.',
    source: 'confirmed 3 weeks ago',
  },
  {
    type: 'nudge',
    icon: '📞',
    label: 'Nudge',
    title: 'David — 11 days since last contact',
    detail: 'You mentioned you\'d follow up. He hasn\'t heard from you.',
    source: 'you flagged this',
  },
  {
    type: 'rising',
    icon: '↗',
    label: 'Rising',
    title: 'Carol\'s engagement up 0.04 over 30 days',
    detail: 'She\'s been opening your messages faster. Might be worth a touch.',
    source: 'trajectory signal',
  },
]

export default function MorningBrief() {
  return (
    <section className="brief-section">
      <div className="brief-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="brief-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brief-eyebrow">Every morning, unprompted</div>
          <h2>You wake up.<br />Sky's already been working.</h2>
          <p className="brief-lede">
            Before you've had coffee, Sky has reviewed your network,
            your commitments, your open threads. And it tells you what matters —
            in plain language, with no noise.
          </p>
        </motion.div>

        <motion.div
          className="brief-phone"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="brief-phone-inner">
            <div className="brief-wa-header">
              <div className="brief-avatar">S</div>
              <div className="brief-header-info">
                <div className="brief-name">Sky</div>
                <div className="brief-status">
                  <span className="brief-status-dot" />
                  Morning brief · 7:02 AM
                </div>
              </div>
            </div>
            <div className="brief-messages">
              {BRIEF_MESSAGES.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`brief-msg ${msg.type}`}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {msg.type === 'greeting' ? (
                    <p className="brief-greeting">{msg.text}</p>
                  ) : (
                    <>
                      <div className="brief-msg-top">
                        <span className="brief-icon">{msg.icon}</span>
                        <span className={`brief-label label-${msg.type}`}>{msg.label}</span>
                        <span className="brief-source">{msg.source}</span>
                      </div>
                      <div className="brief-title">{msg.title}</div>
                      <div className="brief-detail">{msg.detail}</div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          className="brief-caption"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          This isn't a summary of your calendar. It's Sky reading your relationships
          and telling you where to focus. Every morning, automatically.
        </motion.p>
      </div>
    </section>
  )
}
