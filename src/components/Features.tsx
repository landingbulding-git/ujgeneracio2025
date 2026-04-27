import { Star, FileCheck, ShieldCheck, Settings, Users } from "lucide-react";

export function Features() {
  const items = [
    {
      title: "Komplett szolgáltatás",
      desc: "Nem kell szolgáltatót igénybe venni. Felmérés, tervezés, telepítés, karbantartás, mindent mi intézünk.",
      icon: <FileCheck className="text-primary" size={32} />
    },
    {
      title: "BWT Hungária partner",
      desc: "Prémium minőségű berendezések, hivatalos garancia, eredeti alkatrészek.",
      icon: <Star className="text-primary" size={32} />
    },
    {
      title: "Évenkénti automatikus karbantartás",
      desc: "Nem Önnek kell emlékeznie. Mi jelentkezünk, fix áron, fix időben.",
      icon: <ShieldCheck className="text-primary" size={32} />
    },
    {
      title: "Egyedi megoldások",
      desc: "Nem katalógusból választ. Minden rendszert az Ön vízére, otthonára, üzemére szabunk.",
      icon: <Settings className="text-primary" size={32} />
    },
    {
      title: "Helyi szakember, személyes kapcsolat",
      desc: "Nem call center. Munkatársaink 30 év tapasztalattal hívják vissza személyesen.",
      icon: <Users className="text-primary" size={32} />
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-16">
        30 év tapasztalat. 2000+ elégedett ügyfél. Egy cél: az Ön nyugalma.
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="mb-4">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
