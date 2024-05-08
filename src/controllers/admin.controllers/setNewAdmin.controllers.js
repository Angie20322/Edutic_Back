import bcrypt from "bcrypt";

import { Admin } from "../../models/index.js";
import { emailAdmin } from "../../helpers/emails.js";
import { confirmToken } from "../../helpers/tokens.js";

const setNewAdmin = async (data) => {
  // Extraer los datos
  const { nombre, email, telefono } = data;
  // Verificar que el usuario no este duplicado

  const existeAdmin = await Admin.findOne({
    where: { email },
  });

  if (existeAdmin) {
    throw new Error("El admin ya está registrado");
  }

  const miembro = await Admin.create({
    nombre,
    email,
    telefono,
    enlace: confirmToken(),
    confirmado: false,
    password: bcrypt.hashSync("987654321", 10),
    rol: "admin",
  });
  // Enviar email de confirmación
  emailAdmin({
    nombre: miembro.nombre,
    email: miembro.email,
    enlace: miembro.enlace,
  });

  return miembro;
};

export default setNewAdmin;
