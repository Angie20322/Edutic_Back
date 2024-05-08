import { Usuario, Admin } from "../../models/index.js";

const comprobarEnlaceController = async (enlace) => {
  const usuario = await Usuario.findOne({ where: { enlace } });

  // Si existe un usuario: 
  if (usuario) {
    return usuario;
  }
  const admin = await Admin.findOne({ where: { enlace } });

  // Si existe un admin:
  if (admin) {
    return admin;
  }

  // Si el enlace no es correcto:
  throw new Error("Enlace errado o ya caducado");
};

export default comprobarEnlaceController;
