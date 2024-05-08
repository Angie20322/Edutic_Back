import { Comentario, Herramienta, Usuario } from "../../models/index.js";

const getAllComentarios = async () => {
  const comentarios = await Comentario.findAll({
    include: [
      {
        model: Usuario,
        as: "usuario",
      },
      {
        model: Herramienta,
        as: "herramienta",
      },
    ],
  });
  return comentarios;
};

export default getAllComentarios;
