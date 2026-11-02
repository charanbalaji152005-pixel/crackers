import { steps } from '../data/content.js';

export default function HowToOrder() {
  return (
    <section className="section" id="how-to-order">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How to order</p>
          <h2>Three simple steps</h2>
        </div>
        <ol className="steps">
          {steps.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
