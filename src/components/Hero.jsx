import { ArrowRight, MessageCircle } from 'lucide-react';
import { shop } from '../data/content.js';

export default function Hero() {
  const whatsapp = `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent('Hi SIVAKASI Crackers, I would like to know more about your Diwali range.')}`;

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Festive crackers · Sky lanterns · Gift hampers</p>
          <h1>Light up every <span>celebration.</span></h1>
          <p className="hero-sub">
            From classic crackers and sky lanterns to glowing lights and gift hampers, find everything for Diwali and your family's favourite nights.
          </p>
          <div className="hero-actions">
            <a href="#shop" className="btn btn-gold">Shop the range <ArrowRight size={16} /></a>
            <a href={whatsapp} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <MessageCircle size={16} /> Enquire on WhatsApp
            </a>
          </div>
          <dl className="hero-stats">
            <div><dt>70+</dt><dd>products</dd></div>
            <div><dt>5</dt><dd>categories</dd></div>
            <div><dt>Bulk</dt><dd>orders welcome</dd></div>
          </dl>
        </div>
        <div className="hero-art">
          <div className="hero-frame">
            <img src="/images/15.jpg" alt="Festive Diwali hamper with sweets, dry fruits and diyas" />
          </div>
          <div className="hero-badge">
            <strong>Diwali<br />Special</strong>
            <span>Bulk offers open</span>
          </div>
        </div>
      </div>
    </section>
  );
}
