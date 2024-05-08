import getSolicitudById from "../../controllers/solicitud.controllers/getSolicitudById.controllers.js";

const solicitudById = async (req, res) => {
  try {
    const { id } = req.params;
    const solicitud = await getSolicitudById(id);
    return solicitud
      ? res.status(200).json(solicitud)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default solicitudById
