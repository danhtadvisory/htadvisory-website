import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Banner */}
        <div className="w-full py-16 px-6 text-center" style={{background: 'linear-gradient(135deg, #a8dbb8 0%, #5cb87a 50%, #a8dbb8 100%)'}}>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-black tracking-tight">About Us</h1>
        </div>

        {/* Our Commitment */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl uppercase mb-6">Our Commitment</h2>
            <h3 className="font-display font-bold text-xl text-[#2d8a4e] mb-6">Driving Impactful Change</h3>
            <p className="font-body text-base text-gray-700 leading-relaxed">
              Hinonga o Tutuki Advisory is dedicated to conducting qualitative research with sensitivity and precision,
              focusing on hard-to-reach communities. Our goal is to clearly define qualitative research, showcase our expertise,
              and aid organizations in achieving their objectives by understanding people in-depth.
            </p>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3 text-center">Meet Our Experts</h2>
            <p className="font-body text-sm text-gray-600 text-center mb-12">Our diverse team brings a wealth of experience and knowledge.</p>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { role: 'Research Lead', name: 'Dr Nicola Harrison', title: 'PhD, Qualitative Research Specialist', desc: 'Specialists in sensitive populations.', image: '/images/team-nikki.png' },
                { role: 'Delivery Lead', name: 'Daniel Harrison', title: 'Project Management & Facilitation', desc: 'Dedicated to understanding people\'s needs.', image: '/images/team-daniel.png' },
              ].map(m => (
                <div key={m.name} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={m.image} alt={m.name} fill className="object-cover object-top" sizes="500px" />
                  </div>
                  <div className="p-8">
                    <p className="font-body text-xs text-gray-400 mb-1">{m.role}</p>
                    <h3 className="font-display font-bold text-xl text-[#2d8a4e] mb-1">{m.name}</h3>
                    <p className="font-body text-sm text-gray-500 mb-3">{m.title}</p>
                    <p className="font-body text-sm text-gray-700">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Strategy */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3 text-center">Our Strategy</h2>
            <p className="font-body text-sm text-gray-600 text-center max-w-2xl mx-auto mb-12">
              At Hinonga o Tutuki Advisory, we follow a meticulous approach to research, ensuring precision and relevance in all our projects.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Tailored Solutions', desc: 'Our solutions are designed to address the unique requirements of each project, ensuring maximum effectiveness.' },
                { title: 'Ethical Practices', desc: 'We adhere to strict ethical standards in all our research practices, maintaining integrity and trust.' },
                { title: 'Impactful Results', desc: 'Explore the tangible results achieved through our qualitative research methodologies.' },
              ].map(s => (
                <div key={s.title} className="rounded-xl p-8" style={{background: 'linear-gradient(135deg, #e8f5ed, #c8e6d0)'}}>
                  <h3 className="font-display font-bold text-lg mb-3">{s.title}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #a8dbb8 0%, #5cb87a 50%, #a8dbb8 100%)'}}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl uppercase mb-4">Work with us</h2>
            <p className="font-body text-sm text-black/65 mb-8">Ready to deliver your next research project with care and expertise?</p>
            <a href="/#contact" className="inline-block px-8 py-3 bg-black text-white font-body text-sm rounded-full hover:bg-gray-800 transition-colors">Get in Touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
