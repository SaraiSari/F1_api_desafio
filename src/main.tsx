import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Spinner from "./components/spinner/Spinner.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./style/theme.mui.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </StrictMode>
);

//Monta la app en el DOM.
// Usa modo estricto para detectar errores.
// Aplica un tema personalizado de MUI.
// Muestra un spinner de carga si hay componentes que se cargan de forma diferida.
// Usa React Router para manejar las rutas.
// Llama al componente App, donde está la lógica de navegación.