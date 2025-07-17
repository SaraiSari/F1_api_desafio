import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Loadable from "./Loadable";

/* ***Layouts**** */
const BlankLayout = Loadable(
  lazy(() => import("../layouts/blank-layout/BlankLayout"))
);
const MainLayout = Loadable(
  lazy(() => import("../layouts/dashboardLayout/MainLayout"))
);

/* ***End Layouts**** */
const Error = Loadable(lazy(() => import("../views/authentication/Error")));

/* ****Pages***** */
const Home = Loadable(lazy(() => import("../views/home/Home")));

const MainConstructores = Loadable(
  lazy(() => import("../views/constructores/MainConstructores.jsx"))
);
const MainCarreras = Loadable(
  lazy(() => import("../views/carreras/MainCarreras.jsx"))
);
const MainPilotos = Loadable(
  lazy(() => import("../views/pilotos/MainPilotos.jsx"))
);
const MainResultados = Loadable(
  lazy(() => import("../views/resultados/MainResultados.jsx"))
);

/* ****End Pages***** */

const Router = [
  {
    path: "/error",
    element: <BlankLayout />,
    children: [{ path: "404", element: <Error /> }],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        exact: true,
        element: <Home />,
      },
      {
        path: "home",
        exact: true,
        element: <Home />,
      },
      {
        path: "pilotos",
        exact: true,
        element: <MainPilotos />,
      },
      {
        path: "constructores",
        exact: true,
        element: <MainConstructores />,
      },
      {
        path: "resultados",
        exact: true,
        element: <MainResultados />,
      },
      {
        path: "carreras",
        exact: true,
        element: <MainCarreras />,
      },
//      { path: "*", element: <Navigate to="/error/404" /> },
    ],
  },
  {
    path: "/error",
    element: <BlankLayout />,
    children: [
      { path: "*", element: <Navigate to="/error/404" /> },
      { path: "404", exact: true, element: <Error /> },
    ],
  },
];

export default Router;
