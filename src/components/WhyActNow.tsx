import { Button } from "./ui/Button";

export function WhyActNow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-10">
        Miért érdemes most cselekedni?
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        Minden nap számít. A vízkő tovább épül. A gépek tovább kopnak. A palackozott víz költsége tovább nő. De a megoldás egyszerű: töltse ki az űrlapot és segítünk.
      </p>
      <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto font-medium underline">
        A családja egészsége és az otthona védelme megérdemli a legjobb megoldást.
      </p>
      
      <div className="flex justify-center">
        <a href="https://tally.so/r/0QOOEN" target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
        </a>
      </div>
    </section>
  );
}
