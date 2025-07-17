// src/paginas/MainFiltro.jsx
import React, { useState } from "react";

export const MainFiltros = () => {
  const [categoria, setCategoria] = useState("drivers");

  // Datos estáticos para probar
  const datosPrueba = {
    drivers: [
      { givenName: "Lewis", familyName: "Hamilton", nationality: "British" },
      { givenName: "Max", familyName: "Verstappen", nationality: "Dutch" },
    ],
    constructors: [
      { name: "Mercedes" },
      { name: "Red Bull Racing" },
    ],
    circuits: [
      { circuitName: "Silverstone" },
      { circuitName: "Monza" },
    ],
    seasons: [
      { season: "2023" },
      { season: "2022" },
    ],
  };

  const datos = datosPrueba[categoria] || [];

  return (
    <div className="p-6 text-white bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">🔍 Filtrar Datos F1 - Prueba</h1>

      <select
        className="p-2 mb-4 w-full text-black rounded"
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
      >
        <option value="drivers">Pilotos</option>
        <option value="constructors">Constructores</option>
        <option value="circuits">Circuitos</option>
        <option value="seasons">Temporadas</option>
      </select>

      <ul className="mt-4 space-y-2">
        {datos.map((item, index) => (
          <li key={index} className="bg-gray-700 p-3 rounded">
            {categoria === "drivers" && (
              <>
                <strong>{item.givenName} {item.familyName}</strong> ({item.nationality})
              </>
            )}
            {categoria === "constructors" && <strong>{item.name}</strong>}
            {categoria === "circuits" && <strong>{item.circuitName}</strong>}
            {categoria === "seasons" && <strong>Temporada {item.season}</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
};
