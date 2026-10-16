import express from 'express';
import bcrypt from 'bcryptjs';
import { routerAlunos } from './routes/alunos.js';
import { routerAuth } from './routes/auth.js';
import { manipularDB } from './db/db.js';
import { getUsuarioEmail, createUsuario } from './db/usuarios.js';

const app = express();
app.use(express.json());

app.use('/alunos', routerAlunos);

app.use('/auth', routerAuth);

app.listen(3000, async () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});