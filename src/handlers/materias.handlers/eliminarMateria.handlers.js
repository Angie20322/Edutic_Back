import getDeleteMateria from "../../controllers/materias.controllers/getDeleteMateria.controllers.js";

const eliminarMateria = async (req, res) => {
  const { id } = req.params;
  try {
    const materiaDelete = await getDeleteMateria(id);
    res.status(200).json(materiaDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default eliminarMateria;
