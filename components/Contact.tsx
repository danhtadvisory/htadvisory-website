'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'db6ba58d-ef81-4588-9a9f-73a682c758eb',
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          message: form.message,
          subject: 'New enquiry from htadvisory.co.nz',
        }),
      });
      const data = await res.json();
      setStatus(data.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
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

          {status === 'success' ? (
            <div className="text-center py-8">
              <p className="font-display font-black text-2xl uppercase mb-3" style={{color:'#2d8a4e'}}>Message Sent!</p>
              <p className="font-body text-base" style={{color:'#555'}}>Thanks for reaching out — we'll be in touch soon.</p>
            </div>
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
              {status === 'error' && (
                <p className="font-body text-sm mb-4" style={{color:'#c0392b'}}>Something went wrong — please try again.</p>
              )}
              <button type="submit" disabled={status === 'sending'}
                className="font-body text-base px-8 py-3 rounded-full transition-colors"
                style={{border:'1px solid #111',background:'transparent',color:'#111',cursor:'pointer',opacity: status === 'sending' ? 0.5 : 1}}>
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
