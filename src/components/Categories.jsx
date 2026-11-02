import { ArrowRight } from 'lucide-react';
import { categories } from '../data/products.js';

export default function Categories({ onSelect }) {
  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Shop by category</p>
          <h2>Something for every celebration</h2>
        </div>
        <div className="category-grid">
          {categories.map((c) => (
            <button key={c.slug} className="category-card" onClick={() => onSelect(c.slug)}>
              <div className="category-img">
                <img src={c.cover} alt="" loading="lazy" />
              </div>
              <div className="category-body">
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
                <span className="link-text">Browse <ArrowRight size={14} /></span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
