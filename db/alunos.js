import { ObjectId } from "mongodb";
import 'dotenv/config';

const getAlunos = async (con) => await con.db("4INFO3").collection("Alunos").find({}).toArray();
const getAluno = async (con, user) => await con.db("4INFO3").collection("Alunos").findOne({_id: new ObjectId(user.id)});

const createAluno = async (con, user) => {
    await con.db("4INFO3").collection("Alunos").insertOne(user);

    return `Aluno ${user.nome} adicionado ao MongoDB!`;
}

const deleteAluno = async (con, user) => await con.db("4INFO3").collection("Alunos").findOneAndDelete({_id: new ObjectId(user.id)});

const attAluno = async (con, user) => {
    const _id = new ObjectId(user.id);
    delete user.id;
    await con.db("4INFO3").collection("Alunos").replaceOne({ _id }, user);

    return `Aluno ${user.nome} atualizado no MongoDB!`;
}

const mongo = { getAlunos, getAluno, createAluno, deleteAluno, attAluno };
export default mongo;