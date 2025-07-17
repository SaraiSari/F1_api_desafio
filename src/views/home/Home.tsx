import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="flex flex-col h-screen lg:pt-14 flex-1 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/f1fondo.jpg')" }}
    >
      <div className="flex flex-col justify-center h-full space-y-12 px-6 text-left">
        <div className="text-white text-3xl font-bold">Inicio</div>
        <h1 className=" text-white text-4xl font-bold">
          Bienvenido a la Página de Datos Históricos de la Fórmula 1
        </h1>
        <p className="text-white text-lg">
          Aquí encontrarás información detallada sobre temporadas, pilotos, constructores y circuitos de la Fórmula 1.
        </p>
      </div>
    </div>
  );
};



export default Home;