import { ObjectId } from "mongodb";
import 'dotenv/config';
import { manipularDB } from './db.js'


const getUsuarios = async (con) => await con.db("4INFO3").collection("Alunos").find({}).toArray();
const getUsuario = async (con, user) => await con.db("4INFO3").collection("Alunos").findOne({_id: new ObjectId(user.id)});

const createUsuario = async (con, user) => {
    await con.db("4INFO3").collection("Alunos").insertOne(user);

    return `Usuário ${user.nome} adicionado ao MongoDB!`;
}

console.log(await manipularDB('', {nome: "Guilherme", email: "guilherme@gmail.com"}, createUsuario));