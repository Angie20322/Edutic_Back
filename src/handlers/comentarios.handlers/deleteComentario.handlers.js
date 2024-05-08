import setDeleteComentario from "../../controllers/comentarios.controllers/setDeleteComentario.controllers.js";

const deleteComentario = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const comentarioDelete = await setDeleteComentario(id);
    res.status(200).json(comentarioDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error.message);
  }
};

export default deleteComentario;
