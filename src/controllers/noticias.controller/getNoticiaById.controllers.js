import { Noticia, Usuario, Admin } from "../../models/index.js";

const getNoticiaById = (id) => {
  try {
    const noticias = Noticia.findOne({
      where: { id: id },
      include: [
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Admin,
          as: "admin",
        },
      ],
    });
    return noticias;
  } catch (error) {
    return error.message;
  }
};

export default getNoticiaById;
