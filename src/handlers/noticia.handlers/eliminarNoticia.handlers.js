import getDeleteNoticia from "../../controllers/noticias.controller/getDeleteNoticias.controllers.js";

const eliminarNoticia = async (req, res) => {
  const { id } = req.params;
  try {
    const NoticiaDelete = await getDeleteNoticia(id);
    res.status(200).json(NoticiaDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default eliminarNoticia;
