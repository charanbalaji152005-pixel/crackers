import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import { getCategory } from '../data/products.js';

export default function ProductCard({ product, qty, onSetQty }) {
  const [imageFailed, setImageFailed] = useState(false);
  const inList = qty > 0;

  return (
    <article className={`product-card ${inList ? 'in-list' : ''}`}>
      <div className="product-img">
        {imageFailed ? (
          <div className="img-fallback" aria-hidden="true">{product.name.charAt(0)}</div>
        ) : (
          <img src={product.image} alt={product.name} loading="lazy" onError={() => setImageFailed(true)} />
        )}
        <span className="product-tag">{getCategory(product.category).name}</span>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p className="price">{product.price ? `₹${product.price}` : 'Price on request'}</p>
        {inList ? (
          <div className="qty" role="group" aria-label={`Quantity for ${product.name}`}>
            <button onClick={() => onSetQty(product.id, qty - 1)} aria-label="Decrease quantity"><Minus size={14} /></button>
            <span aria-live="polite">{qty}</span>
            <button onClick={() => onSetQty(product.id, qty + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
          </div>
        ) : (
          <button className="add-btn" onClick={() => onSetQty(product.id, 1)}>
            <Plus size={15} /> Add to list
          </button>
        )}
        {inList && <span className="in-list-note"><Check size={13} /> In your list</span>}
      </div>
    </article>
  );
}
