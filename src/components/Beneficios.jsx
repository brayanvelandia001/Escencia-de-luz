import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSpa, FaLeaf, FaHome } from "react-icons/fa";

export default function Beneficios() {
  const [selected, setSelected] = useState(null);

  const beneficios = [
    {
      icon: <FaSpa className="text-pink-300" />,
      title: "Relajación profunda",
      desc: "Reduce el estrés y mejora tu estado emocional con aromas suaves.",
      extra:
        "Las velas ayudan a crear un ambiente de pausa mental, ideal para meditación o descanso profundo 🕯️",
    },
    {
      icon: <FaLeaf className="text-green-300" />,
      title: "Aromaterapia natural",
      desc: "Fragancias que equilibran tu energía y bienestar.",
      extra:
        "Los aceites naturales estimulan emociones positivas y mejoran la concentración 🌿",
    },
    {
      icon: <FaHome className="text-orange-300" />,
      title: "Ambiente aesthetic",
      desc: "Decora tu hogar con un estilo cálido y elegante.",
      extra:
        "Transforma cualquier espacio en un lugar acogedor, suave y armonioso ✨",
    },
  ];

  return (
    <section 
    id="beneficios"
    className="relative py-24 bg-[#0b0b14] text-white overflow-hidden">

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300/10 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-orange-300/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto text-center px-6 relative z-10">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
          Beneficios de nuestras{" "}
          <span className="text-pink-300">velas</span>
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {beneficios.map((b, i) => (
            <div
              key={i}
              onClick={() => setSelected(b)}
              className="cursor-pointer group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="text-3xl mb-4 flex justify-center group-hover:scale-110 transition">
                {b.icon}
              </div>

              <h3 className="font-semibold text-xl mb-2">{b.title}</h3>
              <p className="text-gray-400 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-[#141424] border border-white/10 p-8 rounded-2xl max-w-md text-center shadow-2xl"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {selected.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-pink-300">
                {selected.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {selected.desc}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {selected.extra}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-6 py-2 rounded-xl bg-pink-300 text-black font-semibold hover:scale-105 transition"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}