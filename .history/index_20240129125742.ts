import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';
import { ColorRequest } from './types/types';

const app:Express = express();

app.use(express.static("./public"));
app.use(express.urlencoded);

const colors 

app.post('/register', (req:Request, res: Response) =>{
    const { title, color1, color2, color3, color4 }: ColorRequest = req.body;
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...")
})