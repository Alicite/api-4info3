import mysql from 'mysql2/promise';

const conexao = async () => {
    const con = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '123456',
        database: '4info3'
    });

    return con;
}

const getUsuario = async (id=undefined) => {
    const con = await conexao();
    let dados;

    if (!id) {
        dados = await con.query('SELECT * FROM usuarios;');
    } else {
        dados = await con.query('SELECT * FROM usuarios WHERE id=?;', [id]);
    }
    
    con.close();
    return dados[0];
}

const createUsuario = async (user) => {
    const con = await conexao();
    await con.query(
        'INSERT INTO usuarios (nome, email) VALUES (?, ?);',
        [user.nome, user.email]
    );

    con.close();
    return `Usuário ${user.nome} adicionado ao MySQL!`;
}

console.log(await getUsuario());