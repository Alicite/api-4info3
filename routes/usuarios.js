import express from "express";
import { 
    getUsuarios, getUsuario, createUsuario, deleteUsuario, attUsuario 
} from "../controller/usuarios.js";
import { autorizarDiretor } from "../middlewares/auth.js";

export const routerUsuario = express.Router()

routerUsuario.get('/', getUsuarios);

routerUsuario.get('/:id', getUsuario);

routerUsuario.post('/', createUsuario);

routerUsuario.delete('/:id', autorizarDiretor, deleteUsuario)

routerUsuario.put('/:id', attUsuario);