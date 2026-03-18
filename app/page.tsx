import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Info from '@/components/Info';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Info />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
