import './People.css'

const CARDS = [
  {
    num: '01 / Operator',
    title: <>She <em>does</em> things.</>,
    body: 'Drafts emails. Books meetings. Chases follow-ups. Researches contacts. Sends messages. Tell her what you want. She acts.',
  },
  {
    num: '02 / Sentinel',
    title: <>She <em>notices</em> things.</>,
    body: 'Stale follow-ups. Approaching deadlines. Runway shifts. Patterns you would never catch yourself. She tells you before you think to ask.',
  },
  {
    num: '03 / Orchestrator',
    title: <>She <em>delegates</em>.</>,
    body: 'Sky runs a small team behind the scenes: design, code, research, writing, deals. When the work is bigger than one reply, she hands it off and brings the answer back.',
  },
]

export default function People() {
  return (
    <section className="does container" id="what" aria-labelledby="does-title">
      <div className="does-intro reveal">
        <p className="eyebrow">What she does</p>
        <h2 id="does-title">
          Three jobs. <em>Really</em> well.
        </h2>
      </div>
      <div className="does-grid reveal">
        {CARDS.map((c, i) => (
          <article key={i} className="does-card">
            <div className="does-num">{c.num}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
