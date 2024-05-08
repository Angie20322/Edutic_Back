import deleteSolicitudController from "../../controllers/solicitud.controllers/deleteSolicitud.controllers.js";

const deleteSolicitud = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteSolicitudController(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default deleteSolicitud;
