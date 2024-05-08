import { Usuario, Solicitud, Admin } from "../../models/index.js";
import { confirmToken } from "../../helpers/tokens.js";
import { emailOlvidoPass } from "../../helpers/emails.js";

const setSolicitarResetPass = async (email) => {
  const usuario = await Usuario.findOne({ where: { email } });
  if (usuario) {
    usuario.enlace = confirmToken();
    usuario.confirmado = false;

    await usuario.save();

    emailOlvidoPass({
      nombre: usuario.nombre,
      email: usuario.email,
      enlace: usuario.enlace,
    });

    return usuario;
  }

  const admin = await Admin.findOne({ where: { email } });
  if (admin) {
    admin.enlace = confirmToken();
    admin.confirmado = false;

    await admin.save();

    emailOlvidoPass({
      nombre: admin.nombre,
      email: admin.email,
      enlace: admin.enlace,
    });

    return admin;
  }

  throw new Error("No se encuentra al usuario");
};

export default setSolicitarResetPass;
