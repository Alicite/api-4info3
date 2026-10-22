import express from "express";
import { 
    getAlunos, getAluno, createAluno, deleteAluno, attAluno 
} from "../controller/alunos.js";
import { verificarId } from "../middlewares/auth.js";

export const routerAlunos = express.Router()

routerAlunos.get('/', getAlunos);

routerAlunos.get('/:id', getAluno);

routerAlunos.post('/', verificarId, createAluno);

routerAlunos.delete('/:id', verificarId, deleteAluno)

routerAlunos.put('/:id', verificarId, attAluno);