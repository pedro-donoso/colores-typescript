import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';

const app:Express = express();

app.use(express.static)

app.get('/', (req:Request, res: Response) =>{
    res.send('Hola mundo');
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...")
})