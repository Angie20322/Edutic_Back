import { Usuario } from "../../models/index.js";
import bcrypt from "bcrypt";

const getChangePassword = async (id, password) => {
  try {
    const usuario = await Usuario.findByPk(id);

    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    await usuario.save();

    return "Contraseña cambiada";
  } catch (error) {
    throw new Error(error);
  }
};

export default getChangePassword;
