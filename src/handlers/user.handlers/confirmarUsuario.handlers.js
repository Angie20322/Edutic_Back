import confirmarUsuarioController from "../../controllers/user.controllers/confirmarUsuario.controllers.js";

const confirmarUsuario = async (req, res) => {
  const { enlace } = req.params;
  const { password } = req.body;
  try {
    const confirmacion = await confirmarUsuarioController(enlace, password);
    try {
      res.status(200).json(confirmacion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default confirmarUsuario;
