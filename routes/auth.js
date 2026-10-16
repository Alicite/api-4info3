import express from "express";
import { createUsuario } from "../controller/auth.js";

export const routerAuth = express.Router()

routerAuth.post('/registrar', createUsuario);