import updateMateria from "../../controllers/materias.controllers/updateMateria.controllers.js";

const editarMateria = async (req, res) => {
    const editMateria = req.body;
    try {
      const materiaEdit = await updateMateria(editMateria);
      res.status(200).json(materiaEdit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export default editarMateria;