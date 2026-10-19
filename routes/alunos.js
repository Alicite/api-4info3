import express from "express";
import { 
    getAlunos, getAluno, createAluno, deleteAluno, attAluno 
} from "../controller/alunos.js";
import { autorizarUsuario } from "../middlewares/auth.js";

export const routerAlunos = express.Router()

routerAlunos.get('/', getAlunos);

routerAlunos.get('/:id', getAluno);

routerAlunos.post('/', autorizarUsuario, createAluno);

routerAlunos.delete('/:id', autorizarUsuario, deleteAluno)

routerAlunos.put('/:id', autorizarUsuario, attAluno);