import { Button } from "./ui/Button";

export function HowItWorks() {
  const steps = [
    { title: "Kapcsolatfelvétel", desc: "Kitölti az ingyenes felmérési űrlapot. Mindössze néhány percet vesz igénybe." },
    { title: "Beszélgetés", desc: "Felhívjuk telefonon. 10-15 perc alatt többet megtudunk, mint 10 emailben. Megbeszéljük az igényeit, a helyszínt, a lehetőségeket." },
    { title: "Vízelemzés", desc: "Megvizsgáljuk a víz állapotát (tájékoztató jelleggel, helyszínen) vagy az Ön laboreredménye alapján dolgozunk." },
    { title: "Egyedi ajánlat", desc: "Pontosan azt ajánljuk, amire szüksége van. Nem többet, nem kevesebbet." },
    { title: "Telepítés", desc: "Átlagosan 1-2 héten belül (háztartási rendszereknél) mindent felszerelünk és beüzemelünk." },
    { title: "Karbantartás", desc: "Gondosan megtanítjuk a rendszer használatára és időről időre jelentkezünk, hogy elvégezzük a kötelező karbantartást, így Ön nem felejtheti el. Fix ár, fix időpont." },
  ];

  return (
    <section id="hogyan-mukodik" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        Hogyan működik? Egyszerűbben, mint gondolná.
      </h2>

      <div className="relative max-w-3xl mx-auto mb-16 px-4">
        <div className="absolute left-1/2 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} relative`}>
              <div className="md:w-1/2 flex justify-center md:justify-start w-full relative">
                {/* Desktop layout: text on one side */}
                <div className={`hidden md:block w-full ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                   <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                   <p className="text-gray-700">{step.desc}</p>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden text-center mt-6">
                   <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                   <p className="text-gray-700">{step.desc}</p>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center flex-col md:flex-row top-0 md:top-auto z-10 w-full md:w-auto">
                 <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-dark text-lg border-4 border-white shadow-md">
                   {index + 1}
                 </div>
              </div>
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
