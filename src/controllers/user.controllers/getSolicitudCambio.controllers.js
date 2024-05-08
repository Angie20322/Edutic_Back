import { emailSolicitudDatos } from "../../helpers/emails.js";
import { Usuario } from "../../models/index.js";

const getSolicitudCambio = async (id, contenido) => {
  const usuario = await Usuario.findByPk(id);

  emailSolicitudDatos({
    nombre: usuario.nombre,
    apellido: usuario.apellido,
    email: usuario.email,
    contenido,
  });

  return "Solicitud realizada";
};

export default getSolicitudCambio;
