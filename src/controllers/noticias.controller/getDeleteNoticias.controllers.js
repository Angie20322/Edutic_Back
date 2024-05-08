import { Noticia } from "../../models/index.js";

const getDeleteNoticia = async (id) => {
  const deleteNoticia = await Noticia.findByPk(id);
  if (!deleteNoticia) {
    throw new Error("No existe la noticia", id);
  }

  await deleteNoticia.destroy();
  return "Se ha eliminado la noticia";
};

export default getDeleteNoticia;