import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./components/SplashScreen";

import CandleCursor from "./components/CandleCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Beneficios from "./components/Beneficios";
import Productos from "./components/Productos";
import Footer from "./components/Footer";

function Home() {
  return (
    <main className="overflow-hidden bg-[#0f0f1a] text-white">
      <CandleCursor />

      <Navbar />
      <Hero />
      <Beneficios />
      <Productos />
      <Footer />
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <SplashScreen onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}