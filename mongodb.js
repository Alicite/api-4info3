import { ObjectId } from "mongodb";
import 'dotenv/config';
import { manipularDB } from './db.js'


const getUsuarios = async (con) => await con.db("4INFO3").collection("Alunos").find({}).toArray();
const getUsuario = async (con, user) => await con.db("4INFO3").collection("Alunos").findOne({_id: new ObjectId(user.id)});

const createUsuario = async (con, user) => {
    await con.db("4INFO3").collection("Alunos").insertOne(user);

    return `Usuário ${user.nome} adicionado ao MongoDB!`;
}

const deleteUsuario = async (con, user) => {
    await con.db("4INFO3").collection("Alunos").findOneAndDelete({_id: new ObjectId(user.id)});

    return `Usuário ${user.id} deletado do MongoDB!`
}

console.log(await manipularDB('', {id: '6ab5b5726f23110b2e102318'}, deleteUsuario));