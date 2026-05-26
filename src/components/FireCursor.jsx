import { useEffect, useState } from "react";

export default function FireCursor() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 10 + 6,
        life: 1,
      };

      setTrail((prev) => [...prev.slice(-25), newParticle]);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none z-[999999]">
      {trail.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full blur-sm"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,200,80,1) 0%, rgba(255,80,0,0.7) 40%, rgba(0,0,0,0) 70%)",
            animation: "fireFade 0.8s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}