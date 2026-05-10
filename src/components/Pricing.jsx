import { motion } from 'framer-motion'
import './Pricing.css'

export default function Pricing() {
  return (
    <section className="sky-pricing">
      <div className="pricing-bg" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="pricing-inner"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pricing-left">
            <div className="pricing-eyebrow">Simple</div>
            <h2>One price.<br />One conversation.<br />Always getting better.</h2>
            <p>
              Sky doesn't charge per message or per feature. You pay once a month
              and it works — relentlessly, quietly — in the background of your life.
            </p>
            <div className="pricing-includes">
              {[
                'Morning brief, every day',
                'Unlimited conversations',
                '90-day rolling memory',
                'Your network, tracked automatically',
                'No app to install · just WhatsApp',
                'Cancels anytime',
              ].map((f, i) => (
                <div key={i} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-eyebrow">Sky · Personal</div>
            <div className="pricing-amount">
              <span className="pricing-currency">$</span>
              <span className="pricing-num">25</span>
              <span className="pricing-per">/ month</span>
            </div>
            <p className="pricing-note">
              Built on skyMem — the same cognition stack that powers enterprise AI memory.
              You get all of it, in WhatsApp.
            </p>
            <a href="https://thisissky.ai/start" className="btn-wa pricing-cta">
              <WaIcon />
              Start talking to Sky
            </a>
            <div className="pricing-trust">
              <span>No credit card to try</span>
              <span className="pt-sep">·</span>
              <span>Cancel anytime</span>
              <span className="pt-sep">·</span>
              <span>Works on WhatsApp</span>
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
