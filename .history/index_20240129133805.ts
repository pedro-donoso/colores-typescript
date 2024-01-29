import express, {Express, Request, Response} from 'express';
import { randomUUID } from 'crypto';
import { ColorRequest } from './types/types';
import { ColorPalette } from './t'

const app: Express = express();

app.use(express.static("./public"));
app.use(express.urlencoded);

const colors: ColorPalette[] = [];

app.post('/register', (req: Request, res: Response) => {
    const { title, color1, color2, color3, color4 }: ColorRequest = req.body;

    // Procesamiento de los datos de la solicitud y validación

    if (/* Validación de colores repetidos */) {
        res.redirect("/error.html");
    } else {
        colors.push({
            id: randomUUID(),
            title,
            color1,
            color2,
            color3,
            color4,
        });
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("Servidor iniciado...");
});
