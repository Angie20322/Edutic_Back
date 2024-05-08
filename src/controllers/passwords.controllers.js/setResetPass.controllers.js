import { Usuario, Admin } from "../../models/index.js";
import bcrypt from "bcrypt";

const setResetPass = async (enlace, password) => {
  const usuario = await Usuario.findOne({ where: { enlace } });
  if (usuario) {
    // Hashear el nuevo password
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);
    // resetear el enlace
    usuario.enlace = null;
    usuario.confirmado = true;

    await usuario.save();

    return usuario;
  }

  const admin = await Admin.findOne({ where: { enlace } });

  if (admin) {
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);
    // resetear el enlace
    admin.enlace = null;
    admin.confirmado = true;

    await admin.save();

    return admin;
  }
};

export default setResetPass;
