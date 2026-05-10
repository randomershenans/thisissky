import './MorningBrief.css'

export default function MorningBrief() {
  return (
    <section className="day-section" id="day" aria-labelledby="day-title">
      <div className="container">
        <div className="day-header reveal">
          <p className="eyebrow">A regular Tuesday</p>
          <h2 id="day-title">She doesn't wait to be asked.</h2>
          <p>
            06:30 AM, your phone buzzes once. Not a notification. A briefing.
            Then she stays out of your way until you need her.
          </p>
        </div>

        <div className="day-wrap reveal">

          <div className="day-phone" role="img" aria-label="Example WhatsApp conversation with Sky">
            <div className="day-phone-hdr">
              <div className="day-av">S</div>
              <div>
                <div className="day-name">Sky</div>
                <div className="day-status">online · typing...</div>
              </div>
            </div>
            <div className="day-msgs">
              <span className="day-time">Tuesday · 06:31</span>
              <div className="day-bubble from-sky">
                <strong>Tuesday — 06:30</strong>
                {'\n\n'}
                <strong>Money first.</strong>{'\n'}
                Adam's invoice still unpaid (4 days late). Two new briefs scored 80+ overnight.
                {'\n\n'}
                <strong>Today.</strong>{'\n'}
                14:00 — Pablo{'\n'}
                17:30 — Harper school pickup
                {'\n\n'}
                <strong>Heads-up.</strong>{'\n'}
                Manuel hasn't replied since Friday. Want me to send something casual?
              </div>
              <span className="day-time">06:34</span>
              <div className="day-bubble from-you">yeah send something light</div>
              <span className="day-time">06:35</span>
              <div className="day-bubble from-sky">
                On it. Keeping it casual, going to mention the IATA panel as the hook.{'\n'}
                <em>Sending in 5 unless you say no.</em>
              </div>
              <div className="day-bubble from-you">👍</div>
            </div>
          </div>

          <aside className="day-aside">
            <h4>What just happened.</h4>
            <p>
              Sky checked your calendar, your finances, your inbox, and the people you've gone quiet
              with, all before you opened your eyes.
            </p>
            <p>
              She doesn't ask permission for the things she should obviously do. She tells you,
              gives you a beat to override, then ships it.
            </p>
            <p>
              That's the difference between an assistant and a chatbot.
            </p>
          </aside>

        </div>
      </div>
    </section>
  )
}
