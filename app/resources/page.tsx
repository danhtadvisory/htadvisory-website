import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const insights = [
  { title: 'Presentations', desc: 'See what HTAdvisory team members have presented at conferences.', href: '#' },
  { title: 'Papers', desc: 'Find content published by HTAdvisory team members.', href: '#' },
  { title: 'Online Resources', desc: 'Find online resources that HTAdvisory team members have been involved in creating.', href: '#' },
];

const educational = [
  { title: 'Templates', desc: 'Practical templates to support your qualitative research projects.' },
  { title: 'Frameworks', desc: 'Research frameworks developed and used by our team.' },
  { title: 'Resources', desc: 'Curated resources to help you navigate sensitive research topics.' },
  { title: 'Support', desc: 'Guidance and support materials for research practitioners.' },
];

const sessions = [
  { title: 'Expert Talks', desc: 'Gain insights from experts in the field.', cta: 'Attend' },
  { title: 'Interactive Workshops', desc: 'Enhance your skills through interactive sessions.', cta: 'Learn More' },
  { title: 'Skill Building', desc: 'Build your expertise with our skill-building workshops.', cta: 'Engage' },
  { title: 'Knowledge Sharing', desc: 'Share knowledge and collaborate with industry professionals.', cta: 'Connect' },
];

export default function ResourcesPage() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Banner */}
        <div className="w-full py-16 px-6 text-center" style={{background: 'linear-gradient(135deg, #a8dbb8 0%, #5cb87a 50%, #a8dbb8 100%)'}}>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-black tracking-tight">Resources</h1>
        </div>

        {/* Insights */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-2">Insights</h2>
            <p className="font-body text-sm text-gray-500 mb-10">Read</p>
            <div className="grid md:grid-cols-3 gap-6">
              {insights.map(i => (
                <div key={i.title} className="border border-gray-100 rounded-xl p-8 hover:shadow-sm transition-shadow">
                  <h3 className="font-display font-bold text-lg mb-3">{i.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed mb-4">{i.desc}</p>
                  <a href={i.href} className="font-body text-sm text-[#2d8a4e] font-medium hover:underline">Go →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3">Educational Resources</h2>
            <p className="font-body text-sm text-gray-600 mb-10">Our guides and toolkits provide practical assistance for your research needs.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {educational.map(e => (
                <div key={e.title} className="bg-white rounded-xl p-8 border border-gray-100">
                  <h3 className="font-display font-bold text-lg mb-2">{e.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Learning */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3">Interactive Learning Sessions</h2>
            <p className="font-body text-sm text-gray-600 mb-10">Engage in our webinars and workshops to expand your knowledge and skills.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {sessions.map(s => (
                <div key={s.title} className="rounded-xl p-8" style={{background: 'linear-gradient(135deg, #e8f5ed, #c8e6d0)'}}>
                  <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed mb-4">{s.desc}</p>
                  <a href="#contact" className="font-body text-sm text-[#2d8a4e] font-medium hover:underline">{s.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
