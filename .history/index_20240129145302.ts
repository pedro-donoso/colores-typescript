// Importaciones de módulos y tipos necesarios
import express, { Express, Request, Response } from "express";
import { randomUUID } from "crypto";
import { ColorRequest } from "./types/types";
import { ColorPalette } from "./types/types";
import bodyParser from 'body-parser'; // Importa bodyParser

// Creación de una instancia de la aplicación Express
const app: Express = express();

// Configuración de middleware para servir archivos estáticos y analizar cuerpos de solicitud codificados
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Arreglo para almacenar paletas de colores registradas
const colors: ColorPalette[] = [];

// Manejador de ruta para la solicitud POST '/register'
app.post("/register", (req: Request, res: Response) => {
  // Extraer datos de la solicitud de registro de color
  const { title, color1, color2, color3, color4 }: ColorRequest = req.body;

  // Crear un mapa para contar la ocurrencia de colores
  const colorMap: Map<string, number> = new Map();
  [color1, color2, color3, color4].forEach((color) => {
    colorMap.set(color, (colorMap.get(color) || 0) + 1);
  });

  // Comprobar si hay colores repetidos
  const hasRepeatedColors = Array.from(colorMap.values()).some(
    (count) => count > 1
  );

  // Redirigir a la página de error si hay colores repetidos, de lo contrario, registrar la paleta de colores
  if (hasRepeatedColors) {
    res.redirect("/error.html");
  } else {
    colors.push({
      id: randomUUID(), // Generar un ID único para la paleta de colores
      title,
      color1,
      color2,
      color3,
      color4,
    });
    res.redirect("/");
  }
});

app.get('/getAll', (req:Request, res:Response) =>{
    
})

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor iniciado...");
});
