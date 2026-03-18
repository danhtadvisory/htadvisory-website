import Image from 'next/image';

const team = [
  {
    role: 'Research Lead',
    name: 'Dr Nicola Harrison',
    iwi: 'Ngai Te Rangi, Ngāti Raukawa ki Waikato, Vaka Puaikura, Clan Urquhart',
    bio: "With a PhD in sexual violence prevention among Māori communities, Nikki's research approach emphasizes trust, respect, and cultural sensitivity. Dr. Harrison is committed to nuanced qualitative research and analysis to accurately reflect the aspirations and perspectives of those with whom she works.",
    image: '/images/team-nikki.png',
  },
  {
    role: 'Delivery Lead',
    name: 'Daniel Harrison',
    iwi: 'Ngapuhi, Ngāti Kahanungu',
    bio: 'Daniel has spent the last 15 years in the software development sector running high performing delivery teams. He is a talented project manager and a skilled facilitator.',
    image: '/images/team-daniel.png',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6" style={{background:'#ffffff',borderTop:'0.5px solid #e5e5e5'}}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-16">
        {/* Left — big heading + intro */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image src="/images/logo-arrow.png" alt="" width={48} height={24} className="object-contain" />
            <span className="font-display font-bold text-xs tracking-widest uppercase" style={{color:'#aaa'}}>Hinonga o Tutuki</span>
          </div>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase leading-tight mb-6" style={{color:'#111'}}>
            Kaupapa<br />M&#256;ori<br />Expertise
          </h2>
          <p className="font-body text-base leading-relaxed" style={{color:'#2d8a4e'}}>
            At Hinonga o Tutuki Advisory, we are a husband and wife team who drive every project with passion and expertise.
            We have cultivated a network of sensitive research specialists so we can tailor the suite of skills in our teams for
            the needs of each project. The breadth of qualitative and quantitative skills among our wider team ensures we deliver
            comprehensive solutions. Discover how our dedication can successfully deliver your next project, end-to-end.
          </p>
        </div>

        {/* Team members */}
        {team.map((m) => (
          <div key={m.name}>
            <p className="font-body text-xs mb-1" style={{color:'#999'}}>{m.role}</p>
            <h3 className="font-display font-bold text-2xl mb-4" style={{color:'#2d8a4e'}}>{m.name}</h3>
            {/* Portrait ratio — shows full face */}
            <div className="relative w-full mb-4 overflow-hidden rounded-xl" style={{aspectRatio:'3/4'}}>
              <Image src={m.image} alt={m.name} fill className="object-cover object-top" sizes="350px" />
            </div>
            <p className="font-body text-xs italic mb-3" style={{color:'#aaa'}}>{m.iwi}</p>
            <p className="font-body text-sm leading-relaxed" style={{color:'#555'}}>{m.bio}</p>
          </div>
        ))}
      </div>

      {/* CTA banner */}
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden" style={{background:'linear-gradient(135deg,#a8dbb8 0%,#5cb87a 50%,#a8dbb8 100%)'}}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10">
            <div>
              <h3 className="font-display font-black text-2xl md:text-3xl uppercase mb-2" style={{color:'#000'}}>
                Ready to work with us?
              </h3>
              <p className="font-body text-sm max-w-md" style={{color:'rgba(0,0,0,0.65)'}}>
                Discover how our Kaupapa Māori expertise can deliver your next research project end-to-end.
              </p>
            </div>
            <a href="#contact" className="flex-shrink-0 px-8 py-3 text-white font-body text-sm rounded-full whitespace-nowrap" style={{background:'#000'}}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
