'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${scrolled ? 'shadow-sm' : ''}`} style={{background:'#ffffff',borderBottom:'0.5px solid #e5e5e5'}}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="#top" className="flex items-center gap-2.5">
          <Image src="/images/logo-arrow.png" alt="logo" width={56} height={28} className="object-contain" />
          <span className="font-display font-bold text-sm tracking-wide uppercase">Hinonga o Tutuki</span>
        </Link>
        <a href="#contact" className="px-4 py-2 text-white text-sm font-body rounded-full transition-colors" style={{background:'#2d8a4e'}}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}
