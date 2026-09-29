import { ObjectId } from "mongodb";
import 'dotenv/config';
import { manipularDB } from './db.js'


const getUsuarios = async (con) => await con.db("4INFO3").collection("Alunos").find({}).toArray();
const getUsuario = async (con, user) => await con.db("4INFO3").collection("Alunos").findOne({_id: new ObjectId(user.id)});

console.log(await manipularDB('', {id: '6ab5b5726f23110b2e102318'}, getUsuario));