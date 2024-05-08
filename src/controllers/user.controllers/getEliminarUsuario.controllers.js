import { emailEliminado } from "../../helpers/emails.js";
import { Usuario } from "../../models/index.js";

const getEliminarUsuario = async (id) => {
  const eliminarUsuario = await Usuario.findByPk(id);
  if (!eliminarUsuario) {
    throw new Error("No existe un usuario con el id", id);
  }
  emailEliminado({
    nombre: eliminarUsuario.nombre,
    email: eliminarUsuario.email,
  });

  await eliminarUsuario.destroy();

  return "Se ha eliminado al usuario";
};

export default getEliminarUsuario;
