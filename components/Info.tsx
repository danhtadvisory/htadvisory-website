const advantages = [
  { title: 'Contextual Understanding', desc: 'Gain deep contextual insight into the communities and individuals you are researching.' },
  { title: 'Nuanced Perspectives', desc: 'Uncover the nuanced views and lived experiences that numbers alone cannot reveal.' },
  { title: 'Holistic View', desc: 'See the full picture of your target audience through rich, detailed qualitative data.' },
  { title: 'Informed Strategies', desc: 'Develop strategies grounded in genuine human understanding and real-world context.' },
];

export default function Info() {
  return (
    <section id="info" style={{background:'#f7f7f5',borderTop:'0.5px solid #e5e5e5'}}>
      <div className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase mb-6" style={{color:'#111'}}>
            Understanding Qualitative Research
          </h2>
          <p className="font-body text-base leading-relaxed" style={{color:'#555'}}>
            Qualitative research is a method used to gain an in-depth understanding of human behavior, experiences, and interactions.
            It involves collecting non-numerical data, such as interviews, observations, and open-ended surveys, to uncover underlying
            motivations, preferences, and trends. At Hinonga o Tutuki Advisory, we utilize qualitative research to delve into the
            intricacies of sensitive and hard-to-reach communities.
          </p>
        </div>
      </div>

      <div className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-black text-3xl uppercase mb-3 text-center" style={{color:'#111'}}>Advantages</h2>
          <p className="font-body text-base text-center max-w-2xl mx-auto mb-12" style={{color:'#666'}}>
            Qualitative research offers rich and detailed insights that quantitative methods may not capture.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map(a => (
              <div key={a.title} className="rounded-xl p-8" style={{background:'#ffffff',border:'0.5px solid #e5e5e5'}}>
                <h3 className="font-display font-bold text-lg mb-3" style={{color:'#111'}}>{a.title}</h3>
                <p className="font-body text-base leading-relaxed" style={{color:'#666'}}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
