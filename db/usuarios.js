export const getUsuarioEmail = async (con, user) => await con
    .db("4INFO3")
    .collection("Usuarios")
    .findOne({email: user.email});

export const createUsuario = async (con, user) => {
    await con.db("4INFO3").collection("Usuarios").insertOne(user);

    return `Usuário ${user.email} adicionado ao MongoDB!`;
}