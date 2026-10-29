import express from "express";
import { 
    getAlunos, getAluno, createAluno, deleteAluno, attAluno 
} from "../controller/alunos.js";
import { autorizarAdmin } from "../middlewares/auth.js";

export const routerAlunos = express.Router()

routerAlunos.get('/', getAlunos);

routerAlunos.get('/:id', getAluno);

routerAlunos.post('/', autorizarAdmin, createAluno);

routerAlunos.delete('/:id', autorizarAdmin, deleteAluno)

routerAlunos.put('/:id', autorizarAdmin, attAluno);