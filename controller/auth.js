import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as dbUsuarios from "../db/usuarios.js";
import { manipularDB } from "../db/db.js";
import 'dotenv/config';

const SECRET = process.env.JWT_SECRET;

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

export const loginUsuario = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await manipularDB({ email }, dbUsuarios.getUsuarioEmail);
    
        if (!usuario) {
            return res.status(400).json("Email ou senha incorretos!")
        }
    
        const senhaValida = await bcrypt.compare(senha, usuario.senha);
    
        if (!senhaValida) {
            return res.status(400).json("Email ou senha incorretos!")
        }
    
        const token = jwt.sign(
            { id: usuario._id, email: usuario.email, admin: usuario.admin},
            SECRET,
            { expiresIn: '1h' }
        )
    
        res.status(200).json({ token, mensagem: "Login efetuado com sucesso!"})
    } catch (e) {
        res.status(500).json("Erro interno! Tente novamente em alguns instantes!")
    }
}