import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play } from "lucide-react";

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-primary/20 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center text-left py-2 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
      >
        <Play 
          size={16} 
          className={`mr-3 text-primary transition-transform duration-200 ${isOpen ? 'rotate-90' : 'rotate-0'}`} 
          fill="currentColor"
        />
        {question}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-4 pl-7 text-gray-700">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "Tényleg évente automatikusan jelentkeznek?",
      a: "Igen. Nem Önnek kell emlékeznie, mi felhívjuk és egyeztetünk időpontot. A háztartási fordított ozmózis rendszereknél fix éves díj van a karbantartásra."
    },
    {
      q: "Szolgáltatott vízre és fúrt kútra is telepítenek?",
      a: "Igen, mindkettőre. A megoldás minden esetben a víz minőségétől függ, ezért kezdjük vízelemzéssel."
    },
    {
      q: "Kell vízelemzést csináltatnom külön?",
      a: "Nem kötelező. Mi tudunk tájékoztató jellegű vízelemzést végezni helyszínen. Ha szükséges, vagy hivatalos eredmény kell (pl. ipari projekt), akkor külső laborral dolgozunk."
    },
    {
      q: "Országosan telepítenek?",
      a: "Elsősorban Csongrád-Csanád megyében és környékén dolgozunk, de egyedi igény esetén nagyobb távolságra is elvállaljuk."
    },
    {
      q: "Mennyibe kerül egy vízszűrő rendszer?",
      a: "Minden rendszer egyedi. Az árát a víz minősége, az Ön igényei és a helyszín határozza meg. Az ingyenes felmérés után pontos árajánlatot adunk. Háztartási rendszereknél általában néhány százezer forinttól indul, de ezt személyre szabjuk."
    },
    {
      q: "Mennyi idő alatt felszerelik?",
      a: "Háztartási rendszereknél átlagosan 1-2 hét (beszerzés + telepítés). Ipari projekteknél a mérettől függ, de minden esetben egyeztetünk egy reális határidőt."
    },
    {
      q: "Mi van, ha elromlik a berendezés?",
      a: "A berendezésekre gyártói garancia vonatkozik (BWT, Honeywell). Mi pedig évente karbantartjuk, hogy megelőzzük a problémákat. Ha mégis szükség van rá, gyorsan reagálunk."
    }
  ];

  return (
    <section id="gyik" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Gyakori Kérdések</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.q} answer={faq.a} />
        ))}
      </div>
    </section>
  );
}
