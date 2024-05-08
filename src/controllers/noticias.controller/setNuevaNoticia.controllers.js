import { Noticia } from "../../models/index.js";

const setNuevaNoticia = async (data) => {
  const { titulo, imagen, contenido, usuarioId, adminId } = data;

  const noticias = await Noticia.create({
    titulo,
    imagen,
    contenido,
    usuarioId,
    adminId
  });
  return noticias;
};

export default setNuevaNoticia