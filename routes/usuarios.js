import express from "express";
import { 
    getUsuarios, getUsuario, createUsuario, deleteUsuario, attUsuario 
} from "../controller/usuarios.js";
import { autorizarDiretor, verificarId } from "../middlewares/auth.js";

export const routerUsuario = express.Router()

routerUsuario.get('/', autorizarDiretor, getUsuarios);

routerUsuario.get('/:id', verificarId, getUsuario);

routerUsuario.post('/', autorizarDiretor, createUsuario);

routerUsuario.delete('/:id', autorizarDiretor, deleteUsuario)

routerUsuario.put('/:id', verificarId, attUsuario);