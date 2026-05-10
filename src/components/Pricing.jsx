import './Pricing.css'

export default function Pricing() {
  return (
    <section className="note" id="note" aria-labelledby="note-title">
      <div className="container">
        <div className="note-inner reveal">
          <p className="eyebrow">A note from us</p>
          <h2 id="note-title">
            I built her because every other assistant felt like a <em>help desk.</em>
          </h2>
          <p>
            They didn't remember me. They didn't have opinions. They missed the things I forgot.
            Impressive in a demo and useless in practice.
          </p>
          <p>
            Sky is different because she has lived alongside me for months, through client work,
            through cash crunches, through bad weeks and good ones. She knows the people in my life.
            She knows my taste. She caught more than one thing I would have dropped.
          </p>
          <p>
            Now she can be yours. We're letting people in slowly. Drop your email below, tell us
            a sentence about who you are, and we'll reach out when there's a seat.
          </p>
          <div className="signature">
            Ross
            <small>Founder · Real Talk Holdings</small>
          </div>
        </div>
      </div>
    </section>
  )
}
