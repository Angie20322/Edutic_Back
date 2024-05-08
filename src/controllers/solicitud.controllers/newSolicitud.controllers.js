import { Solicitud } from "../../models/index.js";
import { emailSolicitud } from "../../helpers/emails.js";
import { triggerToken } from "../../helpers/tokens.js";

const newSolicitud = async (data) => {
  // Extraer los datos
  const {
    nombre,
    apellido,
    email,
    telefono,
    departamento,
    ciudad,
    colegio,
    nit,
    direccion,
    materia,
    cargo,
    enfasis,
    proceso,
    confirmado,
    rol,
  } = data;
  // Verificar que el usuario no este duplicado

  const existeSolicitud = await Solicitud.findOne({
    where: { email },
  });

  if (existeSolicitud) {
    throw new Error("El usuario ya está registrado");
  }

  const usuario = await Solicitud.create({
    nombre,
    apellido,
    email,
    telefono,
    departamento,
    ciudad,
    colegio,
    nit,
    direccion,
    materia,
    cargo,
    enfasis,
    proceso,
    token: triggerToken(),
    confirmado,
    rol,
  });
  // Enviar email de confirmación
  emailSolicitud({
    nombre: usuario.nombre,
    email: usuario.email,
    colegio: usuario.colegio,
    token: usuario.token,
    password: usuario.password,
  });

  return usuario;
};

export default newSolicitud;
