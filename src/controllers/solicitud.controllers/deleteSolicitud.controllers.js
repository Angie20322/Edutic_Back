import { Solicitud } from "../../models/index.js";
import { emailRechazo } from "../../helpers/emails.js";

const deleteSolicitudController = async (id) => {
  const usuario = await Solicitud.findByPk(id);
  if (!usuario) {
    throw new Error("No existe un usuario con el id", id);
  }
  emailRechazo({
    nombre: usuario.nombre,
    email: usuario.email,
    colegio: usuario.colegio,
    token: usuario.token,
    password: usuario.password,
  });
  await usuario.destroy();

  return "Se ha eliminado el usuario";
};

export default deleteSolicitudController;
