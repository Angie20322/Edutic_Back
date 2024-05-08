import getAllNoticia from "../../controllers/noticias.controller/getNoticias.controllers.js";

const allNoticia = async (req, res) => {
    try {
      const noticias = await getAllNoticia();
      res.status(200).json(noticias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export default allNoticia;