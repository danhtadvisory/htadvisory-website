const services = [
  {
    title: 'Sensitive Topics',
    body: 'Discussions about sensitive topics like abuse, family relationships, and religion can feel daunting. We specialize in helping individuals navigate their deep feelings by fostering a trusting environment. We engage all participants with understanding and respect, allowing us to tackle these important subjects with confidence.',
  },
  {
    title: 'Hard-to-Reach Populations',
    body: 'We specialize in engaging hard-to-reach populations using innovative methods that prioritize respectful recruitment. By employing culturally informed practices, we ensure not just outreach but genuine connection, paving the way for effective and respectful collaborations that resonate with diverse communities.',
  },
  {
    title: 'Meaningful Analysis',
    body: 'We specialize in using narrative analysis and a critical sociological perspective to convert qualitative data into actionable insights. We will navigate the complexities of your data and discover meaningful ways to move forward and achieve your objectives.',
  },
];

export default function Services() {
  return (
    <section id="services" style={{borderTop:'0.5px solid #e5e5e5'}}>
      {/* Heading + intro — near black bg */}
      <div className="text-center px-6 py-20" style={{background:'#111111'}}>
        <h2 className="font-display font-black text-5xl md:text-6xl uppercase mb-8" style={{color:'#ffffff',letterSpacing:'-0.01em'}}>
          Our Services
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div style={{
            position:'absolute',
            inset:'-16px -32px',
            background:'rgba(168,219,184,0.12)',
            border:'1px solid rgba(168,219,184,0.25)',
            borderRadius:'999px',
          }} />
          <p className="relative font-body text-base md:text-lg leading-relaxed" style={{color:'rgba(255,255,255,0.82)'}}>
            At Hinonga o Tutuki we are dedicated to conducting robust qualitative research on sensitive topics.
            We understand the importance of handling delicate subjects with care and precision.
            If you&apos;re ready to gain invaluable insights that respect the complexities of your research questions,
            we are here to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Three green columns */}
      <div className="grid md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title} className="px-10 py-12 text-center" style={{background: i === 1 ? '#e8f5ed' : '#c8e6d0'}}>
            <h3 className="font-display font-bold text-xl mb-5" style={{color:'#1a3a22'}}>{s.title}</h3>
            <p className="font-body text-base leading-relaxed" style={{color:'#2d5a35'}}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
