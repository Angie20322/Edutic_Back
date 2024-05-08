import { emailEliminado } from "../../helpers/emails.js";
import { Admin } from "../../models/index.js";

const getEliminarAdmin = async (id) => {
  const eliminarAdmin = await Admin.findByPk(id);
  if (!eliminarAdmin) {
    throw new Error("No existe un admin con el id", id);
  }

  emailEliminado({
    nombre: eliminarAdmin.nombre,
    email: eliminarAdmin.email,
  });

  await eliminarAdmin.destroy();
  return "Admin eliminado";
};

export default getEliminarAdmin;
