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
            res.status(404).json('Nenhum aluno encontrado nos bancos de dados!');
        } else {
            const resposta = { mysql: alunosSQL, mongo: alunosMongo};
            res.status(200).json(resposta)
        }

    } catch (e) {
        console.error(e.message)
    } 
})

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`)
})