import Router from "./routes/Routes";

import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(Router);
    <Routes>
      <Route path="/listado/pilotos" element={<pilotos/>} />
      <Route path="/listado/constructores" element={<constructores/>} />
      <Route path="/listado/circuitos" element={<circuitos />} />
      <Route path="/listado/temporadas" element={<temporadas/>} />
      <Route path="/listado/resultados" element={<resultados/>} />
      

    </Routes>

  return <>{routing}</>;
}

export default App;

//Este código configura el componente principal App de una aplicación React. 
// Utiliza useRoutes() para manejar el enrutamiento interno,
//  según las rutas definidas en ./routes/Routes. Así, dependiendo de la URL,
//  se renderizará el componente correspondiente dentro del return.

import { Routes, Route } from "react-router-dom";
