import bcrypt from "bcryptjs";
import * as dbUsuarios from "../db/usuarios.js";
import { manipularDB } from "../db/db.js";

export const createUsuario = async (req, res) => {
    const { email, senha, admin } = req.body;

    try {
        const usuarioExiste = await manipularDB({ email }, dbUsuarios.getUsuarioEmail)

        if (usuarioExiste) {
            return res.status(400).json("Este email já está cadastrado no banco de dados!")
        }

        const salt = await bcrypt.genSalt();
        const senhaCrypt = await bcrypt.hash(senha, salt)

        const resultado = await manipularDB(
            {email, senha: senhaCrypt, admin}, dbUsuarios.createUsuario
        );

        res.status(201).json(resultado)
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message);
    }
}