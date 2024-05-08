import getAllMaterias from "../../controllers/materias.controllers/getAllMaterias.controllers.js";

const allMaterias = async (req, res) => {
    try {
      const materias = await getAllMaterias();
      res.status(200).json(materias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export default allMaterias;