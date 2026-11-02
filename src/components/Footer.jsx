import { Flame } from 'lucide-react';
import { shop } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand">
            <span className="brand-mark"><Flame size={20} /></span>
            <span className="brand-text">SIVAKASI<small>Crackers</small></span>
          </a>
          <p className="footer-tag">Light up every celebration, safely.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <a href="#shop">All products</a>
          <a href="#categories">Categories</a>
          <a href="#how-to-order">How to order</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#safety">Safety</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Contact</h4>
          <span>{shop.phone}</span>
          <span>{shop.email}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">© {new Date().getFullYear()} {shop.name}. Celebrate responsibly.</div>
      </div>
    </footer>
  );
}
