import express, {Express, Request, Response} from  'express';
import { randomUUID } from 'crypto';

const app:Express = express();

app.get('/')