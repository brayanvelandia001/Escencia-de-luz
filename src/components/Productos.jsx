import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Productos() {
  const velas = [
    { nombre: "Vela Lavanda", precio: 25000, aroma: "Relax" },
    { nombre: "Vela Vainilla", precio: 28000, aroma: "Dulce" },
    { nombre: "Vela Coco", precio: 30000, aroma: "Tropical" },
  ];

  const numeroWhatsApp = "573164334985";

  const comprar = (vela) => {
    const mensaje = `Hola 👋 quiero comprar la vela:
🕯️ ${vela.nombre}
🌸 Aroma: ${vela.aroma}
💰 Precio: $${vela.precio} COP`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="productos" className="py-28 bg-[#0b0b14] text-white relative overflow-hidden">

      {/* glow ambiente */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300/10 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-300/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Nuestras <span className="text-pink-300">velas artesanales</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {velas.map((vela, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >

              {/* glow card */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-300/10 to-purple-300/10 transition" />

              {/* imagen */}
              <div className="relative h-40 rounded-xl mb-4 bg-gradient-to-br from-pink-200/10 to-purple-200/10 flex items-center justify-center text-4xl">
                🕯️
              </div>

              <h3 className="relative font-bold text-xl">{vela.nombre}</h3>
              <p className="relative text-gray-400">{vela.aroma}</p>

              <p className="relative mt-2 font-semibold text-pink-300">
                ${vela.precio.toLocaleString()} COP
              </p>

              {/* BOTÓN PREMIUM */}
              <button
                onClick={() => comprar(vela)}
                className="relative mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl
                bg-white/5 border border-white/10 text-white
                hover:bg-white/10 hover:border-pink-300/40
                transition-all duration-300 backdrop-blur-xl"
              >
                <FaWhatsapp className="text-pink-300" />
                Comprar ahora
              </button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}