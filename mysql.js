import { manipularDB } from './db.js'

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

const mysql = { getUsuarios, getUsuario, createUsuario, deleteUsuario, attUsuario };
export default mysql;