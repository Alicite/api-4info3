import express from "express";
import { createUsuario, loginUsuario } from "../controller/auth.js";

export const routerAuth = express.Router()

routerAuth.post('/registrar', createUsuario);

routerAuth.post('/login', loginUsuario);