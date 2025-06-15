import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
// function getRandomOrangeGradient(): string {
//   // Genera un naranja aleatorio (matices entre rojo y amarillo)
//   const r = Math.floor(200 + Math.random() * 55); 
//   const g = Math.floor(100 + Math.random() * 100); // entre 100 y 200
//   const b = Math.floor(0 + Math.random() * 50); 

//   const orange = `rgb(${r}, ${g}, ${b})`;

//   // Devuelve el gradiente lineal
//   return `radial-gradient(circle, #000000, ${orange})`;
// }



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="sfondo font-font1">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
