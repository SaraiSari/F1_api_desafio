import React, { useState, useEffect } from "react";
import CardResultados from "./components/CardResultados";
import { getResultadosBySeason } from "./api/resultados_api";
import SelectedSeason from "./components/SelectedSeason";

function MainResultados() {
    const [resultados, setResultados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSeason, setSelectedSeason] = useState('2025');

    useEffect(() => {
        getResultadosBySeason(selectedSeason)
            .then(data => {
                setResultados(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching resultados:', error);
                setLoading(false);
            });
    }, [selectedSeason]);

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center">Resultados F1 {selectedSeason} 🏁</h1>
            <SelectedSeason
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
            />
            <p className="text-gray-400 mb-6">Aquí puedes ver todos los resultados de la temporada {selectedSeason}.</p>
            {loading ? (
                <p className="text-center text-xl">Cargando resultados...</p>
            ) : (
                <>
                    <div>
                        <h2 className="text-3xl font-bold text-red-600 mb-4">Selecciona la temporada</h2>
                        <p className="text-gray-400 mb-6">Aquí puedes ver todos los resultados de todas las temporadas</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {resultados.map(resultado => (
                            <CardResultados key={resultado.driverId} resultado={resultado} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default MainResultados;
