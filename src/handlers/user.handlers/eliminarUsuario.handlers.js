import getEliminarUsuario from "../../controllers/user.controllers/getEliminarUsuario.controllers.js";

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getEliminarUsuario(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default eliminarUsuario;
