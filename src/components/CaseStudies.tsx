import React, { useState } from "react";
import { Button } from "./ui/Button";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";

function CaseStudy({
  image,
  title,
  text,
  problems,
  solution,
  result,
  testimonial,
  imagePosition,
}: {
  image: string;
  title: string;
  text: React.ReactNode;
  problems: React.ReactNode;
  solution: React.ReactNode;
  result?: React.ReactNode;
  testimonial: React.ReactNode;
  imagePosition: "left" | "right";
}) {
  const [isOpen, setIsOpen] = useState(false);

  const ImageBlock = (
    <div className="w-full lg:w-2/5 p-4 sm:p-8">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl aspect-[4/3] shadow-lg"
      />
    </div>
  );

  const ContentBlock = (
    <div className="w-full lg:w-3/5 p-4 sm:p-8 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4">"{title}"</h2>
      <div className="text-gray-700 space-y-4 mb-6">{text}</div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-dark font-semibold underline mb-4 hover:text-primary transition-colors"
      >
        <span>Elolvasnám a teljes esettanulmányt!</span>
        {isOpen ? <ChevronUp size={20} className="text-primary" /> : <ChevronDown size={20} className="text-primary" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 p-6 rounded-xl space-y-6 mb-6 border border-gray-100 shadow-sm">
              <div>
                <h3 className="text-xl font-bold mb-2">A probléma:</h3>
                <div className="text-gray-700 space-y-2">{problems}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">A megoldás:</h3>
                <div className="text-gray-700 space-y-2">{solution}</div>
              </div>
              {result && (
                <div className="text-gray-700">{result}</div>
              )}
              <div>
                <h3 className="text-xl font-bold mb-2">Az ügyfél mondta:</h3>
                <div className="text-gray-700 italic border-l-4 border-primary pl-4 py-1">{testimonial}</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <a href="#contact">
          <Button variant="primary">Ingyenes állapotfelmérést szeretnék</Button>
        </a>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row items-stretch bg-white border border-gray-100 rounded-3xl shadow-sm mb-12 py-4">
      {imagePosition === "left" && ImageBlock}
      {ContentBlock}
      {imagePosition === "right" && ImageBlock}
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="esettanulmanyok" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <CaseStudy
        image="https://cdn.gamma.app/tzl2sixgokxpy70/4ab4bf9f859f453d973ca935f9c4cb50/original/unnamed-8.jpg"
        imagePosition="left"
        title="A mindennapokban hihetetlen változás volt, hogy mindig van tiszta víz a házban."
        text={
          <p>
            Egy távoli helyszínen élő család kritikus problémával keresett meg minket:{" "}
            <strong>nagyon vízköves és nagyon sós volt a vizük</strong>,
            gyakorlatilag használhatatlan.
          </p>
        }
        problems={
          <>
            <p>
              <strong>Mit jelentett ez a mindennapokban?</strong>
            </p>
            <p>
              A víz rossz ízű volt, nem lehetett meginni, még főzésre is alig használható. 
              A vízkő mindenütt megjelent: a berendezéseken, a csaptelepeken, lassan tönkretéve mindent, 
              amibe a víz bekerült. De a legnagyobb probléma nem is ez volt, hanem az állandó aggodalom, hogy <strong>víz nélkül maradnak</strong>.
            </p>
            <p>
              A bizonytalanság fojtogató volt: "Hogyan oldjuk meg? Kire bízzuk?" A kockázat pedig óriási: 
              ha nem oldják meg, a ház élhetetlenné válik, és az új beruházás, amibe annyi pénzt és energiát fektettek – értéktelenné.
            </p>
          </>
        }
        solution={
          <>
            <p>Többszöri helyszíni felmérés, profi rendszer, teljes betanítás és folyamatos támogatás. A megoldás nem csak egy berendezés telepítése volt, hanem egy teljes folyamat:</p>
            <p>A távoli helyszín ellenére többször is kimentünk, hogy reálisan felmérjük a helyzetet és minden apró részletet tisztázzunk. Nem akartunk találgatni, látnunk kellett, hogy pontosan milyen adottságokkal dolgozunk.</p>
            <p>Miután minden információ a rendelkezésünkre állt, megterveztük a legmegfelelőbb rendszert: vízlágyítást és sómentesítést kombináltuk, hogy mind a keménységet, mind a só problémáját megoldjuk. Az ajánlat átlátható volt, a kivitelezés gyors, nem kellett hetekig várakozni.</p>
            <p>A telepítés után pedig nem hagytuk magára a családot. Világosan elmagyaráztuk, hogyan működik a rendszer, milyen feladatokat kell elvégezni, és megtanítottuk a karbantartás alapjait, úgy, hogy bárki megértse, aki használja.</p>
            <p>És ami talán a legfontosabb: azóta is elérhetőek vagyunk. Ha kérdések merülnek fel, ha bármi problémát észlelnek, egy hívásra ott vagyunk. Ez a folyamatos elérhetőség <strong>biztonságot nyújt a családnak</strong>, tudják, hogy nem maradtak egyedül a rendszerrel.</p>
          </>
        }
        result={
          <p className="mt-4 border-t border-gray-200 pt-4">
            <strong>Eredmény:</strong> Mindig van víz a házban és nem kell amiatt aggódni, hogy víz nélkül maradnak. A víz tiszta, lágy, jó ízű, tökéletesen használható a háztartásban.
          </p>
        }
        testimonial={
          <>
            <p><strong>"Hihetetlen változás, hogy mindig van víz – és nem kell aggódni.</strong></p>
            <p>Nagyon elégedett vagyok a szolgáltatással, a kitalált, megtervezett profi megoldással és a kifogástalan eredménnyel.</p>
            <p>Lévay úr nem sajnált időt, energiát, többször eljött a távoli helyszínre, hogy reálisan felmérje a helyzetet. Minden részletet világosan megtervezett és elmagyarázott, a végén pedig teljesen érthetően megtanította a szükséges feladatok elvégzését.</p>
            <p>Mindig elérhető, ha kérdések vagy problémák merülnek fel, ami biztonságot nyújt nekünk.</p>
            <p>Elsősorban azért döntöttünk így, mert az első találkozáskor több szinten bizalmat ébresztett bennünk. Döntő volt a tapasztalata, a tudása, az emberi hozzáállása, a probléma reális felmérése, a korrekt, átlátható ajánlata és a gyors kivitelezés is.</p>
            <p>A mindennapokban hihetetlen változás az volt, hogy mindig van víz a házban és nem kell amiatt aggódni, hogy víz nélkül maradunk. Ez a víz pedig tiszta, lágy víz, a háztartásban tökéletesen használható és jó ízű víz.</p>
            <p>Őszintén tudom ajánlani a szolgáltatásokat mindenkinek, akinek vízzel kapcsolatos problémái vannak."</p>
          </>
        }
      />

      <CaseStudy
        image="https://cdn.gamma.app/tzl2sixgokxpy70/7a21dd36dc654fb7bddd975ec4089b7d/original/unnamed-7.jpg"
        imagePosition="right"
        title="Fél év alatt tönkretette volna az összes új berendezést."
        text={
          <p>
            Egy békéscsabai tanya tulajdonosa új házat épített, új berendezésekkel 
            (bojler, mosógép, mosogatógép, csaptelepek). Egyetlen probléma volt: 
            csak saját fúrt kútból lehetett vizet venni , vezetékes víz nem volt elérhető.
          </p>
        }
        problems={
          <>
            <p><strong>A vízelemzés sokkoló eredményt hozott:</strong></p>
            <p>Magas vastartalám, rozsdabarna színű víz<br/>Magas mangántartalom, fekete foltok, lerakódások<br/>Ammónia , kellemetlen szag<br/>Kemény víz , vízkő már rövid távon is</p>
            <p className="mt-2"><strong>Mit jelentett volna ez kezelés nélkül?</strong></p>
            <p>Az új bojler, mosógép, mosogatógép kb. fél év alatt tönkrement volna<br/>A csaptelepek elszíneződtek, eldugultak volna<br/>A fehérneműk sárgultak, foltos lett volna minden<br/>A víz szaga lakhatatlánná tette volna az otthont<br/>Folyamatos javítások, cserék, több százezer forint felesleges költség</p>
            <p className="mt-2">A tulajdonos nem engedhette meg, hogy az új beruházása néhány hónap alatt használhatatlanná váljon.</p>
          </>
        }
        solution={
          <>
            <p><strong>Teljesen automata, kombinált víztisztító rendszer, minimális karbantartással</strong></p>
            <p>Mivel a víz több problémát is tartalmazott (vas, mangán, ammónia, keménység), komplex megoldásra volt szükség. Speciális kombinált gyanta töltetű, automatikus regenerációs víztisztító egységet telepítettünk.</p>
            <p>Hogyan működik?</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Egy berendezés kezeli az összes problémát (vas, mangán, ammónia, vízkő)</li>
              <li>Teljesen automata regeneráció, a rendszer magától tisztítja magát, nem kell kézzel beavatkozni</li>
              <li>Egyetlen feladat a tulajdonosnak: havonta-kéthavonta sótablettát utántölteni (5 perc)</li>
              <li>Nincs folyamatos karbantartás, csak 3-6 évente szükséges komolyabb szerviz (terheléstől függ)</li>
            </ul>
            <p className="mt-4"><strong>Eredmény: Kristálytiszta, szagtalan, lágy víz, minden csapból. Az új berendezések védve vannak, évtizedekig működhetnek.</strong></p>
          </>
        }
        testimonial={
          <>
            <p>"A végeredmény jobb lett, mint vártam. Nagyon elégedett vagyok."</p>
            <p>– Tanya tulajdonos, Békéscsaba környéke</p>
            <p className="mt-4">A tulajdonos azóta nem aggódik a víz minősége miatt. A berendezések hibátlanul működnek. A víz tiszta, szagtalan, és egyetlen gomb megnyomása vagy sótabletták utántöltése az összes teendő.</p>
          </>
        }
      />
    </section>
  );
}
