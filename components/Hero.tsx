'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const images = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg',
  '/images/hero-6.jpg',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), []);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section id="top" className="pt-14">
      <div className="w-full py-16 px-6 text-center" style={{background:'linear-gradient(135deg,#a8dbb8 0%,#5cb87a 50%,#a8dbb8 100%)'}}>
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-black tracking-tight uppercase leading-none mb-4">
          Hinonga o Tutuki
        </h1>
        <p className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white tracking-tight uppercase leading-none">
          Advisory
        </p>
      </div>

      <div className="py-10 px-6" style={{background:'#ffffff'}}>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col md:flex-row">
          {/* Mobile: image on top, desktop: image on right */}
          <div
            className="relative overflow-hidden md:hidden"
            style={{height:'220px'}}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {images.map((src, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
                <Image src={src} alt="" fill className="object-cover" sizes="100vw" />
              </div>
            ))}
            <button onClick={prev} aria-label="Previous" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.35)'}}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.35)'}}>
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 flex items-center px-8 py-8 md:px-10">
            <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed max-w-xs">
              End-to-end delivery of sensitive qualitative research projects. Social research expertise enhanced by skillful project management.
            </p>
          </div>

          {/* Desktop image right */}
          <div
            className="hidden md:block flex-1 relative min-h-[300px] overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {images.map((src, i) => (
              <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}>
                <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
              </div>
            ))}
            <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.35)'}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 2L4 7L9 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center" style={{background:'rgba(0,0,0,0.35)'}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 2L10 7L5 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? 'bg-white scale-125' : 'bg-white/50'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
