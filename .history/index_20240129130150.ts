import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';
import { ColorRequest } from './types/types';

const app:Express = express();

app.use(express.static("./public"));
app.use(express.urlencoded);

const colors: ColorPalette[] = [];

app.post('/register', (req:Request, res: Response) =>{
    const { title, color1, color2, color3, color4 }: ColorRequest = req.body;

    const values = [color1,color2,color3,color4];
    const map:Map<string,number> = new Map();

    

})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...")
})