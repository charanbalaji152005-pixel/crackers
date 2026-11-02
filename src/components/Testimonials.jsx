import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Happy customers</p>
          <h2>Loved for every celebration</h2>
        </div>
        <div className="quote-grid">
          {testimonials.map((t) => (
            <figure className="quote-card" key={t.name}>
              <div className="stars" aria-label="Rated 5 out of 5">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <figcaption><strong>{t.name}</strong><small>{t.role}</small></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
