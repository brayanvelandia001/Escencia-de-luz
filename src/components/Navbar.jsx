import { FaHome, FaSpa, FaShoppingBag, FaEnvelope } from "react-icons/fa";

function CandleIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      className="text-pink-300"
    >
      <path d="M12 2C10 4 10 6 12 8C14 6 14 4 12 2Z" fill="currentColor" />
      <path
        d="M8 10H16V20C16 21.1 15.1 22 14 22H10C8.9 22 8 21.1 8 20V10Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

export default function Navbar() {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-[#0b0b14]/70 border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* BRAND */}
        <div
          onClick={() => scrollTo("inicio")}
          className="flex items-center gap-3 relative cursor-pointer"
        >
          <div className="absolute w-10 h-10 bg-pink-300/20 blur-xl rounded-full" />
          <CandleIcon />

          <div className="flex flex-col leading-tight">
            <span className="text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text font-bold text-lg">
              Esencia de Luz
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest">
              Ilumina con intención
            </span>
          </div>
        </div>

        {/* NAV */}
        <div className="flex items-center gap-8 text-gray-300">

          {/* INICIO */}
          <button onClick={() => scrollTo("inicio")}
            className="group flex flex-col items-center hover:text-pink-300 transition">
            <FaHome className="text-xl group-hover:scale-110 transition" />
            <span className="text-[10px] opacity-70 group-hover:opacity-100">
              Inicio
            </span>
          </button>

          {/* BENEFICIOS */}
          <button onClick={() => scrollTo("beneficios")}
            className="group flex flex-col items-center hover:text-purple-300 transition">
            <FaSpa className="text-xl group-hover:scale-110 transition" />
            <span className="text-[10px] opacity-70 group-hover:opacity-100">
              Calma
            </span>
          </button>

          {/* TIENDA */}
          <button onClick={() => scrollTo("productos")}
            className="group flex flex-col items-center hover:text-orange-300 transition">
            <FaShoppingBag className="text-xl group-hover:scale-110 transition" />
            <span className="text-[10px] opacity-70 group-hover:opacity-100">
              Tienda
            </span>
          </button>

          {/* CONTACTO (MEJORADO) */}
          <button onClick={() => scrollTo("contacto")}
            className="group flex flex-col items-center hover:text-pink-300 transition">

            <FaEnvelope className="text-xl group-hover:scale-110 transition" />

            <span className="text-[10px] opacity-70 group-hover:opacity-100">
              Contacto
            </span>

          </button>

        </div>
      </div>
    </nav>
  );
}