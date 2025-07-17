import React from 'react';

// Definimos el tipo de datos del piloto
interface Piloto {
  driverId: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
}

// Tipamos las props del componente
interface CardPilotosProps {
  piloto: Piloto;
}

const CardPilotos: React.FC<CardPilotosProps> = ({ piloto }) => {
  return (
    <div
      key={piloto.driverId}
      className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-700"
    >
      <h2 className="text-2xl font-bold text-yellow-400 mb-2">
        {piloto.givenName} {piloto.familyName}
      </h2>
      <p className="mb-1">
        <span className="font-semibold">Nacimiento:</span> {piloto.dateOfBirth}
      </p>
      <p className="mb-3">
        <span className="font-semibold">Nacionalidad:</span> {piloto.nationality}
      </p>
      <a
        href={piloto.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded hover:bg-yellow-300 font-semibold"
      >
        Wikipedia
      </a>
    </div>
  );
};

export default CardPilotos;
