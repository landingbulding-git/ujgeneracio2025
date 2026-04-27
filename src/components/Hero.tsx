import { motion } from "motion/react";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-dark mb-6">
          Tiszta víz. Egészséges család. Megbízható megoldás.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Vízszűrő rendszerek telepítése és karbantartása 30 év tapasztalattal.
          Felmérés, szerelés, rendszeres karbantartás, mi mindenről gondoskodunk.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="#contact">
            <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
          </a>
          <a href="#esettanulmanyok">
            <Button variant="outline">Tovább olvasok</Button>
          </a>
        </div>
        
        <p className="text-primary font-bold underline mb-16">
          100% garancia minden munkánkra
        </p>

        <div className="w-full flex justify-center mb-16 relative">
          <img
            src="https://cdn.gamma.app/tzl2sixgokxpy70/13738d54a43d48b9b043b71d1131c973/original/30-ev-2.png"
            alt="30 év tapasztalat"
            className="w-full max-w-2xl object-cover rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-dark mb-2">30 év</div>
            <div className="text-lg font-bold text-dark mb-2">tapasztalat</div>
            <p className="text-gray-600 text-sm">
              Több mint másfél évtized szakértelem a vízkezelés területén
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-dark mb-2">2000+</div>
            <div className="text-lg font-bold text-dark mb-2">elégedett ügyfél</div>
            <p className="text-gray-600 text-sm">
              Családok és vállalkozások, akik már élvezik a tiszta vizet
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-dark mb-2">24 óra</div>
            <div className="text-lg font-bold text-dark mb-2">óra válaszidő</div>
            <p className="text-gray-600 text-sm">
              Gyors kapcsolatfelvétel és személyes tanácsadás
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
