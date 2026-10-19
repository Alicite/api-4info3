import express from 'express';
import { routerAlunos } from './routes/alunos.js';
import { routerAuth } from './routes/auth.js';
import { autenticarToken } from './middlewares/auth.js';

const app = express();
app.use(express.json());

app.use('/alunos', autenticarToken, routerAlunos);

app.use('/auth', routerAuth);

app.listen(3000, async () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});