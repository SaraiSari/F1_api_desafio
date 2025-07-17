import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "./Loadable";


const MainLayout = Loadable(lazy(() => import("../layouts/dashboardLayout/MainLayout")));
const Home = Loadable(lazy(() => import("../views/home/Home")));
const MainPilotos = Loadable(lazy(() => import("../views/pilotos/MainPilotos")));
const MainListado = Loadable(lazy(() => import("../views/Listado/Mainlistado")));
const MainFiltros = Loadable(lazy(() => import("../views/paginas/MainFiltros")));
const MainApi = Loadable(lazy(() => import("../views/paginas/MainApi")));
const MainTeam = Loadable(lazy(() => import("../views/paginas/MainTeam")));


const Router = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "listado",
        element: <MainListado />, // 👈 ESTA LÍNEA ESTÁ BIEN
      },
      {
        path: "pilotos",
        element: <MainPilotos />,
      },
      {
        path: "filtros",
        element: <MainFiltros />,
      },
      {
        path: "Api",
        element: <MainApi />,
      },
      {
        path: "team",
        element: <MainTeam />,
      },

      
    ],
  },
  {
    path: "*",
    element: <Navigate to="/Home" />,
  },
];

export default Router;

