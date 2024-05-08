import { Usuario } from "../../models/index.js";

const updateUsuario = async (update, id) => {
  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    throw new Error("Usuario no encontrado");
  }
  try {
    await usuario.update(update);
    return usuario;
  } catch (error) {
    return ({error: error.message})
  }

};

export default updateUsuario;
