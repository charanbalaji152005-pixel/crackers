import { useEffect } from 'react';
import { Flame, Menu, ShoppingBag, X } from 'lucide-react';
import { announcement, shop } from '../data/content.js';

const navItems = [
  { href: '#shop', label: 'Shop' },
  { href: '#categories', label: 'Categories' },
  { href: '#how-to-order', label: 'How to order' },
  { href: '#safety', label: 'Safety' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ menuOpen, setMenuOpen, listCount, onOpenList }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setMenuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <div className="announcement">{announcement}</div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={close} aria-label={`${shop.name} home`}>
            <span className="brand-mark"><Flame size={20} /></span>
            <span className="brand-text">SIVAKASI<small>Crackers</small></span>
          </a>
          <nav id="main-nav" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={close}>{item.label}</a>
            ))}
          </nav>
          <div className="header-actions">
            <button className="list-button" onClick={onOpenList} aria-label={`Open enquiry list, ${listCount} items`}>
              <ShoppingBag size={18} />
              <span className="list-label">My list</span>
              {listCount > 0 && <span className="list-count">{listCount}</span>}
            </button>
            <button
              className="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
