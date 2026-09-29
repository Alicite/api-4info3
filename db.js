import { MongoClient } from "mongodb";
import mysql from 'mysql2/promise';
import 'dotenv/config';

const conexaoMySQL = async () => {
    const con = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: '4info3'
    });

    return con;
}

const conexaoMongoDB = async () => {
    const URI = process.env.MONGO;
    const client = new MongoClient(URI);
    const con = await client.connect();

    return con;
}

export const manipularDB = async (db, user, callback) => {
    let resultado;
    try {
        const con = db == "mysql" ? await conexaoMySQL() : await conexaoMongoDB();
        resultado = await callback(con, user);
        con.close();
    } catch (e) {
        resultado = `Ocorreu um erro: ${e.message}`;
    } finally {
        return resultado;
    }
}