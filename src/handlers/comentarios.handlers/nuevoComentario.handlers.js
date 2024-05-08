import setNuevoComentario from "../../controllers/comentarios.controllers/setNuevoComentario.controllers.js";

const nuevoComentario = async (req, res) => {
    try {
      const crearComentario = await setNuevoComentario(req.body);
      try {
        res.status(200).json(crearComentario);
      } catch (error) {
        res.status(400).json(error.message);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export default nuevoComentario;