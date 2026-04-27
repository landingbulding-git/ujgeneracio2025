import { Button } from "./ui/Button";

export function Services() {
  const services = [
    {
      title: "Vízlágyítás",
      image: "https://cdn.gamma.app/tzl2sixgokxpy70/a3999eb71175456189bc6147d2410060/original/pexels-photo-8978603.jpeg",
      desc: "Nincs több vízkő. A bojler, a mosógép, a csaptelepek tovább élnek. A bőr nem szárad ki.",
    },
    {
      title: "Ivóvíz-tisztítás",
      image: "https://images.pexels.com/photos/6857798/pexels-photo-6857798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc: "Klór, nehézfémek, baktériumok eltávolítása. Kristálytiszta víz közvetlenül a csapból. Felejtsd el a palackokat.",
    },
    {
      title: "Komplett kútvíz-kezelés",
      image: "https://images.pexels.com/photos/161502/shower-shower-head-water-drop-of-water-161502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      desc: "A fúrott kút vize biztonságos, használható és egészséges lesz minden csapból",
    },
  ];

  const industrialServices = [
    {
      title: "Ipari és mezőgazdasági vízlágyítás",
      image: "https://images.pexels.com/photos/259280/pexels-photo-259280.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Élelmiszer-feldolgozás, állatitatás, öntözés. Stabil vízminőséget garantálunk automata regenerációval. Nem kell megállítani a termelést.",
    },
    {
      title: "Fordított ozmózis (RO) rendszerek",
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Ipari RO rendszerek telepítése és karbantartása, olyan különleges területeken, mint a gyógyszeripar vagy steril laborok, ahol a tisztaság kritikus.",
    },
    {
      title: "NeoCrystal fizikai vízkezelés",
      image: "https://images.pexels.com/photos/162568/architecture-building-industry-162568.jpeg?auto=compress&cs=tinysrgb&w=800",
      desc: "Nem kell megbontani a vízhálózatot. Csak áram és egy egyenes csőszakasz szükséges, hogy a NeoCrystal berendezéssel megakadályozzuk a vízkő lerakódását.",
    },
  ];

  return (
    <section id="szolgaltatasaink" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Családja egészsége, otthona védelme, pénztárcája megkímélése fontos nekünk.
        </h2>
        <div className="flex justify-center mb-12">
          <span className="inline-block bg-[#ccf6ff] text-dark font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-full">
            Háztartási megoldások
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-2xl shadow-sm">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Üzemi hatékonyság, berendezései védelme és fenntartható gazdaságossága szívügyünk.
        </h2>
        <div className="flex justify-center mb-12">
          <span className="inline-block bg-[#ccf6ff] text-dark font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-full">
            Ipari megoldások
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industrialServices.map((service, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-full aspect-square mb-6 overflow-hidden rounded-2xl shadow-sm">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <a href="#contact">
          <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
        </a>
      </div>
    </section>
  );
}
