import { ObjectId } from "mongodb";
import 'dotenv/config';

export const getAlunos = async (con) => await con.db("4INFO3").collection("Alunos").find({}).toArray();
export const getAluno = async (con, aluno) => await con.db("4INFO3").collection("Alunos").findOne({_id: new ObjectId(aluno.id)});

export const createAluno = async (con, aluno) => {
    await con.db("4INFO3").collection("Alunos").insertOne(aluno);

    return `Aluno ${aluno.nome} adicionado ao MongoDB!`;
}

export const deleteAluno = async (con, aluno) => await con.db("4INFO3").collection("Alunos").findOneAndDelete({_id: new ObjectId(aluno.id)});

export const attAluno = async (con, aluno) => {
    const _id = new ObjectId(aluno.id);
    delete aluno.id;
    await con.db("4INFO3").collection("Alunos").replaceOne({ _id }, aluno);

    return `Aluno ${aluno.nome} atualizado no MongoDB!`;
}
