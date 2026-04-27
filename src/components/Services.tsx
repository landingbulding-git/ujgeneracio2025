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

  return (
    <section id="szolgaltatasaink" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Családja egészsége, otthona védelme, pénztárcája megkímélése fontos nekünk.
      </h2>
      <div className="flex justify-center mb-12">
        <span className="inline-block bg-[#ccf6ff] text-dark font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-full">
          Háztartási megoldások
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

      <div className="flex justify-center">
        <a href="#contact">
          <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
        </a>
      </div>
    </section>
  );
}
