import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';

const app:Express = express();

app.use(express.static("./public"));
app.use(express.urlencoded);

app.post('/register', (req:Request, res: Response) =>{
    const {}:C
})

app.listen(3000, ()=>{
    console.log("Servidor iniciado...")
})