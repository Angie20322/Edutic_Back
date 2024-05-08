import { Noticia } from "../../models/index.js";

const getAllNoticia = async () => {
  const noticias = await Noticia.findAll();
  return noticias;
};

export default getAllNoticia;
