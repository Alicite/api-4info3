import express from 'express';
import { routerAlunos } from './routes/alunos.js';

const app = express();
app.use(express.json());

app.use('/alunos', routerAlunos)

app.listen(3000, async () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});