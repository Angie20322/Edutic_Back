import { Solicitud } from "../../models/index.js";

const getSolicitudById = (id) => {
  try {
    const solicitud = Solicitud.findOne({
      where: { id: id },
    });
    return solicitud;
  } catch (error) {
    return error.message;
  }
};

export default getSolicitudById