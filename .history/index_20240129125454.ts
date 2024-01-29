import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';
import { ColorRequest } from './types/types';

const app:Express = express();

app.use(express.static("./public"));
app.use(express.urlencoded);

app.post('/register', (req:Request, res: Response) =>{
    const {}:ColorRequest
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...")
})