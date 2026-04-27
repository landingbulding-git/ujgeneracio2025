import { Button } from "./ui/Button";

export function CTABanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Tiszta víz már holnap. Ingyenes felmérés még ma.
      </h2>
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          <p className="text-lg text-gray-700">
            Ne várjon tovább. Minden nap, amit késlekedik, az többletköltség (gépek, egészség, palackozott víz) és aggodalom.
          </p>
          <p className="text-lg text-gray-700">
            Töltse ki az alábbi űrlapot 2 perc alatt, és mi felhívjuk 24 órán belül. Megbeszéljük az igényeit, és elindítjuk a folyamatot.
          </p>
          <p className="text-lg text-gray-700">
            <strong>Nincs kötelezettség. Nincs rejtett költség.</strong> Csak egy tiszta beszélgetés arról, hogyan segíthetünk.
          </p>
          
          <div className="mt-4">
            <a href="https://tally.so/r/0QOOEN" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full">
          <img 
            src="https://images.pexels.com/photos/545013/pexels-photo-545013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt="Hand washing" 
            className="w-full h-auto aspect-video object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
