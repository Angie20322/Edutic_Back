import comprobarEnlaceController from "../../controllers/user.controllers/comprobarEnlace.controllers.js";

const comprobarEnlace = async (req, res) => {
  const { enlace } = req.params;
  try {
    const usuario = await comprobarEnlaceController(enlace);
    try {
      res.status(200).json(usuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default comprobarEnlace;
