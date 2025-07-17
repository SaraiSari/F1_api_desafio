import React from 'react'

function CardResultados({ resultado }) {
    // Utilidades para mostrar valores por defecto si falta info
    const safe = (val, fallback = 'No disponible') => val !== undefined && val !== null && val !== '' ? val : fallback;
    return (
        <div
            key={resultado.driverId + '-' + resultado.round + '-' + resultado.position}
            className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-700"
        >
            <h2 className="text-2xl font-bold text-red-600 mb-2">{safe(resultado.raceName)}</h2>
            <p className="mb-1"><span className="font-semibold">Circuito:</span> {resultado.circuitUrl ? (<a href={resultado.circuitUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{safe(resultado.circuitName)}</a>) : safe(resultado.circuitName)}</p>
            <p className="mb-1"><span className="font-semibold">Ubicación:</span> {safe(resultado.location)}</p>
            <p className="mb-1"><span className="font-semibold">Fecha:</span> {safe(resultado.date)} {resultado.time ? `- ${resultado.time}` : ''}</p>
            <hr className="my-2 border-gray-600" />
            <p className="mb-1"><span className="font-semibold">Posición:</span> {safe(resultado.position)} {resultado.positionText ? `(${resultado.positionText})` : ''}</p>
            <p className="mb-1"><span className="font-semibold">Puntos:</span> {safe(resultado.points)}</p>
            <p className="mb-1"><span className="font-semibold">Piloto:</span> {resultado.driverUrl ? (<a href={resultado.driverUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{safe(resultado.givenName)} {safe(resultado.familyName)}</a>) : `${safe(resultado.givenName)} ${safe(resultado.familyName)}`} ({safe(resultado.driverNationality)})</p>
            <p className="mb-1"><span className="font-semibold">Constructor:</span> {resultado.constructorUrl ? (<a href={resultado.constructorUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{safe(resultado.constructorName)}</a>) : safe(resultado.constructorName)} {resultado.constructorNationality ? `(${resultado.constructorNationality})` : ''}</p>
            <p className="mb-1"><span className="font-semibold">Largada:</span> {safe(resultado.grid)}</p>
            <p className="mb-1"><span className="font-semibold">Vueltas:</span> {safe(resultado.laps)}</p>
            <p className="mb-1"><span className="font-semibold">Estado:</span> {safe(resultado.status)}</p>
            {resultado.timeResult && (
                <p className="mb-1"><span className="font-semibold">Tiempo:</span> {resultado.timeResult}</p>
            )}
            {resultado.fastestLap && resultado.fastestLap.time && (
                <p className="mb-1"><span className="font-semibold">Vuelta rápida:</span> {resultado.fastestLap.time} (Vuelta {resultado.fastestLap.lap}, Rank {resultado.fastestLap.rank})</p>
            )}
            {resultado.raceUrl && (
                <a
                    href={resultado.raceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-semibold mt-2"
                >
                    Wikipedia GP
                </a>
            )}
        </div>
    )
}

export default CardResultados
