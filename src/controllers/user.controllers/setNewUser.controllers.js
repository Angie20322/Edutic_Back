import bcrypt from "bcrypt";

import { Usuario, Solicitud } from "../../models/index.js";
import { emailRegistro } from "../../helpers/emails.js";
import { confirmToken } from "../../helpers/tokens.js";

const setNewUser = async (data) => {
  // Extraer los datos
  const {
    id,
    nombre,
    apellido,
    email,
    telefono,
    departamento,
    ciudad,
    colegio,
    nit,
    materia,
    cargo,
    direccion,
    enfasis,
    token,
    confirmado,
    rol,
  } = data;
  // Verificar que el usuario no este duplicado

  const existeUsuario = await Usuario.findOne({
    where: { email },
  });

  if (existeUsuario) {
    throw new Error("El usuario ya está registrado");
  }

  const usuario = await Usuario.create({
    nombre,
    apellido,
    email,
    telefono,
    departamento,
    ciudad,
    colegio,
    materia,
    cargo,
    nit,
    direccion,
    enfasis,
    token,
    enlace: confirmToken(),
    confirmado,
    password: bcrypt.hashSync("987654321", 10),
    rol,
  });
  const eliminarSolicitud = await Solicitud.findByPk(id);
  await eliminarSolicitud.destroy();
  // Enviar email de confirmación
  emailRegistro({
    nombre: usuario.nombre,
    email: usuario.email,
    colegio: usuario.colegio,
    token: usuario.token,
    enlace: usuario.enlace,
  });

  return usuario;
};

export default setNewUser;
