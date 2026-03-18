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
    <section id="services" style={{background:'#ffffff',borderTop:'0.5px solid #e5e5e5'}}>
      <div className="relative overflow-hidden text-center px-6 py-20">
        {/* Outer grey capsule */}
        <div style={{position:'absolute',left:'-120px',top:'50%',transform:'translateY(-50%) rotate(-35deg)',width:'260px',height:'520px',borderRadius:'999px',background:'#d8d8d8',pointerEvents:'none'}} />
        {/* Inner green capsule */}
        <div style={{position:'absolute',left:'-90px',top:'50%',transform:'translateY(-62%) rotate(-35deg)',width:'180px',height:'380px',borderRadius:'999px',background:'#b8dfc4',pointerEvents:'none'}} />

        <h2 className="relative font-display font-black text-5xl md:text-6xl uppercase mb-8 z-10" style={{color:'#111'}}>Our Services</h2>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div style={{position:'absolute',inset:'-16px -32px',background:'#e0e0e0',borderRadius:'999px',zIndex:-1}} />
          <p className="relative font-body text-base md:text-lg leading-relaxed" style={{color:'#222'}}>
            At Hinonga o Tutuki we are dedicated to conducting robust qualitative research on sensitive topics.
            We understand the importance of handling delicate subjects with care and precision.
            If you&apos;re ready to gain invaluable insights that respect the complexities of your research questions,
            we are here to guide you every step of the way.
          </p>
        </div>
      </div>

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
