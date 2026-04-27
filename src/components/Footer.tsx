import { Button } from "./ui/Button";

export function Footer() {
  return (
    <footer id="contact" className="bg-blue-bg py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Készen áll a tiszta vízre és a nyugalomra?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Ne halogassa tovább családja egészségét és otthona védelmét! Lépjen velünk kapcsolatba még ma egy ingyenes felmérésért, és tegye meg az első lépést a kristálytiszta, biztonságos víz felé.
            </p>
            <a href="https://tally.so/r/0QOOEN" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Ingyenes állapotfelmérés</Button>
            </a>
          </div>
          
          <div className="text-lg text-gray-700 space-y-6">
            <div>
              <p className="font-bold">Lévay Ferenc Zoltán</p>
              <p>Víztisztítási Szakértő</p>
            </div>
            
            <div>
              <p>Telefon: +36 30 123 4567</p>
              <p>Email: <a href="mailto:info@vizspecialista.hu" className="hover:underline">info@vizspecialista.hu</a></p>
            </div>
            
            <div>
              <p className="mb-4">Kövesse a tiszta víz útját a közösségi médiában is!</p>
              <div className="flex gap-4">
                <Button variant="outline" className="text-sm px-4 py-2 hover:bg-white bg-white w-32 border-[#E5E0DF] border text-black hover:text-black">Facebook</Button>
                <Button variant="outline" className="text-sm px-4 py-2 hover:bg-white bg-white w-32 border-[#E5E0DF] border text-black hover:text-black">Instagram</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
