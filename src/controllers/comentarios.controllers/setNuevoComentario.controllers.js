import { Comentario } from "../../models/index.js";

const setNuevoComentario = async (data) => {
  const { comentario, usuarioId, herramientaId } =
    data;

  const nuevoComentario = await Comentario.create({
    comentario,
    usuarioId,
    herramientaId,
  });

  return nuevoComentario;
};

export default setNuevoComentario;