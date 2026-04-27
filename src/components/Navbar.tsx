import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Esettanulmányok", href: "#esettanulmanyok" },
    { label: "Szolgáltatásaink", href: "#szolgaltatasaink" },
    { label: "Hogyan működik?", href: "#hogyan-mukodik" },
    { label: "Rólunk", href: "#rolunk" },
    { label: "Gyakori Kérdések", href: "#gyik" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#">
              <img
                className="h-12 w-auto"
                src="https://cdn.gamma.app/tzl2sixgokxpy70/91b2b2d653754fe98cb52fd58716b121/original/csak-vizcsepp-01.jpg"
                alt="Tiszta Víz"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 font-semibold hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
