import allSolicitud from '../../controllers/solicitud.controllers/allSolicitud.controllers.js'

const allSolitudes = async (req, res) => {
  try {
    const users = await allSolicitud();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default allSolitudes;
