import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {

  const whatsapp = "573164334985";
  const mensaje = "Hola! quiero información sobre las velas de Esencia de Luz";
  const waLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

  return (
    <footer 
    id="contacto"
    className="relative overflow-hidden py-20 bg-[#0b0b14] text-gray-300 border-t border-white/10">

      {/* GLOW AMBIENTE */}
      <div className="absolute w-[450px] h-[450px] bg-pink-300/10 blur-[140px] rounded-full bottom-[-150px] left-[-150px]" />
      <div className="absolute w-[450px] h-[450px] bg-purple-300/10 blur-[140px] rounded-full top-[-150px] right-[-150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

        {/* BRAND */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-transparent bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">
          Esencia de Luz 🕯️
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          Velas artesanales creadas para iluminar tu espacio, armonizar tu energía y transformar tu ambiente.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* WHATSAPP */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:border-pink-300/30 transition"
          >
            <FaWhatsapp className="text-2xl text-pink-300 mx-auto mb-3 group-hover:scale-110 transition" />
            <p className="font-semibold">WhatsApp</p>
            <span className="text-sm text-gray-500">Cotiza tu vela</span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/esenciadeluz_bga/"
            target="_blank"
            rel="noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl hover:bg-white/10 hover:border-purple-300/30 transition"
          >
            <FaInstagram className="text-2xl text-purple-300 mx-auto mb-3 group-hover:scale-110 transition" />
            <p className="font-semibold">@esenciadeluz_bga</p>
            <span className="text-sm text-gray-500">Síguenos</span>
          </a>

          {/* LOCATION */}
          <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <FaMapMarkerAlt className="text-2xl text-orange-300 mx-auto mb-3" />
            <p className="font-semibold">Ubicación</p>
            <span className="text-sm text-gray-500">Bucaramanga, Colombia</span>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* COPYRIGHT */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-300 font-semibold">Esencia de Luz</span> — Todos los derechos reservados
        </p>

        <p className="text-xs mt-2 text-gray-600">
          Desarrollado por <span className="text-purple-300 font-semibold">Velandia Soft</span>
        </p>

      </div>
    </footer>
  );
}