import { Solicitud } from "../../models/index.js";

const allSolicitud = async () => {
  const solicitudes = await Solicitud.findAll();
  return solicitudes;
};

export default allSolicitud