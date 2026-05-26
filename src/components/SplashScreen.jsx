import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish?.(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-[#0b0b14] overflow-hidden text-white">

      {/* glow ambiente */}
      <div className="absolute w-[600px] h-[600px] bg-orange-300/10 blur-[160px] rounded-full" />
      <div className="absolute w-[500px] h-[500px] bg-pink-300/10 blur-[160px] rounded-full" />

      {/* textura */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_rgba(255,200,150,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 text-center flex flex-col items-center">

        {/* LOGO */}
        <div className="relative mb-10">
          <div
            className="absolute inset-0 bg-pink-300/20 blur-3xl rounded-full transition-all duration-500"
            style={{
              transform: `scale(${1 + progress / 150})`,
              opacity: progress / 100,
            }}
          />

          <img
            src="/logo.png"
            alt="Esencia de Luz"
            className="w-44 h-44 md:w-52 md:h-52 object-contain relative transition-all duration-300"
            style={{
              filter: `drop-shadow(0 0 ${progress / 10}px rgba(255,180,120,0.5))`,
              transform: `scale(${1 + progress / 300})`,
            }}
          />
        </div>

        {/* TITULO */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-orange-200 via-pink-300 to-purple-300 bg-clip-text text-transparent">
          Encendiendo Esencia de Luz
        </h1>

        {/* 🕯️ VELAS LIMPIAS */}
        <div className="flex gap-6 items-end mb-10">

          {[1, 2, 3, 4, 5].map((i) => {
            const active = progress > i * 18;

            return (
              <div key={i} className="flex flex-col items-center">

                {/* vela */}
                <div
                  className={`text-3xl transition-all duration-500 ${
                    active
                      ? "opacity-100 scale-110 drop-shadow-[0_0_12px_rgba(255,180,120,0.5)]"
                      : "opacity-30"
                  }`}
                >
                  🕯️
                </div>

                {/* sombra real (no barra) */}
                <div
                  className={`w-8 h-2 rounded-full blur-md transition-all duration-500 ${
                    active ? "bg-orange-300/20" : "bg-black/20"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* PROGRESS */}
        <div className="w-72 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-200 via-pink-300 to-purple-300 transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-6 text-gray-400 text-sm animate-pulse">
          Preparando aroma, luz y ambiente...
        </p>
      </div>
    </div>
  );
}