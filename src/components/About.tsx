interface AboutProps {
  aboutImage?: React.ReactNode;
}

export function About({ aboutImage }: AboutProps) {
  return (
    <section id="rolunk" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center bg-white border-2 border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="md:w-5/12 w-full">
          {aboutImage || (
            <img 
              src="https://cdn.gamma.app/tzl2sixgokxpy70/87aa964a5316453fb2c4ccd223295772/original/unnamed-6---Edited.jpg" 
              alt="Lévay Ferenc Zoltán" 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="md:w-7/12 w-full p-8 md:p-12 pl-8 md:pl-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Lévay Ferenc Zoltán</h2>
          <div className="text-gray-700 italic text-lg border-l-4 border-primary pl-4 mb-6">
            Élelmiszermérnök és víztisztítási technológus
          </div>
          
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              Több mint 20 éve azt csinálom, amit a legjobban szeretek: lehetetlennek tűnő vízproblémákat oldok meg.
            </p>
            <p>
              Élelmiszermérnökként és víztisztítási technológusként indultam, de a tudásomat a gyakorlatban csiszoltam , számtalan projekten keresztül. Szeretem a kihívásokat, mert tudom: még a legrosszabb vízből is lehet tiszta, biztonságos ivóvíz.
            </p>
            <p>
              Folyamatosan tanulok, mert a technológia fejlődik, és én mindig a legjobb megoldást akarom adni az ügyfeleimnek.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
