import { Usuario } from "../../models/index.js";
import bcrypt from "bcrypt";

const getChangePassword = async (id, data) => {
  const { password, actualPass } = data;

  const usuario = await Usuario.findByPk(id);

  if (!bcrypt.compareSync(actualPass, usuario.password)) {
    throw new Error("Contraseña incorrecta");
  }

  try {
    const salt = await bcrypt.genSalt(10);
    usuario.password = await bcrypt.hash(password, salt);

    await usuario.save();

    return "Contraseña cambiada";
  } catch (error) {
    throw new Error(error);
  }
};

export default getChangePassword;
