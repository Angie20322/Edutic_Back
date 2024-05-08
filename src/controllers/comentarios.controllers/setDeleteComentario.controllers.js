import { Comentario } from "../../models/index.js";

const setDeleteComentario = async (id) => {
  const deleteComentario = await Comentario.findByPk(id);
  if (!deleteComentario) {
    throw new Error("No existe el comentario", id);
  }

  await deleteComentario.destroy();
  return "Se ha eliminado el comentario";
};

export default setDeleteComentario