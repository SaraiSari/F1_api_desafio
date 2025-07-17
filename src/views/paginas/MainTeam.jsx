
import React from "react";

export const MainTeam = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-900 bg-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Sobre Nosotros</h1>
      
      <p className="mb-4 text-lg leading-relaxed">
        En esta página web ofrecemos una plataforma completa para los fanáticos
        de la Fórmula 1. Aquí puedes filtrar datos importantes como pilotos,
        constructores, circuitos y temporadas, todo con información actualizada
        y fácil de usar.
      </p>
      
      <p className="mb-4 text-lg leading-relaxed">
        Nuestro objetivo es brindarte la mejor experiencia para explorar el
        apasionante mundo de la F1, con datos confiables y visualizaciones
        claras.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué puedes hacer aquí?</h2>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Buscar y filtrar pilotos según sus temporadas y nacionalidades.</li>
        <li>Conocer detalles de los constructores y sus logros.</li>
        <li>Explorar los circuitos emblemáticos del calendario de F1.</li>
        <li>Revisar temporadas pasadas para analizar estadísticas y resultados.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Nuestro equipo</h2>
      <p className="text-lg leading-relaxed">
        Somos un grupo de entusiastas de la Fórmula 1 y desarrolladores que
        trabajan para crear una experiencia web sencilla, rápida y útil para
        todos los aficionados.
      </p>
    </div>
  );
};
