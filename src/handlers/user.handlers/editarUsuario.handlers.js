import updateUsuario from "../../controllers/user.controllers/updateUsuario.controllers.js";

const editarUsuario = async (req, res) => {
  const editUsuario = req.body;
  const { id } = req.params;
  try {
    const usuarioEdit = await updateUsuario(editUsuario, id);
    res.status(200).json(usuarioEdit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default editarUsuario;
