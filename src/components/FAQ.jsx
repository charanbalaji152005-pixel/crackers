import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-alt" id="faq">
      <div className="container narrow">
        <div className="section-head">
          <p className="eyebrow">Questions</p>
          <h2>Frequently asked</h2>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  aria-expanded={open}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <ChevronDown size={18} />
                </button>
                <div id={`faq-answer-${i}`} className="faq-answer" hidden={!open}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
