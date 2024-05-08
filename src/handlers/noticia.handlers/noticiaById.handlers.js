import getNoticiaById from "../../controllers/noticias.controller/getNoticiaById.controllers.js";

const noticiaById = async (req, res) => {
  try {
    const { id } = req.params;
    const noticias = await getNoticiaById(id);
    return noticias
      ? res.status(200).json(noticias)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });
  }
};

export default noticiaById;
