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

const getUsuarios = async (con) => {
    const resultado = await con.query('SELECT * FROM usuarios;');
    return resultado[0];
};

const getUsuario = async (con, user) => {
    const resultado = await con.query('SELECT * FROM usuarios WHERE id=?;', [user.id]);
    return resultado[0][0];
};

const createUsuario = async (con, user) => {
    await con.query(
        'INSERT INTO usuarios (nome, email) VALUES (?, ?);',
        [user.nome, user.email]
    );

    return `Usuário ${user.nome} adicionado ao MySQL!`;
}

const deleteUsuario = async (con, user) => {
    await con.query('DELETE FROM usuarios WHERE id=?', [user.id]);

    return `Usuário ${user.id} deletado do MySQL!`;
}

const attUsuario = async (con, user) => {
    await con.query(
        'UPDATE usuarios SET nome = ?,  email = ? WHERE id = ?',
        [user.nome, user.email, user.id]
    );

    return `Usuário ${user.nome} atualizado no MySQL!`;
}

const manipularSQl = async (user, callback) => {
    let resultado;
    try {
        const con = await conexao();
        resultado = await callback(con, user);
        con.close();
    } catch (e) {
        resultado = `Ocorreu um erro: ${e.message}`;
    } finally {
        return resultado;
    }
}

// const requisicao = { body: {
//     id: 7,
//     nome: "Geovos",
//     email: "geovos@gmail.com"
// }}
// const usuario = await manipularSQl({id: 7}, getUsuario);
// for (let [chave, valor] of Object.entries(requisicao.body)){
//     usuario[chave] = valor;
// }
// console.log(usuario);

// console.log(await manipularSQl(usuario, attUsuario));
