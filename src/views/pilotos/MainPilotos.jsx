import React, { useState, useEffect } from 'react';
import CardPilotos from './components/CardPilotos';
import { getPilotosBySeason } from './api/piloto_api';
import SelectedSeason from './components/SelectedSeason';

function MainPilotos() {
    const [pilotos, setPilotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedSeason, setSelectedSeason] = useState('2025');

    useEffect(() => {
        getPilotosBySeason(selectedSeason)
            .then(data => {
                setPilotos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching pilotos:', error);
                setLoading(false);
            });
    }, [selectedSeason]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center">Pilotos F1 {selectedSeason} 🏎️</h1>
            <SelectedSeason
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
            />
            <p className="text-gray-400 mb-6">Aquí puedes ver todos los pilotos de la temporada {selectedSeason}.</p>
            {loading ? (
                <p className="text-center text-xl">Cargando pilotos...</p>
            ) : (
                <>
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4">Selecciona la temporada</h2>
                        <p className="text-gray-400 mb-6">Aquí puedes ver todos los pilotos de todas las temporadas</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {pilotos.map(piloto => (
                            <CardPilotos key={piloto.driverId} piloto={piloto} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default MainPilotos;
