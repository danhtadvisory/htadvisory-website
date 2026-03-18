'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <div className="text-center py-20 px-6" style={{background:'#000',color:'#fff'}}>
        <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-4">Get in Touch Today</h2>
        <p className="font-body text-base max-w-md mx-auto leading-relaxed" style={{color:'rgba(255,255,255,0.6)'}}>
          Reach out to us today to discuss how our qualitative research services can benefit your organization.
        </p>
      </div>

      <div className="px-6 py-12" style={{background:'linear-gradient(135deg,#a8dbb8 0%,#5cb87a 40%,#a8dbb8 100%)'}}>
        <div className="max-w-xl mx-auto rounded-2xl p-8 md:p-12" style={{background:'#ffffff'}}>
          <h3 className="font-display font-black text-2xl uppercase mb-8" style={{color:'#111'}}>Contact Us</h3>
          {submitted ? (
            <p className="font-body text-base" style={{color:'#2d8a4e'}}>Thanks! We&apos;ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-body text-sm mb-1" style={{color:'#888'}}>First name</label>
                  <input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})}
                    className="w-full font-body text-base pb-2" style={{borderBottom:'0.5px solid #ccc',outline:'none',background:'transparent',color:'#111'}} placeholder="First name" />
                </div>
                <div>
                  <label className="block font-body text-sm mb-1" style={{color:'#888'}}>Last name</label>
                  <input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})}
                    className="w-full font-body text-base pb-2" style={{borderBottom:'0.5px solid #ccc',outline:'none',background:'transparent',color:'#111'}} placeholder="Last name" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block font-body text-sm mb-1" style={{color:'#888'}}>Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full font-body text-base pb-2" style={{borderBottom:'0.5px solid #ccc',outline:'none',background:'transparent',color:'#111'}} placeholder="Email" />
                </div>
                <div>
                  <label className="block font-body text-sm mb-1" style={{color:'#888'}}>Phone</label>
                  <input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full font-body text-base pb-2" style={{borderBottom:'0.5px solid #ccc',outline:'none',background:'transparent',color:'#111'}} placeholder="Phone" />
                </div>
              </div>
              <div className="mb-8">
                <label className="block font-body text-sm mb-1" style={{color:'#888'}}>Message *</label>
                <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full font-body text-base pb-2 resize-none" rows={3}
                  style={{borderBottom:'0.5px solid #ccc',outline:'none',background:'transparent',color:'#111'}} placeholder="Message" />
              </div>
              <button type="submit" className="font-body text-base px-8 py-3 rounded-full transition-colors"
                style={{border:'1px solid #111',background:'transparent',color:'#111',cursor:'pointer'}}>
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
