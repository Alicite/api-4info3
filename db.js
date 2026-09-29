import mysql from 'mysql2/promise';

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

export const manipularDB = async (user, callback) => {
    let resultado;
    try {
        const con = await conexaoMySQL();
        resultado = await callback(con, user);
        con.close();
    } catch (e) {
        resultado = `Ocorreu um erro: ${e.message}`;
    } finally {
        return resultado;
    }
}