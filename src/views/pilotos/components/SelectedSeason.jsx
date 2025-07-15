import React from 'react'

function SelectedSeason({ selectedSeason, setSelectedSeason }) {
  return (
            <div className="mb-6">
                <label htmlFor="season-select" className="block text-lg font-semibold mb-2">Selecciona la temporada:</label>
                <select
                    id="season-select"
                    value={selectedSeason}
                    onChange={(e) => setSelectedSeason(e.target.value)}
                    className="bg-gray-800 border border-gray-700 text-yellow-400 rounded-lg
                focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5"
                >
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
            </div>
  )
}

export default SelectedSeason
