import { Usuario } from "../../models/index.js";

const getUsuarioById = (id) => {
  try {
    const usuario = Usuario.findOne({
      where: { id: id },
    });
    return usuario;
  } catch (error) {
    return error.message;
  }
};

export default getUsuarioById