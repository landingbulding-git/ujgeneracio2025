export function Problems() {
  const problems = [
    {
      title: "Súlyos betegségek",
      description: (
        <>
          A <strong>veszélyes méreganyagok</strong> és elemek jelenléte rettenetes <strong>betegségekhez vezethetnek</strong>: bőr- és hajproblémák, fertőzések, vesebetegség, sőt, akár rák kialakulását is elősegítheti.
        </>
      ),
    },
    {
      title: "Károsodás a gépeken",
      description: (
        <>
          A kemény víz és a vízkőlerakódás akár rövid távon is <strong>tönkreteheti a vízzel működő háztartási gépeket.</strong> Szennyeződések lerakódásokat okozhatnak a <strong>csövekben és a szerelvényekben.</strong>
        </>
      ),
    },
    {
      title: "Magasabb számla",
      description: (
        <>
          A nem hatékony, vízköves, szennyeződött berendezések <strong>magasabb közüzemi számlákhoz</strong> vezetnek. Emellett a <strong>palackozott víz</strong> vásárlása is további <strong>költségeket</strong> és <strong>kellemetlenségeket</strong> eredményez.
        </>
      ),
    },
    {
      title: "Általános diszkomfort",
      description: (
        <>
          A kellemetlen <strong>szagok</strong>, fémes, klóros rossz <strong>íz</strong>, a vízben lebegő <strong>részecskék és üledék</strong> megfoszt minket az igazi otthon érzetétől. <strong>Roncsolja</strong> kedvenc ruhái szöveteit, <strong>extra takarítási</strong> feladatokat helyez a vállára.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Aggódik a családja egészsége miatt?</h2>
      <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
        Gyermekei minden nap csapvizet, vagy ásványi anyagokkal teli palackozot vizet isznak. 
        Biztos benne, hogy ez megfelelő számukra? A rossz minőségű víz nem csak kellemetlen, 
        de komoly hosszútávú problémákat is jelenthet bármely család számára:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        {problems.map((problem, i) => (
          <div key={i} className="border-2 border-primary rounded-3xl p-6 relative bg-white">
            <div className="absolute top-0 left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm flex items-center justify-center"></div>
            <h4 className="text-xl font-bold mb-4 mt-2 text-center">{problem.title}</h4>
            <p className="text-gray-700 text-center">{problem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
