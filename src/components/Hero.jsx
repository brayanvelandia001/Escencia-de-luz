import { FaFire } from "react-icons/fa";
import { useEffect, useState } from "react";

/* 🌫️ HUMO SUAVE (solo logo) */
function SmokeOverlay() {
  const [particles, setParticles] = useState([]);

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: Math.random(),
        left: random(30, 70),
        size: random(8, 18),
        duration: random(3, 6),
      };

      setParticles((prev) => [...prev.slice(-12), newParticle]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 bg-white/10 rounded-full blur-2xl"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `rise ${p.duration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* 🔥 BOTÓN PRO */
function CandleButton() {
  const scrollTo = () => {
    document.getElementById("productos")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTo}
      className="relative group px-8 py-4 rounded-2xl font-semibold text-black overflow-hidden bg-gradient-to-r from-orange-200 to-pink-300 shadow-lg hover:scale-105 transition"
    >
      <span className="absolute inset-0 bg-orange-300/20 opacity-0 group-hover:opacity-100 blur-xl transition" />
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-white/20 skew-x-12" />

      <span className="relative flex items-center justify-center gap-2">
        <FaFire />
        Encender experiencia
      </span>
    </button>
  );
}

/* 🕯️ HERO */
export default function Hero() {
  return (
    <div
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden text-white"
    >
      {/* 🌌 FONDO PREMIUM */}
      <div className="absolute inset-0 bg-[#07070f] overflow-hidden">

        {/* gradiente base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b14] via-[#0f0f1f] to-[#0b0b14]" />

        {/* luz cálida vela */}
        <div className="absolute w-[600px] h-[600px] bg-orange-300/10 blur-[160px] rounded-full top-[-200px] left-[-200px]" />

        {/* luz rosa suave */}
        <div className="absolute w-[500px] h-[500px] bg-pink-300/10 blur-[160px] rounded-full bottom-[-200px] right-[-150px]" />

        {/* profundidad central */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,150,0.08),transparent_60%)]" />

        {/* textura elegante */}
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_1px,_transparent_1px)] bg-[size:50px_50px]" />

        {/* viñeta cinematográfica */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">

        {/* LOGO CON HUMO */}
        <div className="mb-8 relative flex items-center justify-center">

          <SmokeOverlay />

          <div className="absolute w-56 h-56 bg-pink-300/20 blur-3xl rounded-full" />

          <img
            src="/logo.png"
            alt="Esencia de Luz"
            className="relative w-52 h-52 object-contain drop-shadow-2xl"
          />
        </div>

        {/* TITULO */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-orange-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          Velas que iluminan tu alma
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10">
          Esencia de Luz crea velas artesanales con aromas naturales que llenan tu espacio de calma, energía y armonía.
        </p>

        {/* BOTÓN */}
        <CandleButton />

      </div>
    </div>
  );
}