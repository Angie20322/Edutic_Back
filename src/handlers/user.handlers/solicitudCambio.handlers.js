import getSolicitudCambio from "../../controllers/user.controllers/getSolicitudCambio.controllers.js";

const solicitudCambio = async (req, res) => {
  const { id } = req.params;
  const { contenido } = req.body;
  console.log(id);
  console.log(contenido);
  try {
    const cambio = await getSolicitudCambio(id, contenido);
    res.status(200).json({ msg: cambio });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default solicitudCambio;
