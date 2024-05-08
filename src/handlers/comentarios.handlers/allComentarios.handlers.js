import getAllComentarios from "../../controllers/comentarios.controllers/getAllComentarios.controllers.js";

const allComentarios = async (req, res) => {
  try {
    const comentarios = await getAllComentarios();
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default allComentarios;
