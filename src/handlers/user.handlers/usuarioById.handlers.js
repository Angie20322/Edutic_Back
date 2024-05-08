import getUsuarioById from "../../controllers/user.controllers/getUsuarioById.controllers.js";

const usuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await getUsuarioById(id);
    return usuario
      ? res.status(200).json(usuario)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default usuarioById