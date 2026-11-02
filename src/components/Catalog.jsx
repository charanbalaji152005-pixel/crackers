import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { categories, products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

const PAGE_SIZE = 12;

export default function Catalog({ activeCategory, setActiveCategory, query, setQuery, quantities, onSetQty }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((p) => {
      const inCat = activeCategory === 'all' || p.category === activeCategory;
      return inCat && p.name.toLowerCase().includes(term);
    });
  }, [activeCategory, query]);

  const shown = filtered.slice(0, visibleCount);

  const pick = (slug) => {
    setActiveCategory(slug);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section className="section section-alt" id="shop">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our range</p>
          <h2>Shop the collection</h2>
        </div>

        <div className="catalog-toolbar">
          <div className="filters" role="tablist" aria-label="Filter by category">
            <button role="tab" aria-selected={activeCategory === 'all'} className={activeCategory === 'all' ? 'chip active' : 'chip'} onClick={() => pick('all')}>
              All ({products.length})
            </button>
            {categories.map((c) => {
              const count = products.filter((p) => p.category === c.slug).length;
              return (
                <button
                  key={c.slug}
                  role="tab"
                  aria-selected={activeCategory === c.slug}
                  className={activeCategory === c.slug ? 'chip active' : 'chip'}
                  onClick={() => pick(c.slug)}
                >
                  {c.name} ({count})
                </button>
              );
            })}
          </div>
          <label className="search">
            <Search size={16} />
            <input
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setVisibleCount(PAGE_SIZE); }}
              placeholder="Search products…"
              aria-label="Search products"
            />
          </label>
        </div>

        <p className="result-count" aria-live="polite">Showing {shown.length} of {filtered.length} products</p>

        {filtered.length > 0 ? (
          <div className="product-grid">
            {shown.map((p) => (
              <ProductCard key={p.id} product={p} qty={quantities[p.id] || 0} onSetQty={onSetQty} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No products match your search</h3>
            <p>Try a different keyword or pick another category.</p>
            <button className="btn btn-dark" onClick={() => { setQuery(''); pick('all'); }}>Show all products</button>
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="center-action">
            <button className="btn btn-dark" onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}>
              Load more products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
