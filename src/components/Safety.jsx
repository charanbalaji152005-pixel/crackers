import { Flame } from 'lucide-react';
import { safetyTips } from '../data/content.js';

export default function Safety() {
  return (
    <section className="section section-dark" id="safety">
      <div className="container safety-grid">
        <div>
          <p className="eyebrow light">Celebrate safely</p>
          <h2>Safety first, always.</h2>
          <p className="safety-sub">Fireworks are fun when handled with care. Please follow these simple rules for you, your family and your neighbours.</p>
        </div>
        <ul className="safety-list">
          {safetyTips.map((tip) => (
            <li key={tip}><span className="safety-icon"><Flame size={16} /></span>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
