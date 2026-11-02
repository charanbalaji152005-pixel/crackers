import { useState } from 'react';
import { MapPin, MessageCircle, Phone, Mail, Clock } from 'lucide-react';
import { shop } from '../data/content.js';

const empty = { name: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^[+\d\s-]{7,}$/.test(form.phone.trim())) {
      setError('Please enter your name and a valid phone number.');
      return;
    }
    setError('');
    // Connect this to your email service or backend.
    console.log('Enquiry:', form);
    setSent(true);
    setForm(empty);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow light">Get in touch</p>
          <h2>Bulk orders, gifts or a quick question?</h2>
          <p className="contact-sub">Tell us what you need and we will reply with availability and pricing.</p>
          <ul className="contact-info">
            <li><MapPin size={18} /> {shop.address}</li>
            <li><Phone size={18} /> {shop.phone}</li>
            <li><Mail size={18} /> {shop.email}</li>
            <li><Clock size={18} /> {shop.hours}</li>
          </ul>
          <a className="btn btn-gold" href={`https://wa.me/${shop.whatsapp}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>

        {sent ? (
          <div className="form-success" role="status">
            Thank you! We have received your enquiry and will contact you shortly.
          </div>
        ) : (
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <label>Name
              <input name="name" value={form.name} onChange={onChange} required />
            </label>
            <label>Phone
              <input name="phone" type="tel" value={form.phone} onChange={onChange} required />
            </label>
            <label>Message
              <textarea name="message" rows="4" value={form.message} onChange={onChange} placeholder="Products, quantities, delivery date…" />
            </label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button type="submit" className="btn btn-gold">Send enquiry</button>
          </form>
        )}
      </div>
    </section>
  );
}
