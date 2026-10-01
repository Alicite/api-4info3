import express from 'express';
import { manipularDB } from './db.js';
import mysql from './mysql.js';
import mongo from './mongodb.js';

const app = express();
app.use(express.json())

app.get('/alunos', async (req, res) => {
    try {
        const alunosSQL = await manipularDB('mysql', {}, mysql.getUsuarios);
        const alunosMongo = await manipularDB('', {}, mongo.getUsuarios);

        if (!alunosSQL[0] && !alunosMongo[0]){
            res.status(404).json('Nenhum aluno encontrado no banco de dados!');
        } else {
            const resposta = { mysql: alunosSQL, mongo: alunosMongo};
            res.status(200).json(resposta)
        }

    } catch (e) {
        console.error(e.message)
    } 
})

app.get('/alunos/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const aluno = await manipularDB('', { id }, mongo.getUsuario);
        
        if (aluno == null) {
            res.status(404).json('Aluno não encontrado no banco de dados!');
        } else {
            res.status(200).json(aluno)
        }
    } catch (e) {
        console.error(e.message)
    } 
})

app.listen(3000, async () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})