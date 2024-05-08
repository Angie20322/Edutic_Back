import updateNoticia from "../../controllers/noticias.controller/updateNoticia.controllers.js";

const editarNoticia = async (req, res) => {
  const editNoticia = req.body;
  try {
    const noticiaEdit = await updateNoticia(editNoticia);
    res.status(200).json(noticiaEdit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default editarNoticia;
