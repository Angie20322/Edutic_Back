import { Noticia } from "../../models/index.js";

const updateNoticia = async (update) => {
  const noticias = await Noticia.findByPk(update.id);

  if (!noticias) {
    throw new Error("Noticia no encontrada");
  }
  try {
    await noticias.update(update);
    return noticias;
  } catch (error) {
    return { error: error.message };
  }
};

export default updateNoticia;
