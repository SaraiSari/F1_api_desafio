import React from 'react';

// Definimos el tipo de props que espera el componente
interface SelectedSeasonProps {
  selectedSeason: string;
  setSelectedSeason: (season: string) => void;
}

const SelectedSeason: React.FC<SelectedSeasonProps> = ({ selectedSeason, setSelectedSeason }) => {
  return (
    <div className="mb-6">
      <label htmlFor="season-select" className="block text-lg font-semibold mb-2">
        Selecciona la temporada:
      </label>
      <select
        id="season-select"
        value={selectedSeason}
        onChange={(e) => setSelectedSeason(e.target.value)}
        className="bg-gray-800 border border-gray-700 text-yellow-400 rounded-lg
                   focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
      >
        {Array.from({ length: 11 }, (_, i) => {
          const year = 2025 - i;
          return (
            <option key={year} value={year.toString()}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectedSeason;
