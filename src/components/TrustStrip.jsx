import { trust } from '../data/content.js';
import { iconMap } from './icons.js';

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Why shop with us">
      <div className="container trust-grid">
        {trust.map((t) => {
          const Icon = iconMap[t.icon];
          return (
            <div className="trust-item" key={t.title}>
              <span className="trust-icon"><Icon size={20} /></span>
              <div>
                <strong>{t.title}</strong>
                <small>{t.text}</small>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
