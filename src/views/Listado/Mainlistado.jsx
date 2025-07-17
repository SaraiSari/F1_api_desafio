// src/views/listado/MainListado.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const botones = [
  { nombre: "Pilotos", ruta: "/pilotos" },
  { nombre: "Constructores", ruta: "/constructores" },
  { nombre: "Circuitos", ruta: "/circuitos" },
  { nombre: "Temporadas", ruta: "/temporadas" },
  { nombre: "Resultados", ruta: "/resultados" },
];

function MainListado() {
  const navigate = useNavigate();

  return (
    <div className="p-6 min-h-screen bg-red-100 text-shadow-white">
      <h1 className="text-3xl font-bold mb-6 text-center">Aca podras encontrar los datos historicos de la Formula 1 que estes buscando</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {botones.map((btn, index) => (
          <button
            key={index}
            onClick={() => navigate(btn.ruta)}
            className="bg-red-400 text-blacks-900 font-semibold py-3 px-6 rounded hover:bg-yellow-300 transition"
          >
            {btn.nombre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainListado;
