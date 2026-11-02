import { useEffect } from 'react';
import { Minus, Plus, Send, Trash2, X } from 'lucide-react';
import { shop } from '../data/content.js';
import { getProduct } from '../data/products.js';

export default function EnquiryDrawer({ open, onClose, quantities, onSetQty, onClear }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const items = Object.entries(quantities)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ product: getProduct(id), qty }))
    .filter((item) => item.product);

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);

  const message = [
    `Hi ${shop.name}, I'd like to enquire about these items:`,
    ...items.map((item) => `• ${item.product.name} × ${item.qty}`),
    '',
    'Please confirm availability, pricing and delivery.',
  ].join('\n');

  const whatsappUrl = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <div className={`drawer-backdrop ${open ? 'show' : ''}`} onClick={onClose} aria-hidden="true" />
      <aside className={`drawer ${open ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-hidden={!open}>
        <div className="drawer-head">
          <h2 id="drawer-title">My enquiry list</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close enquiry list"><X size={20} /></button>
        </div>

        {items.length === 0 ? (
          <div className="drawer-empty">
            <p>Your list is empty.</p>
            <p className="muted">Add products from the shop and they will appear here.</p>
            <a href="#shop" className="btn btn-dark" onClick={onClose}>Browse products</a>
          </div>
        ) : (
          <>
            <ul className="drawer-items">
              {items.map(({ product, qty }) => (
                <li key={product.id}>
                  <img src={product.image} alt="" />
                  <div className="drawer-item-info">
                    <strong>{product.name}</strong>
                    <small>{product.price ? `₹${product.price}` : 'Price on request'}</small>
                    <div className="qty small">
                      <button onClick={() => onSetQty(product.id, qty - 1)} aria-label={`Decrease ${product.name}`}><Minus size={12} /></button>
                      <span>{qty}</span>
                      <button onClick={() => onSetQty(product.id, qty + 1)} aria-label={`Increase ${product.name}`}><Plus size={12} /></button>
                    </div>
                  </div>
                  <button className="icon-btn" onClick={() => onSetQty(product.id, 0)} aria-label={`Remove ${product.name}`}><Trash2 size={16} /></button>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <p className="drawer-total">{items.length} products · {totalItems} items</p>
              <a className="btn btn-gold btn-block" href={whatsappUrl} target="_blank" rel="noreferrer">
                <Send size={16} /> Send enquiry on WhatsApp
              </a>
              <button className="link-btn" onClick={onClear}>Clear list</button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
