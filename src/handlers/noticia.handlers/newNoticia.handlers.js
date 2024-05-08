import setNuevaNoticia from "../../controllers/noticias.controller/setNuevaNoticia.controllers.js";

const newNoticia = async (req, res) => {
  try {
    const crearNoticia = await setNuevaNoticia(req.body);
    try {
      res.status(200).json(crearNoticia);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newNoticia;
