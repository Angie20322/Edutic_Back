import bcrypt from "bcrypt";
import { Usuario, Admin } from "../../models/index.js";
import { generarJWT } from "../../helpers/tokens.js";

const setLoginUsuario = async (user) => {
  const { email, password } = user;

  const usuario = await Usuario.findOne({ where: { email } });

  const admin = await Admin.findOne({ where: { email } });

  if (!usuario && !admin) {
    throw new Error("El usuario no existe");
  }

  if (usuario) {
    if (!usuario.confirmado) {
      throw new Error("No ha confirmado su cuenta");
    }

    if (!bcrypt.compareSync(password, usuario.password)) {
      throw new Error("Contraseña incorrecta");
    }

    // Crear el token JWT
    const jwtToken = generarJWT({
      id: usuario.id,
      nombre: usuario.nombre,
      email: usuario.email,
      colegio: usuario.colegio,
    });

    return { jwtToken, usuario };
  }

  if (admin) {
    if (!admin.confirmado) {
      throw new Error("No ha confirmado su cuenta");
    }

    if (!bcrypt.compareSync(password, admin.password)) {
      throw new Error("Contraseña incorrecta");
    }

    // Crear el token JWT
    const jwtToken = generarJWT({
      id: admin.id,
      nombre: admin.nombre,
      email: admin.email,
      colegio: "UDEC",
    });

    return { jwtToken, admin };
  }
};

export default setLoginUsuario;
