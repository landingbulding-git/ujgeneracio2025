export function Testimonials() {
  const testimonials = [
    {
      quote: "Nagyon elégedett vagyok a szolgáltatással, a kitalált, megtervezett profi megoldással és a kifogástalan eredménnyel. Lévay úr nem sajnált időt, energiát, többször eljött a távoli helyszínre, hogy reálisan felmérje a helyzetet és minden részletet világosan megtervezett és elmagyarázott, a végén pedig teljesen érthetően megtanította a szükséges feladatok elvégzését.",
      author: "Kati S.",
      location: "Csongrád megye"
    },
    {
      quote: "Őszintén tudom ajánlani a szolgáltatásokat mindenkinek, akinek vízzel kapcsolatos problémái vannak, mert tapasztalatból azt mondhatom, hogy Lévay úr gyorsan reagált a megkeresésre, azután pedig többször is kiszállt a terepre, hogy felmérje a helyzetet és kidolgozza az optimista megoldást.",
      author: "János P.",
      location: "Szeged"
    },
    {
      quote: "Tisztában van a szakterületével, így a legmegfelelőbb berendezést fogja mindenki számára ajánlani.",
      author: "Eszter T.",
      location: "Tiszavasvári"
    },
    {
      quote: "Nagyon sok ismerősömnek ajánlottam, és ezt nyugodt szívvel tettem, mert tudtam, hogy mindig tökéletes munkát végez.",
      author: "Géza M.",
      location: "ipari ügyfél"
    }
  ];

  return (
    <section className="bg-blue-bg py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Ne nekünk higgyen. Hallgassa meg, akiknek már segítettünk.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-3xl p-8 shadow-sm flex flex-col justify-between py-10 relative">
              <div className="text-6xl text-primary absolute -top-4 -left-2 opacity-50 select-none pointer-events-none font-serif">"</div>
              <div className="text-6xl text-primary absolute -bottom-8 -right-2 opacity-50 select-none pointer-events-none font-serif">"</div>
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed relative z-10 text-center">"{t.quote}"</p>
              <div className="text-right">
                <span className="font-bold block">– {t.author}, {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
