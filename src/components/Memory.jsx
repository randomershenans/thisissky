import './Memory.css'

export default function Memory() {
  return (
    <section className="shift container" aria-labelledby="shift-title">
      <div className="shift-grid reveal">
        <div className="shift-col">
          <p className="eyebrow">The shift</p>
          <h2 id="shift-title" className="shift-title">
            Most assistants don't <em>know</em> you.
          </h2>
        </div>
        <div className="shift-col shift-muted">
          <p>
            They forget the call you had with your accountant on Tuesday. They don't know your daughter's name.
            They lose what you told them about your business yesterday. Every conversation starts at zero.
          </p>
          <p>
            Sky doesn't. She remembers your contacts, your context, the friend you mentioned six weeks ago,
            the thing you said you would follow up on but haven't.
          </p>
          <p>
            She watches your runway. She catches the email you forgot to send. She has opinions
            and she'll tell you when she thinks you're about to make the wrong call.
          </p>
        </div>
      </div>
    </section>
  )
}
