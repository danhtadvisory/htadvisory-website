import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const advantages = [
  { title: 'Contextual Understanding', desc: 'Gain deep contextual insight into the communities and individuals you are researching.' },
  { title: 'Nuanced Perspectives', desc: 'Uncover the nuanced views and lived experiences that numbers alone cannot reveal.' },
  { title: 'Holistic View', desc: 'See the full picture of your target audience through rich, detailed qualitative data.' },
  { title: 'Informed Strategies', desc: 'Develop strategies grounded in genuine human understanding and real-world context.' },
];

const caseStudies = [
  {
    title: 'Meaningful Outcomes',
    body: 'In another case study, we partnered with a non-profit organization focused on youth development to conduct in-depth interviews with at-risk youth. The findings informed the creation of tailored support programs that addressed the specific needs and aspirations of the youth, resulting in increased engagement, well-being, and future opportunities.',
    cta: 'Read More',
  },
  {
    title: 'Valuable Insights',
    body: 'Additionally, our collaboration with a government agency seeking to enhance public engagement strategies involved extensive focus group discussions with diverse community members. The insights gathered facilitated the design of inclusive communication campaigns that effectively reached and resonated with the target populations, fostering greater trust and participation in government initiatives.',
    cta: 'Discover',
  },
  {
    title: 'Impactful Initiatives',
    body: 'These case studies exemplify the power of qualitative research in driving positive change, fostering meaningful connections, and delivering outcomes that align with the unique requirements and contexts of organizations and communities.',
    cta: 'Learn',
  },
];

export default function InfoPage() {
  return (
    <>
      <Nav />
      <main className="pt-14">
        {/* Banner */}
        <div className="w-full py-16 px-6 text-center" style={{background: 'linear-gradient(135deg, #a8dbb8 0%, #5cb87a 50%, #a8dbb8 100%)'}}>
          <h1 className="font-display font-black text-5xl md:text-7xl uppercase text-black tracking-tight">Info</h1>
        </div>

        {/* Understanding qualitative research */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase mb-6">Understanding Qualitative Research</h2>
            <p className="font-body text-base text-gray-700 leading-relaxed mb-6">
              Qualitative research is a method used to gain an in-depth understanding of human behavior, experiences, and interactions.
              It involves collecting non-numerical data, such as interviews, observations, and open-ended surveys, to uncover underlying
              motivations, preferences, and trends. At Hinonga o Tutuki Advisory, we utilize qualitative research to delve into the
              intricacies of sensitive and hard-to-reach communities, providing valuable insights for organizations seeking a deeper
              understanding of people's needs and perspectives.
            </p>
            <a href="#contact" className="inline-block px-8 py-3 bg-[#2d8a4e] text-white font-body text-sm rounded-full hover:bg-[#256e3e] transition-colors">Learn More</a>
          </div>
        </section>

        {/* Advantages */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3 text-center">Advantages of Qualitative Research</h2>
            <p className="font-body text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto text-center mb-12">
              Qualitative research offers rich and detailed insights that quantitative methods may not capture. It allows for a deeper
              exploration of complex issues, provides context to numerical data, and uncovers nuanced perspectives.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map(a => (
                <div key={a.title} className="bg-white rounded-xl p-8 border border-gray-100">
                  <h3 className="font-display font-bold text-lg mb-3">{a.title}</h3>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success stories */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display font-black text-3xl uppercase mb-3">Success Stories</h2>
            <p className="font-body text-sm text-gray-600 leading-relaxed max-w-2xl mb-12">
              Our case studies showcase how qualitative research has empowered organizations to connect with diverse communities,
              address pressing issues, and achieve meaningful outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map(c => (
                <div key={c.title} className="rounded-xl p-8" style={{background: 'linear-gradient(135deg, #e8f5ed, #c8e6d0)'}}>
                  <h3 className="font-display font-bold text-lg mb-3">{c.title}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed mb-4">{c.body}</p>
                  <a href="#" className="font-body text-sm text-[#2d8a4e] font-medium hover:underline">{c.cta} →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #a8dbb8 0%, #5cb87a 50%, #a8dbb8 100%)'}}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display font-black text-3xl uppercase mb-4">Ready to get started?</h2>
            <p className="font-body text-sm text-black/65 mb-8">Let us help you unlock insights that matter.</p>
            <a href="/#contact" className="inline-block px-8 py-3 bg-black text-white font-body text-sm rounded-full hover:bg-gray-800 transition-colors">Get in Touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
