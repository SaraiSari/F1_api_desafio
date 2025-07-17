/**
 * Menu basico para el layout de la aplicacion desarrollada por Diego Monsalves
 */

import { Avatar, Box, Typography } from "@mui/material";
import logo from "../../../assets/EII_logo.png";
import DrawerNav from "./DrawerNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderGPIProps {
  isMobile?: boolean;
}

/**
 * Componente que contiene el menu de la aplicacion
 * @param isMobile Indica si el menu es para movil o no
 * @returns JSX.Element
 *
 * @example
 * <HeaderGPI isMobile={true} />
 * <HeaderGPI />
 *
 * @version 1.0.0
 * */

function HeaderGPI({ isMobile = false }: HeaderGPIProps) {
  const actionsMenu = [
    {
      name: "Listado de datos historicos",
      href: "/listado", // Path to navigate
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
          />
        </svg>
      ), // Icon heroicons
    },
    {
      name: "Busqueda de datos",
      href: "/Filtros", // Path to navigate
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      ), // Icon
    },
    {
      name: "Informacion de la Api",
      href: "/Api", // Path to navigate
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 12h9m-9-3h9m-4.5 9l-3-3H6a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 016 3h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0118 15h-2.25l-3 3z"
          />
        </svg>
      ), // Icon
    },
    {
      name: "Nuestro equipo",
      href: "/Team", // Path to navigate
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0z"
          />  
            {/* Círculo a la izquierda (cabeza extra) */}
            <circle cx="3" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            
            {/* Círculo a la derecha (cabeza extra) */}
            <circle cx="21" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
          
        </svg>
      ), // Icon
    },
  ];
  const navigate = useNavigate();
  const openMenuAction = () => {
    setOpenMenu(true);
  };
  const closeMenuAction = () => {
    setOpenMenu(false);
  };

  const redirectTo = (path: string) => {
    navigate(path);
  };

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {isMobile ? (
        <nav>
          <div className="h-16 w-full bg-(--color-darkgreen)">
            <div className="flex w-full h-full items-center justify-end p-4 py-0">
              <div
                onClick={openMenuAction}
                className="cursor-pointer p-2 text-white hover:bg-white rounded-full hover:bg-opacity-10 hover:text-(--color-darkgreen)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <DrawerNav
            closeMenuAction={closeMenuAction}
            openMenu={openMenu}
            menuItems={actionsMenu}
          ></DrawerNav>
        </nav>
      ) : (
        <nav className="flex flex-col bg-(--color-darkgreen) w-80 h-full overflow-auto">
          <div className="flex flex-col justify-between p-4 h-full">
            <div className="flex flex-col items-center pt-10 justify-center gap-2">
              <Box
                width="100%"
                gap="16px"
                className="flex flex-col justify-center items-center"
              >
                <img alt="logo" className="h-20 brightness-0 invert" src={logo} />
                <Typography
                  fontSize={36}
                  lineHeight={"32px"}
                  letterSpacing={"-0.3px"}
                  fontWeight={600}
                  color="#ffc400"
                >
                  Datos Historicos de la Formula 1
                </Typography>
              </Box>
              <Box className="flex flex-col pt-16 p-6 gap-6 w-full">
                {actionsMenu.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => redirectTo(item.href)}
                    className="group flex items-center gap-4 p-3 border-2 rounded-lg border-transparent hover:border-[#FFFFFF] hover:border-opacity-100 cursor-pointer"
                  >
                    <div className="text-white group-hover:text-[#FFFFFF]">
                      {item.icon}
                    </div>
                    <Typography
                      fontSize={18}
                      lineHeight={"24px"}
                      fontWeight={400}
                      className="text-[#ffd000] group-hover:text-[#FFFFFF]"
                    >
                      {item.name}
                    </Typography>
                  </div>
                ))}
              </Box>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}

export default HeaderGPI;

//botones
const actionsMenu = [
  {
    name: "Listado",
    icon: <svg>...</svg>,
    children: [
      { name: "Pilotos", href: "/listado/pilotos" },
      { name: "Constructores", href: "/listado/constructores" },
      { name: "Circuitos", href: "/listado/circuitos" },
      { name: "Temporadas", href: "/listado/temporadas" },
      { name: "Resultados", href: "/listado/resultados" },
    ],
  },
  // Otros ítems principales
];
{actionsMenu.map((item, index) => (
  <div key={index}>
    {/* Botón principal */}
    <div onClick={() => item.href && redirectTo(item.href)} className="menu-button">
      {item.name}
    </div>

    {/* Submenú solo si existen hijos */}
    {item.children && (
      <div className="submenu">
        {item.children.map((subItem, subIndex) => (
          <div key={subIndex} onClick={() => redirectTo(subItem.href)} className="submenu-item">
            {subItem.name}
          </div>
        ))}
      </div>
    )}
  </div>
))}