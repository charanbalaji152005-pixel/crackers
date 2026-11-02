import { useCallback, useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Categories from './components/Categories.jsx';
import Catalog from './components/Catalog.jsx';
import EnquiryDrawer from './components/EnquiryDrawer.jsx';
import HowToOrder from './components/HowToOrder.jsx';
import Safety from './components/Safety.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const LIST_KEY = 'sivakasi-enquiry-list';

function readQuantities() {
  try {
    const value = JSON.parse(window.localStorage.getItem(LIST_KEY));
    return value && typeof value === 'object' ? value : {};
  } catch {
    return {};
  }
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [quantities, setQuantities] = useState(readQuantities);
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useEffect(() => {
    try {
      window.localStorage.setItem(LIST_KEY, JSON.stringify(quantities));
    } catch {
      /* storage may be blocked; the list still works for this visit */
    }
  }, [quantities]);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2400);
  }, []);

  const setQty = useCallback((id, qty) => {
    const next = Math.max(0, Math.min(99, qty));
    setQuantities((current) => {
      const updated = { ...current };
      if (next === 0) delete updated[id];
      else updated[id] = next;
      return updated;
    });
    if (qty === 1 && !quantities[id]) notify('Added to your enquiry list');
  }, [notify, quantities]);

  const clearList = () => {
    setQuantities({});
    notify('Your list has been cleared');
  };

  const listCount = Object.values(quantities).reduce((sum, q) => sum + q, 0);

  const selectCategory = (slug) => {
    setActiveCategory(slug);
    setQuery('');
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} listCount={listCount} onOpenList={() => setListOpen(true)} />

      <main>
        <Hero />
        <TrustStrip />
        <Categories onSelect={selectCategory} />
        <Catalog
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          query={query}
          setQuery={setQuery}
          quantities={quantities}
          onSetQty={setQty}
        />
        <HowToOrder />
        <Safety />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <EnquiryDrawer
        open={listOpen}
        onClose={() => setListOpen(false)}
        quantities={quantities}
        onSetQty={setQty}
        onClear={clearList}
      />

      {toast && (
        <div className="toast" role="status" aria-live="polite"><Check size={16} /> {toast}</div>
      )}
    </div>
  );
}
